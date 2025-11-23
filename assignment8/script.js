const API_URL = "https://jsonplaceholder.typicode.com/users";
const tbody = document.querySelector("#userTable tbody");
const spinner = document.getElementById("spinner");
const refreshBtn = document.getElementById("refreshBtn");

// Fetch users & display in table
async function fetchUsers() {
  try {
    spinner.style.display = "block";  // show loading
    tbody.innerHTML = "";             // clear old data

    const response = await fetch(API_URL);
    const users = await response.json();

    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
      `;
      tbody.appendChild(row);
    });

  } catch (err) {
    console.error("Error fetching users:", err);
  } finally {
    spinner.style.display = "none"; // hide loading
  }
}

// Refresh button
refreshBtn.addEventListener("click", fetchUsers);

// Fetch on page load
fetchUsers();
