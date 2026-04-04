// Get last modified date
const lastModified = new Date(document.lastModified);

// Format date as: MM/DD/YYYY HH:MM:SS
const formattedDate = lastModified.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
});

// Display in footer
document.getElementById("lastModified").textContent =
    `Last Modified: ${formattedDate}`;