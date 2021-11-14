describe("Search bar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to value from searchBar", () => {
    cy.findByRole("textbox").type("taxi").should("have.value", "taxi");
    cy.findByRole("button", { name: /search/i }).click();
    cy.location("pathname").should("match", /\/taxi$/);
  });
});
