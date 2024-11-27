// Add console.log to debug
console.log("Search.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const sampleArticles = [
    {
      image: "https://picsum.photos/400/250?random=20",
      category: "Technology",
      title: "The Future of AI in Everyday Life",
      author: "Tech Writer",
      date: "March 25, 2024",
    },
    {
      image: "https://picsum.photos/400/250?random=21",
      category: "Sports",
      title: "Latest Updates from the Olympics",
      author: "Sports Expert",
      date: "March 24, 2024",
    },
    {
      image: "https://picsum.photos/400/250?random=22",
      category: "Food",
      title: "Traditional Recipes with a Modern Twist",
      author: "Chef Master",
      date: "March 24, 2024",
    },
    {
      image: "https://picsum.photos/400/250?random=23",
      category: "Fashion",
      title: "Spring Fashion Trends for 2024",
      author: "Style Guru",
      date: "March 23, 2024",
    },
  ];

  // Add search functionality to search input
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = this.value.trim();
        if (query) {
          window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
      }
    });
  }

  // Handle search results if on search page
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");

  if (query) {
    const searchQueryElement = document.getElementById("search-query");
    const resultsContainer = document.querySelector(".search-results-grid");

    if (searchQueryElement) {
      searchQueryElement.textContent = query;
    }
    if (resultsContainer) {
      const numResults = Math.floor(Math.random() * 3) + 2;
      const resultsHTML = Array.from({ length: numResults }, (_, index) => {
        const article =
          sampleArticles[Math.floor(Math.random() * sampleArticles.length)];
        return `
              <div class="category-post">
                  <img src="${article.image}" alt="${
          article.title
        }" class="post-image">
                  <span class="category-tag">${article.category}</span>
                  <a href="article.html?id=${index + 1}" class="post-title">${
          article.title
        }</a>
                  <div class="post-meta">
                      ${article.author} ${article.date}
                  </div>
              </div>
          `;
      }).join("");

      resultsContainer.innerHTML = resultsHTML;
    }
  }
});
