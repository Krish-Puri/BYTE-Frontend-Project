document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Make API call to authenticate user
  // Example:
  fetch('http://panel.mait.ac.in:8001/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('accessToken', data.access);
    localStorage.setItem('refreshToken', data.refresh);
    window.location.href = 'dashboard.html';
  })
  .catch(error => console.error('Error:', error));
});
