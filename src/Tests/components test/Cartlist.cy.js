describe("CartList.vue", () => {
  beforeEach(() => {
    cy.visit("./components/CartList.vue"); 
  });

  it("renders the correct number of products", () => {
    cy.get(".product-container").should("have.length", 5); 
  });

  it("displays product details correctly", () => {
    cy.get(".product-container").each(($product, index) => {
      cy.wrap($product)
        .find("h3")
        .should("contain.text", `Product ${index}`); 
      cy.wrap($product)
        .find("p")
        .should("contain.text", `Price: $${index}.00`);
    });
  });

  it("removes product from cart when remove button is clicked", () => {
    cy.get(".product-container")
      .first()
      .within(() => {
        cy.get(".remove-button").click();
      });
    cy.get(".product-container").should("have.length"); 
  });
});
