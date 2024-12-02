document.addEventListener("DOMContentLoaded", () => {
  // Get the current page name from the URL
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop().split(".")[0] || "index";

  // Create header HTML
  const headerHTML = `
      <div class="top-bar">
          <div class="social-icons">
              <a href="#"><i class="fas fa-facebook">f</i></a>
              <a href="#"><i class="fas fa-twitter">t</i></a>
              <a href="#"><i class="fas fa-at">@</i></a>
              <a href="#"><i class="fab fa-behance">Be</i></a>
          </div>
          <div class="contact-info">
              <span>+440 012 3654 896</span>
              <span class="separator">support@support.com</span>
          </div>
      </div>
      
      <header class="header">
          <a href="index.html" class="logo">Virtual Mag</a>
          <div class="header-buttons">
              <a href="login.html" class="header-btn login-btn">Login</a>
          </div>
      </header>
      
      <nav class="nav-bar">
          <ul>
              <li><a href="index.html" id="home" class="${
                currentPage === "index" ? "active" : ""
              }">Home</a></li>
              <li><a href="sports.html" id="sports" class="${
                currentPage === "sports" ? "active" : ""
              }">Sports</a></li>
              <li><a href="food.html" id="food" class="${
                currentPage === "food" ? "active" : ""
              }">Food</a></li>
              <li><a href="fashion.html" id="fashion" class="${
                currentPage === "fashion" ? "active" : ""
              }">Fashion</a></li>
              <li><a href="technology.html" id="technology" class="${
                currentPage === "technology" ? "active" : ""
              }">Technology</a></li>
            <li><a href="subscribe.html" id="subscribe" class="${
              currentPage === "subscribe" ? "active" : ""
            }">Subscribe</a></li>
            <li><a href="about.html" id="about" class="${
              currentPage === "about" ? "active" : ""
            }">About Us</a></li>
              <li class="search-container">
                  <form class="search-form" onsubmit="handleSearch(event)">
                      <input type="text" class="search-input" placeholder="Search" />
                  </form>
              </li>
          </ul>
      </nav>
  `;

  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }
});
