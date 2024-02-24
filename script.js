// Function to fetch and display poems
async function fetchPoems() {
  try {
    const token = 'YOUR_ACCESS_TOKEN'; // Replace this with your actual access token
    const response = await fetch('http://panel.mait.ac.in:8001/poem/get/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    // Rest of the code...
  } catch (error) {
    console.error('Error fetching poems:', error);
  }
}
