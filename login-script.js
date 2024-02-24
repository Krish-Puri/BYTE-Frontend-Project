document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.querySelector(".btn");
  loginButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Redirect the user to the dashboard page
    window.location.href = "dashboard.html";
  });
});
