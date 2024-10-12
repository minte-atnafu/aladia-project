<template>
    <div class="container">
      <div class="join-card">
        <div class="back-to-login">
          <a href="/login">Back to Log in</a>
        </div>
        <h2>{{ userName }}</h2>
        <p>Thanks for joining Aladia</p>
        <div class="logo">
          <img :src="logoSrc" alt="Aladia Logo" />
        </div>
        <router-link to="/marketplace">
          <button class="enter-btn">Enter Marketplace</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import logoSrc from '@/assets/aladiaLogo.png';
  
  export default {
    data() {
      return {
        userName: "Test Name",
        logoSrc,
      };
    },
  };
  </script>
  
  <style scoped>
  
 /* General styles */
body {
  margin: 0;
  padding: 0;
  background-color: black; /* Changed to white background */
  color: black; /* Change text color to black for visibility */
  font-family: 'Arial', sans-serif;
}

  
  /* Container that centers the join card */
  .container {
    background-color: rgb(21, 20, 20);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw; /* Full width */
    padding: 20px; /* Adds space around the container */
  }
  
  /* Card styles */
  .join-card {
    background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent dark background */
    padding: 50px; /* Increased padding for a larger card */
    border-radius: 15px; /* Larger border radius */
    text-align: center;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    max-width: 500px; /* Set a max-width for the card */
    width: 100%; /* Ensure it expands with the container */
    color: white; /* Ensure all text is white */
    border: 1px solid white;
    border-radius: 15px;
  }
  
  /* Back to login */
  .back-to-login a {
    color: white; /* Ensures link text is white */
    font-size: 16px; /* Slightly larger font */
    text-decoration: none;
    display: block;
    margin-bottom: 20px;
  }
  
  .back-to-login a:hover {
    text-decoration: underline;
  }
  
  /* Text styling */
  h2 {
    font-size: 28px; /* Larger font for title */
    margin-bottom: 15px;
  }
  
  p {
    font-size: 18px; /* Slightly larger font for paragraph */
    margin-bottom: 30px;
  }
  
  /* Logo */
  .logo img {
    max-width: 120px; /* Increased size of the logo */
    margin-bottom: 30px;
  }
  
  /* Button styling */
  .enter-btn {
    background: linear-gradient(to right, #800080, #000080); /* Gradient button */
    border: none;
    padding: 12px 25px; /* Larger button size */
    color: white;
    font-size: 18px; /* Slightly larger text */
    border-radius: 8px; /* More rounded corners */
    cursor: pointer;
    transition: 0.3s;
  }
  
  .enter-btn:hover {
    opacity: 0.9;
  }
  </style>
  