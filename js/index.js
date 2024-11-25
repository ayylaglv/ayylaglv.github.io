document.addEventListener("DOMContentLoaded", function () {
  // Get current page pathname
  const currentPath = window.location.pathname;

  // Remove 'active' class from all nav links
  document.querySelectorAll(".nav-bar a").forEach((link) => {
    link.classList.remove("active");
  });

  // Add 'active' class to current page nav link
  if (currentPath.includes("sports")) {
    document.getElementById("sports").classList.add("active");
  } else if (currentPath.includes("music")) {
    document.getElementById("music").classList.add("active");
  } else if (currentPath.includes("food")) {
    document.getElementById("food").classList.add("active");
  } else if (currentPath.includes("technology")) {
    document.getElementById("technology").classList.add("active");
  } else if (currentPath.includes("index") || currentPath === "/") {
    document.getElementById("home").classList.add("active");
  }
});

// Handle category navigation
document.querySelectorAll(".nav-bar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Get the target page from href
    const targetPage = this.getAttribute("href");

    // Smooth transition effect
    document.body.style.opacity = "0.5";

    // Navigate to the target page
    setTimeout(() => {
      window.location.href = targetPage;
    }, 200);

    // Prevent default only if you want the fade effect
    e.preventDefault();
  });
});

// Search functionality
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // Implement search functionality here
    console.log("Searching for:", this.value);
    // You could redirect to a search results page
    // window.location.href = `search.html?q=${this.value}`;
  }
});

// Add smooth scrolling to footer links
document.querySelectorAll("footer a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetPage = this.getAttribute("href");
    if (targetPage !== "#") {
      document.body.style.opacity = "0.5";
      setTimeout(() => {
        window.location.href = targetPage;
      }, 200);
      e.preventDefault();
    }
  });
});
