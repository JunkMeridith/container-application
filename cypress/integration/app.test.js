describe("First Test", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});

describe("Second Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000");
  });
  it("Visit the app", () => {
    cy.visit("/");
  });
});
