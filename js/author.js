document.addEventListener("DOMContentLoaded", () => {
  // Mock author data
  const authorData = {
    name: "Mark Wein",
    role: "Senior Editor",
    bio: "Award-winning tech journalist with over a decade of experience covering emerging technologies, digital trends, and consumer electronics.",
    stats: {
      articles: 156,
      readers: "42K",
      comments: "3.2K",
    },
    articles: [
      {
        title: "The Future of AI in Everyday Life",
        excerpt:
          "Exploring how artificial intelligence is reshaping our daily routines and what to expect in the coming years.",
        date: "April 1, 2024",
        image: "/api/placeholder/400/300",
      },
      {
        title: "5G Technology: A New Era of Connectivity",
        excerpt:
          "Understanding the impact of 5G networks on communication, business, and entertainment.",
        date: "March 28, 2024",
        image: "/api/placeholder/400/300",
      },
      {
        title: "Cybersecurity Best Practices for Remote Work",
        excerpt:
          "Essential security measures for protecting your data while working from home.",
        date: "March 25, 2024",
        image: "/api/placeholder/400/300",
      },
      {
        title: "The Rise of Quantum Computing",
        excerpt:
          "How quantum computers are revolutionizing complex problem-solving and data processing.",
        date: "March 22, 2024",
        image: "/api/placeholder/400/300",
      },
      {
        title: "Sustainable Tech: Green Innovation",
        excerpt:
          "Examining eco-friendly technologies and their role in combating climate change.",
        date: "March 19, 2024",
        image: "/api/placeholder/400/300",
      },
      {
        title: "Digital Privacy in the Modern Age",
        excerpt:
          "Protecting your personal information in an increasingly connected world.",
        date: "March 16, 2024",
        image: "/api/placeholder/400/300",
      },
    ],
  };

  // Populate articles grid
  const articleGrid = document.querySelector(".article-grid");
  if (articleGrid) {
    articleGrid.innerHTML = authorData.articles
      .map(
        (article) => `
            <article class="author-article">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <span class="article-date">${article.date}</span>
                    <a href="article.html" class="article-title">${article.title}</a>
                    <p class="article-excerpt">${article.excerpt}</p>
                </div>
            </article>
        `
      )
      .join("");
  }
});
