describe('Aladia Register Page Test', () => {
  
    // Before each test, visit the register page
    beforeEach(() => {
      cy.visit('/register');  // Assuming "/register" is the route for the register page
    });
  
    it('should display the register page correctly', () => {
      // Check that the register container is visible
      cy.get('.register-container').should('be.visible');
      cy.screenshot('register-page-visibility'); // Screenshot after visibility check
  
      // Check that the profile picture container (logo) is visible
      cy.get('.profile-picture').should('be.visible')
        .and('have.attr', 'src')
        .and('include', 'aladiaLogo.png');
      cy.screenshot('register-page-logo'); // Screenshot of logo check
  
      // Check that the welcome message and instructions are displayed correctly
      cy.get('.welcome-message').should('contain.text', 'Nice to meet you,');
      cy.get('.instruction').should('contain.text', 'Upload a profile picture and complete your presentation');
      cy.screenshot('register-page-message'); // Screenshot after message check
    });
  
    it('should navigate back to login when "Back To Login" is clicked', () => {
      // Click on the back button
      cy.get('.backer').click();
      cy.screenshot('register-page-back-to-login'); // Screenshot after back button click
  
      // Verify that the user is redirected to the login page
      cy.url().should('include', '/login'); 
      cy.screenshot('register-page-redirect-login'); // Screenshot after redirection
    });
  
    it('should interact with the registration form', () => {
      // Fill out the form (assuming there are input fields for username, email, password in RegistrationForm)
      cy.get('input[name="username"]').type('newuser');
      cy.get('input[name="email"]').type('newuser@example.com');
      cy.get('input[name="password"]').type('password123');
      
      // Validate that the values were typed in
      cy.get('input[name="username"]').should('have.value', 'newuser');
      cy.get('input[name="email"]').should('have.value', 'newuser@example.com');
      cy.get('input[name="password"]').should('have.value', 'password123');
      cy.screenshot('register-page-form-inputs'); // Screenshot after filling form
  
      // Submit the form (assuming there is a submit button)
      cy.get('button[type="submit"]').click();
      cy.screenshot('register-page-submit'); // Screenshot after form submission
  
      // Check if the URL changes after successful submission (assuming it redirects to a dashboard)
      cy.url().should('include', '/dashboard'); 
      cy.screenshot('register-page-redirect-dashboard'); // Screenshot after redirect to dashboard
    });
  
    it('should display Terms & Conditions', () => {
      // Check that the Terms & Conditions text is visible
      cy.get('.terms-text').should('be.visible')
        .and('contain.text', 'Terms & Conditions');
      cy.screenshot('register-page-terms-and-conditions'); // Screenshot of Terms & Conditions
    });
  });
  