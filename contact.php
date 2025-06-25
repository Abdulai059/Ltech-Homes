<?php include 'header.php'; ?>
<link rel="stylesheet" href="/assets/css/contact-us.css">

<main class="main-wrapper">
  
  <!-- CONTACT US SECCTION -->
  <div class="ltech-contact-form">
    <div class="contact-wrapper">
      <!-- google maps Section -->
      <div class="contact-us-section">
        <h2 class="maps-title">Contact Us</h2>

        <div class="maps-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.500313186382!2d-0.8237734396386878!3d9.3944317473021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43d3f42a4db27%3A0xc882f51368f260d4!2sHackerBoost%20Developer%20Hub%2C%20Tamale!5e0!3m2!1sen!2sgh!4v1750387299407!5m2!1sen!2sgh"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p class="maps-description">
            Find your nearest Ltech Home's office address and contact details
            below or fill out the Enquiry Form.
          </p>
        </div>
      </div>

      <!-- Enquiry Form Section -->
      <div class="contact-us-section">
        <div class="enquiry-section">
          <h2 class="form-title">Enquiry Form</h2>

          <!-- Success Message Popup -->
          <div id="successBackdrop" class="success-backdrop"></div>
          <div id="successMessage" class="success-message">
            Thank you for your enquiry! We will get back to you soon.
          </div>

          <form id="enquiryForm">
            <div class="form-row">
              <!-- Left Column - 3 Fields -->
              <div class="form-column">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-input"
                    placeholder="Name*"
                    required />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-input"
                    placeholder="Tel: 0302673516*"
                    required />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-input"
                    placeholder="Email: laddae@ltechghana.com*"
                    required />
                </div>
              </div>

              <!-- Right Column - 3 Fields -->
              <div class="form-column">
                <div class="form-group">
                  <select class="form-select" required>
                    <option value="" disabled selected>
                      Select Your Region*
                    </option>
                    <option value="accra">Accra</option>
                    <option value="kumasi">Kumasi</option>
                    <option value="tamale">Tamale</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-select" required>
                    <option value="" disabled selected>
                      Select a Service*
                    </option>
                    <option value="valuation">Property Valuation</option>
                    <option value="management">Property Management</option>
                    <option value="sales">Property Sales</option>
                    <option value="investment">Investment Advisory</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-textarea"
                    placeholder="Enquiry*"
                    required></textarea>
                </div>
              </div>
            </div>

            <div class="newsletter-section">
              <label class="custom-checkbox newsletter-title">
                <input type="checkbox" name="send" />
                <span class="checkmark"></span>
                Subscribe to Email Newsletter
              </label>

              <div class="newsletter-text">
                We will communicate real estate related marketing information
                and related services.
              </div>
              <div class="privacy-text">
                We respect your privacy. See our
                <a href="#" class="privacy-link">Privacy Policy</a>
              </div>
            </div>

            <button type="submit" class="submit-btn">Send</button>
          </form>
        </div>
      </div>

      <!-- Contact Details Section -->
      <div class="contact-us-section">
        <div class="contact-section">
          <h2 class="details-title">Contact Details</h2>

          <div class="office-list-container">
            <ul class="office-list">
              <li class="office-item active" data-office="ghana">Ghana</li>
              <li class="office-item" data-office="south-africa">Accra</li>
              <li class="office-item" data-office="botswana">Kumasi</li>
              <li class="office-item" data-office="mauritius">Tamale</li>
            </ul>
          </div>

          <div class="office-details" id="office-details">
            <div class="office-name">Ghana</div>
            <div class="office-subtitle">Ltech Homes Office</div>
            <div class="office-address">
              7th Floor<br />
              Ridge Tower<br />
              6th Avenue<br />
              Ridge<br />
              Accra
            </div>
            <div class="contact-info">
              <div class="contact-row">
                <span class="contact-label">Tel</span>
                <span class="contact-value">+233 (0) 304 572 038</span>
              </div>
              <div class="contact-row">
                <span class="contact-label">Email</span>
                <span class="contact-value">ghana@ltech.com</span>
              </div>
              <div class="contact-row">
                <span class="contact-label">Website</span>
                <a href="#" class="contact-value website" target="_blank">ltechhomes.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</main>



<script src="/assets/js/contact-us.js"></script>

<?php include 'footer.php'; ?>