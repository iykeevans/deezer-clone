/// <reference types="cypress" />

describe("Deezer Clone", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Loads The App Correctly", () => {
    cy.visit("/");
  });

  it("should have the text `Please Search For An Artist` on initial load", () => {
    cy.contains("Please Search For An Artist");
  });

  it("should have the search button disabled if there is no input text", () => {
    cy.get('[data-testid="search-button"]').should("be.disabled");
  });

  it("should have the search button enabled if there is an input text", () => {
    cy.get('[data-testid="search-input"]').type("Eminem");
    cy.get('[data-testid="search-button"]').should("be.enabled");
  });

  it("should show artists cards if you type an artist name in the search input and click the search button", () => {
    cy.get('[data-testid="search-input"]').type("Eminem");
    cy.get('[data-testid="search-button"]').click();
    cy.contains("Fans").should("be.visible");
  });

  it("should redirect to the artist page on artist card click", () => {
    const query = "eminem";
    cy.get('[data-testid="search-input"]').type(query);
    cy.get('[data-testid="search-button"]').click();
    cy.get(`[data-testid="artist-card-${query}"]`).click();
    cy.contains("Albums");
    cy.contains("Top Tracks");
  });

  it("should redirect to search screen on back button click", () => {
    const query = "eminem";
    cy.get('[data-testid="search-input"]').type(query);
    cy.get('[data-testid="search-button"]').click();
    cy.get(`[data-testid="artist-card-${query}"]`).click();
    cy.get('[data-testid="go-back"]').click();
    cy.contains("Fans");
  });
});
