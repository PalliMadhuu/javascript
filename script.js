import {  renderNavBar } from "./nav-bar/navbar.js";

// Get the app container reference

  const appContainer = document.getElementById("app");


    // Check if the login page is already rendered
    if (!appContainer.querySelector(".login-page")) {
      renderNavBar(appContainer);
    }


