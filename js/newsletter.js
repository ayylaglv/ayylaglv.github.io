document.addEventListener("DOMContentLoaded", () => {
  insertNewsletter();
});

function insertNewsletter() {
  const newsletterContainer = document.getElementById("newsletter-container");
  if (!newsletterContainer) return;

  const newsletterHTML = `
        <div class="newsletter">
            <div class="newsletter-content">
                <h3>Newsletter</h3>
                <p>Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
                <form class="newsletter-form" onsubmit="handleSubscribe(event)">
                    <input type="email" placeholder="Email Address" required>
                    <button type="submit">Subscribe</button>
                </form>
                <small>You can unsubscribe us at any time</small>
            </div>
        </div>
    `;

  newsletterContainer.innerHTML = newsletterHTML;
}

function handleSubscribe(event) {
  event.preventDefault();
  alert("Subscribed successfully!");
  event.target.reset();
}
