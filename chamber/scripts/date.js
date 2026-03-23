document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
// scripts/date.js

// Function to format ISO timestamp to readable format
function formatTimestamp(isoString) {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleString(); // Example: 3/23/2026, 3:34:56 PM
}

// Fill in all URL params into the results list
function populateResults() {
    const params = new URLSearchParams(window.location.search);
    const resultsEl = document.getElementById("results");

    if (!resultsEl) return;

    resultsEl.innerHTML = `
    <li><strong>First Name:</strong> ${params.get("firstname") || ""}</li>
    <li><strong>Last Name:</strong> ${params.get("lastname") || ""}</li>
    <li><strong>Email:</strong> ${params.get("email") || ""}</li>
    <li><strong>Phone:</strong> ${params.get("phone") || ""}</li>
    <li><strong>Business:</strong> ${params.get("business") || ""}</li>
    <li><strong>Membership Level:</strong> ${params.get("membership") || ""}</li>
    <li><strong>Date Submitted:</strong> ${formatTimestamp(params.get("timestamp"))}</li>
  `;
}

// Run the function after page loads
document.addEventListener("DOMContentLoaded", populateResults);