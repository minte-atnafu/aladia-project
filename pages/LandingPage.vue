<template>
    <div class="landing-page">
      <!-- Header -->
      <header class="header">
        <div class="search-bar">
          <input type="text" placeholder="Search courses..." class="search-input" />
        </div>
        <div class="join-us">
          <nuxt-link to="/login" class="join-link">
            <button class="join-btn">
              <img src="@/assets/logo.png" alt="Logo Icon" class="button-logo" /> <!-- Logo icon inside the button -->
              Join Us
            </button>
          </nuxt-link>
        </div>
      </header>
  
      <!-- Main Content -->
      <section class="main-content">
        <!-- Left Content (Text Section) -->
        <div class="left-content">
          <h1 class="title">E-learning Revolution 2</h1>
          <p class="subtitle">
            We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers.
          </p>
          <nuxt-link to="/" class="btn marketplace-btn">
            Go to Marketplace
          </nuxt-link>
        </div>
  
        <!-- Right Content (Image Section) -->
        <div class="right-content">
          <!-- Image/Video Placeholder -->
          <div class="image-placeholder">
            <img src="@/assets/blackPart.png" alt="Video Placeholder" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Basic reset for margin and padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Full page container */
  .landing-page {
    background-color: #1c1c1c;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  /* Header styling */
  .header {
    display: flex;
    justify-content: center; /* Center all content in the header */
    align-items: center;
    padding: 20px;
    background-color: #000;
    position: relative;
  }
  
  /* Adjust search bar for centering */
  .search-bar {
    width: 50%; /* Adjust width as needed */
  }
  
  /* Search input with bottom-only highlight */
  .search-input {
    width: 100%;
    padding: 8px 12px;
    border: none; /* Remove all borders */
    border-bottom: 1px solid #fff; /* Thinner bottom border */
    background-color: transparent; /* Transparent background */
    color: white; /* Text color */
    outline: none; /* Remove default input outline */
    transition: border-color 0.3s ease; /* Smooth transition for border color */
  }
  
  .search-input::placeholder {
    color: #bbb; /* Placeholder text color */
  }
  
  /* Change border color on focus */
  .search-input:focus {
    border-bottom: 1px solid #666; /* Darker bottom border on focus */
  }
  
  /* Move the "Join Us" button to the top-right corner */
  .join-us {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .join-link {
    text-decoration: none;
  }
  
  .join-btn {
    background-color: #000;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid white;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
  }
  
  .join-btn:hover {
    background-color: #333;
  }
  
  .button-logo {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  
  /* Main content styling */
  .main-content {
    flex: 1;
    display: flex;
    justify-content: space-between;  /* Text and image side by side */
    align-items: center;
    padding: 20px;
    flex-direction: row;
    width: 90%;  /* Increase width for the imaginary container */
    margin: 0 auto;  /* Center the main content horizontally */
  }
  
  /* Left Content (Text Section) */
  .left-content {
    flex: 1;
    max-width: 600px;  /* Increase the width for the text section */
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
  
  .title {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 18px;
    margin-bottom: 40px;
    color: #bbb;
  }
  
  .marketplace-btn {
    background-color: #000;
    color: white;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    border: 1px solid white;
    transition: background-color 0.3s;
  }
  
  .marketplace-btn:hover {
    background-color: #333;
  }
  
  /* Right Content (Image Section) */
  .right-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-placeholder {
    width: 600px;  /* Increase the size of the image placeholder */
    height: 300px;
    background-color: #333;
    border-radius: 10px;
  }
  
  .image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  