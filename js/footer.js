// Add console.log to debug
console.log("Footer.js loaded");

document.addEventListener("DOMContentLoaded", function () {
  insertFooter();
});

function insertFooter() {
  const footerContainer = document.getElementById("footer-container");
  if (!footerContainer) {
    console.error("Footer container not found");
    return;
  }

  const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Magazine</h3>
                    <p>
                        A digital publication dedicated to bringing you the latest news,
                        insights, and stories from around the world.
                    </p>
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
                <p>&copy; ${new Date().getFullYear()} Virtual Magazine. All rights reserved.</p>
            </div>
        </footer>
    `;

  footerContainer.innerHTML = footerHTML;
}
