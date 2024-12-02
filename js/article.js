document.addEventListener("DOMContentLoaded", () => {
  // Get article ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");

  // Mock article data
  const mockArticles = {
    1: {
      category: "Food",
      title: "A Discount Toner Cartridge Is Better Than Ever",
      author: "Mark wiens",
      date: "03 April, 2024",
      comments: 6,
      image: "https://picsum.photos/800/500?random=1",
      content: `
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            `,
      comments: [
        {
          author: "Emily Blunt",
          date: "03 April, 2024",
          text: "Great article! Very informative and well-written.",
        },
        {
          author: "John Smith",
          date: "03 April, 2024",
          text: "Thanks for sharing this insight. Looking forward to more content like this.",
        },
      ],
    },
  };

  // Display article content
  const article = mockArticles[articleId] || mockArticles["1"];
  displayArticle(article);
});

function displayArticle(article) {
  document.getElementById("article-category").textContent = article.category;
  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-author").innerHTML = `
  <a href="author.html" class="author-link">${article.author}</a>
`;
  document.getElementById("article-date").textContent = article.date;
  document.getElementById(
    "article-comments"
  ).textContent = `${article.comments.length} Comments`;
  document.getElementById("article-image").src = article.image;
  document.getElementById("article-text").innerHTML = article.content;
  document.getElementById(
    "comments-count"
  ).textContent = `(${article.comments.length})`;

  // Display comments
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = article.comments
    .map(
      (comment) => `
          <div class="comment">
              <img src="https://picsum.photos/50/50?random=${Math.random()}" alt="${
        comment.author
      }" class="comment-avatar">
              <div class="comment-content">
                  <div class="comment-author">
                      ${comment.author}
                      <span class="comment-date">${comment.date}</span>
                  </div>
                  <div class="comment-text">${comment.text}</div>
              </div>
          </div>
      `
    )
    .join("");
}

function navigateArticle(direction) {
  // Implement article navigation logic
  console.log(`Navigate ${direction}`);
}
