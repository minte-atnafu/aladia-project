<template>
    <div class="login-page">
      <div class="login-container">
        <div class="header-section">
          <img class="logo" src="../assets/aladiaLogo.png" alt="Aladia Logo" />
          <div class="welcome-text">
            <h1>Welcome to Aladia</h1>
            <p class="subtext">Create or access your account from here</p>
          </div>
        </div>
  
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email" class="label">Enter your email</label>
            <input type="email" id="email" v-model="email" placeholder="Email Address" required />
          </div>
          <button type="submit" class="enter-btn">Enter</button>
  
          <div class="divider">
            <span>Or</span>
          </div>
  
          <div class="social-login">
            <a href="#" class="google">
              <img src="../assets/google.logo.png" alt="Google Logo" />
              Continue with Google
            </a>
            <a href="#" class="facebook">
              <img src="../assets/facebookLogo.png" alt="Facebook Logo" />
              Continue with Facebook
            </a>
            <a href="#" class="apple">
              <img src="../assets/appleLogo.png" alt="Apple Logo" />
              Continue with Apple
            </a>
          </div>
        </form>
  
        <p class="terms">Terms & Conditions</p>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        email: '',
      };
    },
  
    methods: {
      handleSubmit() {
        console.log('Email:', this.email);
      },
    },
  };
  </script>
   
   <style scoped>
   .login-page {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
     background-color: #2c2828; /* Dark background as per the design */
   }
   
   .login-container {
  position: relative; /* Position relative to create a context for the pseudo-element */
  padding: 30px; /* Space inside the container */
  background-color: #151515; /* Background color of the container */
  border-radius: 10px; /* Rounded corners */
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* Prevent overflow of the pseudo-element */
}

.login-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* Place behind the content */
  background: linear-gradient(to right, black 50%, white 50%); /* Half black and half white */
  background-size: 200% 100%; /* Double the width for the gradient animation */
  animation: gradient-animation 2s linear infinite; /* Optional: Animation for effect */
  border-radius: 10px; /* Ensure the pseudo-element matches the container's rounded corners */
}

@keyframes gradient-animation {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}

   
 .header-section {
     display: flex;
     align-items: center;
     justify-content: center;
     margin-bottom: 20px;
     border-radius: 10px;
     box-shadow: 0px 4px 10px rgba(0, 0, 0, 5);
   }
   
   .header-content {
     border: 2px solid #ee00ff; /* Adjust border color as needed */
     border-radius: 8px; /* Rounded corners */
     padding: 15px; /* Space inside the border */
     margin-bottom: 20px; /* Space below the header */
   }
   
   .logo {
     width: 80px; /* Adjust the size of the logo */
     margin-right: 20px; /*Adds spacing between logo and text */
   }
   
   .welcome-text {
     text-align: left; /* Align text to the left */
   }
   
   /* Rest of your styles remain unchanged */
   h1 {
     font-size: 24px;
     color: white;
     margin-bottom: 5px;
   }
   
   .subtext {
     font-size: 14px;
     color: #b0b0b0;
     margin-bottom: 20px;
   }
   
   .form-group {
     margin-bottom: 20px;
     flex-direction: column;  /* Stack elements vertically */
     align-items: center;     /* Center items horizontally */
     
   }
   
   label {
     /* display: block; */
     /* text-align: left; */
     font-size: 16px;
     color: #b0b0b0;
     margin-bottom: 20px;
     justify-content: center;
   }
   
   input {
     width: 100%;
     padding: 10px;
     background-color: #333;
     border: none;
     border-radius: 5px;
     color: #fff;
     font-size: 14px;
   }
   
   input::placeholder {
     color: #999;
   }
   
   .enter-btn {
     width: 100%;
     padding: 12px;
     background-color: #030608;
     border: none;
     border-radius: 5px;
     color: white;
     cursor: pointer;
     font-size: 16px;
   }
   
   .enter-btn:hover {
     background-color: #2d5b8d;
   }
   
   .divider {
     margin: 20px 0;
     color: #b0b0b086;
   }
   
   .divider span {
     background-color: #121212;
     padding: 0 10px;
   }
   
   .social-login a {
     display: flex;
     align-items: center; /* Aligns logos and text */
     padding: 10px;
     margin-bottom: 10px;
     background-color: #222121;
     color: white;
     border-radius: 5px;
     text-decoration: none;
     font-size: 14px;
   }
   
   .social-login a img {
     width: 20px; /* Adjust logo size */
     height: 20px; /* Adjust logo size */
     margin-right: 10px; /* Spacing between logo and text */
   }
   
   .social-login a.google {
     background-color: #131313;
     border:1px solid white;
     justify-content: center;
   }
   
   .social-login a.facebook {
     background-color: #101113;
     border:1px solid white;
     justify-content: center;
   }
   
   .social-login a.apple {
     background-color: #000;
     border:0.2px solid white;
     justify-content: center;
   }
   .message{
    width: 20px; /* Adjust logo size */
    height: 20px;
   }
   
   .terms {
     font-size: 12px;
     color: #888;
     margin-top: 20px;
   }
   </style>
   