const book = {
  title: "Лабиринт отражений",
  description: "Киберпанк",
  author: "Сергей Лукьяненко",
};

describe("login page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });

  it("login succesfully", () => {
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Added book", () => {
    cy.addBook(book);
    cy.contains(book.title).should("be.visible");
  });

  it("Add to favorite", () => {
    cy.addFavorite(book);
    cy.visit("/favorites");
    cy.get(".card-title").should("contain.text", book.title);
  });

  it("Delete book from favorite", () => {
    cy.visit("/favorites");
    cy.contains(book.title)
      .should("be.visible")
      .within(() => cy.get(".card-footer > .btn").click({ force: true }));
    cy.contains(book.title).should("not.exist");
  });
});
