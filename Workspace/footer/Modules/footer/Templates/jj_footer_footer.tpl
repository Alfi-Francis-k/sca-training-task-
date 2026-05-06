<div class="footer-container">
    <div class="footer-newsletter-section">
        <p class="footer-newsletter-text">{{newsletterText}}</p>
        <div class="footer-newsletter-form">
            <input type="email" class="footer-newsletter-input" placeholder="username@domain">
            <button class="footer-newsletter-button">{{newsletterButton}}</button>
        </div>
    </div>

    <div class="footer-main-content">
        <div class="footer-column footer-column-contact">
            <p class="footer-contact-item"><a href="tel:{{phone}}"><i class="icon-phone"></i> {{phone}}</a></p>
            <p class="footer-contact-item"><a href="mailto:{{email}}"><i class="icon-envelope"></i> {{email}}</a></p>
            <div class="footer-address">
                <div class="footer-address-title">
                    <p><strong>NASHVILLE</strong></p>
                    <p><strong>DISTRIBUTION</strong></p>
                    <p><strong>CENTER</strong></p>
                </div>
                <p>{{address}}</p>
            </div>
            <h3 class="footer-brand-name">{{brandName}}</h3>
        </div>

        <div class="footer-column">
            <h4>INFORMATION</h4>
            <ul class="footer-links">
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/terms-conditions">Terms & Conditions</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h4>MY ACCOUNT</h4>
            <ul class="footer-links">
                <li><a href="#" data-touchpoint="login">Sign In</a></li>
                <li><a href="/registration-page">Register</a></li>
                <li><a href="cart" data-touchpoint="viewcart">View Cart</a></li>
                <li><a href="/my-account">My Account</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h4>SOCIAL</h4>
            <div class="footer-social-icons">
                <a href="{{socialFb}}" class="social-icon"><i class="icon-facebook"></i></a>
                <a href="{{socialTw}}" class="social-icon"><i class="icon-twitter"></i></a>
                <a href="{{socialIg}}" class="social-icon"><i class="icon-instagram"></i></a>
                <a href="{{socialYt}}" class="social-icon"><i class="icon-youtube"></i></a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p class="footer-copyright">{{copyright}}</p>
    </div>
</div>