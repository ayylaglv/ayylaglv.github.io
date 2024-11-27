document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");
  if (!footerContainer) return;

  const footerHTML = `
        <footer class="footer">
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

            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Magazine</h3>
                    <p>A digital publication dedicated to bringing you the latest news, insights, and stories from around the world.</p>
                </div>

                <div class="footer-section">
                    <h3>Website Creators</h3>
                    <ul class="team-list">
                        <li>Ayla Guliyeva</li>
                        <li>Anna Pylypenko</li>
                        <li>Anastasia Sobor</li>
                        <li>Yuta Ishii</li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <ul class="contact-list">
                        <li>Email: info@magazine.com</li>
                        <li>Support: support@magazine.com</li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#" class="social-link">Facebook</a>
                        <a href="#" class="social-link">Twitter</a>
                        <a href="#" class="social-link">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© ${new Date().getFullYear()} Virtual Magazine. All rights reserved.</p>
            </div>
        </footer>
    `;

  footerContainer.innerHTML = footerHTML;
});

function handleSubscribe(event) {
  event.preventDefault();
  alert("Subscribed successfully!");
  event.target.reset();
}
