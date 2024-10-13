describe('Verification Page Test', () => {
  
    // Before each test, visit the verification page
    beforeEach(() => {
      cy.visit('/VerificationPage'); // Assuming '/VerificationPage' is the route for the verification page
    });
  
    it('should display the verification page correctly', () => {
      // Check that the verification page container is visible
      cy.get('.verification-page').should('be.visible');
      cy.screenshot('verification-page-visibility'); // Screenshot after visibility check
  
      // Check that the modal is displayed
      cy.get('.modal-container').should('be.visible'); // Adjusted to use the appropriate selector
      cy.screenshot('verification-page-modal'); // Screenshot of modal visibility
  
      // Check that the logo is displayed correctly
      cy.get('img').should('have.attr', 'src').and('include', 'aladiaLogo.png');
      cy.screenshot('verification-page-logo'); // Screenshot of logo check
    });
  
    // Test interaction with modal (if applicable)
    it('should interact with the modal', () => {
      // Check if there’s a "Verify" button and click it
      cy.get('button.verify-button').should('be.visible').click();
      cy.screenshot('verification-page-click-verify-button'); // Screenshot after clicking verify button
  
      // Check that a success message or state appears after interaction
      cy.get('.success-message').should('contain.text', 'Verification successful');
      cy.screenshot('verification-page-success-message'); // Screenshot of success message
    });
  
    // Additional tests can be added if the modal includes other interactive elements
  });
  