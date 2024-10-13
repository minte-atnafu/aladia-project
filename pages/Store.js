export const store = {
    registeredEmails: ['minte@aait'],
    passwords: {
      'minte@aait': 'password123',
    },
    currentEmail: 'minte@aait', // Store the email entered earlier
    isEmailRegistered(email) {
      return this.registeredEmails.includes(email);
    }
  };
  