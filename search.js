// Sample article data for random results
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

// Function to create article HTML
function createArticleElement(article) {
  return `
        <div class="category-post">
            <img src="${article.image}" alt="${article.title}" class="post-image">
            <span class="category-tag">${article.category}</span>
            <a href="#" class="post-title">${article.title}</a>
            <div class="post-meta">
                ${article.author} ${article.date}
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to search input for Enter key
  const searchInputs = document.querySelectorAll(".search-input");
  searchInputs.forEach((input) => {
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const query = input.value.trim();
        if (query) {
          window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
      }
    });
  });

  // If on search results page, display results
  if (window.location.pathname.includes("search.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q");

    if (query) {
      // Display the search query
      document.getElementById("search-query").textContent = query;

      // Generate random results
      const resultsContainer = document.querySelector(".search-results-grid");
      const numResults = Math.floor(Math.random() * 3) + 2; // 2-4 results
      let resultsHTML = "";

      for (let i = 0; i < numResults; i++) {
        const randomArticle =
          sampleArticles[Math.floor(Math.random() * sampleArticles.length)];
        resultsHTML += createArticleElement(randomArticle);
      }

      resultsContainer.innerHTML = resultsHTML;
    }
  }
});
