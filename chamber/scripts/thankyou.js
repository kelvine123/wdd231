// scripts/thankyou.js

// Function to format ISO timestamp nicely
function formatTimestamp(isoString) {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleString();
}

// Populate results from URL parameters
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
        <li><strong>Business Description:</strong> ${params.get("description") || ""}</li>
        <li><strong>Date Submitted:</strong> ${formatTimestamp(params.get("timestamp"))}</li>
    `;
}

document.addEventListener("DOMContentLoaded", populateResults);