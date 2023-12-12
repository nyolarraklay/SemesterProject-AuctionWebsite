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
    cy.visit("/src/html/register.html");
    cy.get(".navbar-nav > :nth-child(1)").click();
    cy.wait(1000);
    cy.url().should("include", "/src/html/homePage.html");
  });

  it("should navigate to the listings page", () => {
    cy.visit("/src/html/homePage.html");
    cy.get(":nth-child(2) > .nav-link").click();
    cy.wait(1000);
    cy.url().should("include", "/src/html/listings.html");
  });

  it("should navigate to the contact page", () => {
    cy.visit("/src/html/listings.html");
    cy.get(".navbar-nav > :nth-child(5)").click();
    cy.wait(1000);
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

  it("should not submit the log in form", () => {
    cy.visit("/");

    cy.get("#email")
      .type("fake@stud.noroff.no")
      .should("have.value", "fake@stud.noroff.no");
    cy.get("#password").type("fakepassword");

    cy.get("#loginForm").trigger("submit");
    cy.on("window:alert", (t) => {
      expect(t).to.contains({
        errors: [{ message: "Invalid email or password" }],
        status: "Unauthorized",
        statusCode: 401,
      });
    });
  });
});

describe("Auction Website: Authorized user", () => {
  it("should submit the log in form and access profile page", () => {
    cy.visit("/index.html");
    cy.get(".navbar-nav > :nth-child(3)").click();
    cy.wait(1000);
    cy.url().should("include", "/");

    cy.get("#email").type("asasa@noroff.no");
    cy.get("#password").type("password");

    cy.get("#loginForm").submit();
    cy.wait(1000);

    cy.url().should("include", "/src/html/homePage.html", {
      timeout: 10000,
    });
    cy.get(".dropdown > .btn").click();
    cy.get(".dropdown-menu > :nth-child(1) > .fs-7").click();
    cy.url().should("contains", "src/html/profilePage.html");
  });

  it("should update the user's avatar", () => {
    cy.visit("/src/html/register.html");
    cy.get(".navbar-nav > :nth-child(3)").click();
    cy.url().should("include", "/");

    cy.get("#email").type("asasa@noroff.no");
    cy.get("#password").type("password");

    cy.get("#loginForm").submit();
    cy.wait(1000);

    cy.url().should("include", "/src/html/homePage.html", {
      timeout: 10000,
    });
    cy.get(".dropdown > .btn").click();
    cy.wait(1000);
    cy.get(".dropdown-menu > :nth-child(1) > .fs-7").click();
    cy.wait(1000);
    cy.url().should("include", "src/html/profilePage.html");
    cy.wait(1000);
    cy.get(".profileDetails > .editButton").click();
    cy.wait(1000);
    cy.get("#avatar").type("https://source.unsplash.com/random/60");
    cy.wait(1000);
    cy.get("#updateRegisterForm").submit();
    cy.wait(1000);
    cy.url().should("include", "src/html/profilePage.html");
  });

  it("should create a new Listing", () => {
    cy.visit("/src/html/register.html");
    cy.get(".navbar-nav > :nth-child(3)").click();
    cy.url().should("include", "/");

    cy.get("#email").type("asasa@noroff.no");
    cy.get("#password").type("password");

    cy.get("#loginForm").submit();
    cy.wait(1000);

    cy.url().should("include", "/src/html/homePage.html", {
      timeout: 10000,
    });
    cy.get(".dropdown > .btn").click();
    cy.get(".dropdown-menu > :nth-child(2) > .fs-7").click();
    cy.url().should("include", "src/html/profileListings.html");
    cy.get('[data-bs-toggle="modal"]').click();
    cy.wait(1000);
    cy.get("#postTitle").type("My sample Listing");
    cy.get("#postDescription").type("Description of my sample Listing");
    cy.get("#postTags").type("sample");
    cy.get("#postMedia").type("https://source.unsplash.com/random/63");
    cy.get("#postEnds").click();
    cy.get("#newPost").submit();
    cy.wait(1000);
    cy.url().should("include", "src/html/profileListings.html");
  });

  it("should may view bids on a Listing", () => {
    cy.visit("/src/html/register.html");
    cy.get(".navbar-nav > :nth-child(3)").click();
    cy.url().should("include", "/");

    cy.get("#email").type("asasa@noroff.no");
    cy.get("#password").type("password");

    cy.get("#loginForm").submit();
    cy.wait(1000);

    cy.url().should("include", "/src/html/homePage.html", {
      timeout: 10000,
    });
    cy.get(".dropdown > .btn").click();
    cy.get(".dropdown-menu > :nth-child(2) > .fs-7").click();
    cy.url().should("include", "src/html/profileListings.html");
    cy.get(
      '[href="/src/html/details.html?id=e86df5fb-9984-4475-ba30-2a14fdd043e7"] > .card-body > .card-img-bottom'
    ).click();
    cy.wait(1000);
    cy.url().should("include", "src/html/details.html");
  });

  it("should may add a bid to another user's listing", () => {
    cy.visit("/src/html/register.html");
    cy.get(".navbar-nav > :nth-child(3)").click();
    cy.wait(1000);
    cy.url().should("include", "/");

    cy.get("#email").type("asasa@noroff.no");
    cy.get("#password").type("password");

    cy.get("#loginForm").submit();
    cy.wait(1000);

    cy.url().should("include", "/src/html/homePage.html", {
      timeout: 10000,
    });
    cy.get(".dropdown > .btn").click();
    cy.get(".dropdown-menu > :nth-child(2) > .fs-7").click();
    cy.url().should("include", "src/html/profileListings.html");
    cy.get(
      '[href="/src/html/details.html?id=e86df5fb-9984-4475-ba30-2a14fdd043e7"] > .card-body > .card-img-bottom'
    ).click();
    cy.url().should("include", "src/html/details.html");
    cy.get(".mt-3 > :nth-child(1) > .btn").click();
    cy.get("#amount").type("10");
    cy.get("#bidForm").submit();
    cy.wait(1000);
  });

  it("should successfully logout the website", () => {
    cy.visit("/src/html/register.html");
    cy.get(".navbar-nav > :nth-child(3)").click();
    cy.wait(1000);
    cy.url().should("include", "/");

    cy.get("#email").type("asasa@noroff.no");
    cy.get("#password").type("password");

    cy.get("#loginForm").submit();
    cy.wait(1000);

    cy.url().should("include", "/src/html/homePage.html", {
      timeout: 10000,
    });
    cy.get(".dropdown > .btn").click();
    cy.get(".dropdown-menu > :nth-child(1) > .fs-7").click();
    cy.url().should("include", "src/html/profilePage.html");
    cy.get("#logButton").click();
    cy.wait(1000);
    cy.url().should("include", "/index.html");
  });

  it("should successfully clear the Local Storage", () => {
    cy.visit("index.html", {
      onBeforeLoad(win) {
        win.localStorage.clear();
      },
    });
  });
});
