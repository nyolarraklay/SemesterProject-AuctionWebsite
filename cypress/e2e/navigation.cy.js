describe("Auction Website: Unauthorized user", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the register page", () => {
    cy.visit("/");
    cy.get(":nth-child(4) > .nav-link").click();
    cy.url().should("include", "/src/html/register.html");
  });

  it("should navigate to the login page", () => {
    cy.visit("/src/html/register.html");
    cy.get(".navbar-nav > :nth-child(3)").click();
    cy.url().should("include", "/");
  });

  it("should navigate to the home page", () => {
    cy.visit("/");
    cy.get(".navbar-nav > :nth-child(1)").click();
    cy.url().should("include", "/src/html/homePage.html");
  });

  it("should navigate to the listings page", () => {
    cy.visit("/");
    cy.get(":nth-child(2) > .nav-link").click();
    cy.url().should("include", "/src/html/listings.html");
  });

  it("should navigate to the contact page", () => {
    cy.visit("/");
    cy.get(".navbar-nav > :nth-child(5)").click();
    cy.url().should("include", "/src/html/contactPage.html");
  });

  it("should not navigate to the details page and redirected to login page instead", () => {
    cy.visit("src/html/listings.html");
    cy.get(
      ":nth-child(5) > .card-body > :nth-child(1) > .card-img-bottom"
    ).click();
    cy.url().should("include", "/");
  });

  it("should allow an unauthorized user to search listings", () => {
    cy.visit("src/html/listings.html");
    cy.get("#search > .form-control").type("zzz").type("{enter}");
    cy.url().should("include", "src/html/listings.html");
  });
});
