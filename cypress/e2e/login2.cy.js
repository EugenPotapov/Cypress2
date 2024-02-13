describe("login page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });

  it("login succesfully", () => {
    cy.viewport(1920, 1080);
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    cy.contains("Log out").should("be.visible");
  });

  it("Added book", () => {
    cy.viewport("iphone-x");
    cy.contains("Add new").click();
    cy.contains("Book description").should("be.visible");
    cy.get("#title").type("Лабиринт отражений");
    cy.get("#description").type("Киберпанк");
    cy.get("#authors").type("Сергей Лукьяненко");
    cy.get("#favorite").click();
    cy.contains("Submit").click();
  });

  it("Add to favorite", () => {
    cy.viewport("macbook-15");
    cy.contains("Add to favorite").click();
  });

  it("Delete book from favorite", () => {
    cy.contains("Delete from favorite").click();
  });
});
