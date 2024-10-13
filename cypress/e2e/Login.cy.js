describe('Aladia Login Page Test', () => {
  
  // Before each test, visit the login page
  beforeEach(() => {
    cy.visit('/login');  // Assuming "/login" is the route for the login page
  });

  it('should display the login page with logo and text', () => {
    // Check that the login container is visible
    cy.get('.login-container').should('be.visible');
    cy.screenshot('login-page-visibility'); // Screenshot after visibility check

    // Check that the logo is visible and has the correct src
    cy.get('.logo').should('be.visible')
      .and('have.attr', 'src')
      .and('include', 'aladiaLogo.png');
    cy.screenshot('login-page-logo'); // Screenshot of logo check

    // Check that the welcome message is correct
    cy.get('.text-container h2').should('contain.text', 'Welcome to Aladia');
    cy.get('.text-container p').should('contain.text', 'Create or access your account from here');
    cy.screenshot('login-page-message'); // Screenshot after message check
  });

  it('should allow users to input their credentials', () => {
    // Test the username input field
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="username"]').should('have.value', 'testuser');
    cy.screenshot('login-page-username-input'); // Screenshot after username input
    
    // Test the password input field
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="password"]').should('have.value', 'password123');
    cy.screenshot('login-page-password-input'); // Screenshot after password input
  });

  it('should submit the login form and redirect', () => {
    // Input username and password
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password123');
    
    // Submit the form by clicking the submit button
    cy.get('button[type="submit"]').click();
    cy.screenshot('login-page-submit'); // Screenshot after submit

    // Verify that the URL changes after submission (change "/dashboard" to the actual path)
    cy.url().should('include', '/dashboard'); 
    cy.screenshot('login-page-redirect'); // Screenshot after redirect
  });

  it('should display error on invalid login', () => {
    // Enter incorrect credentials
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpassword');
    
    // Submit the form
    cy.get('button[type="submit"]').click();
    cy.screenshot('login-page-error'); // Screenshot after submit with incorrect credentials

    // Expect an error message (update with your error message selector)
    cy.get('.error-message')
      .should('be.visible')
      .and('contain.text', 'Invalid credentials');
    cy.screenshot('login-page-error-message'); // Screenshot after error message
  });
});
