<?php include 'header.php'; ?>
<link rel="stylesheet" href="/assets/css/contact-us.css">

<main class="main-wrapper">

  <div class="contact-wrapper">

    <!-- MAP SECTION  -->
    <div class="contact-us-section">
      <h2 class="maps-title">Contact Us</h2>

      <div class="maps-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.500313186382!2d-0.8237734396386878!3d9.3944317473021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43d3f42a4db27%3A0xc882f51368f260d4!2sHackerBoost%20Developer%20Hub%2C%20Tamale!5e0!3m2!1sen!2sgh!4v1750387299407!5m2!1sen!2sgh"
          width="100%"
          height="600"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="map"></iframe>
        <p class="maps-description">
          Find your nearest Ltech Home's office address and contact details
          below or fill out the Enquiry Form.
        </p>
      </div>
    </div>

    <!-- FORM SECTION  -->
    <div class="contact-form-container">
      <h1 class="contact-form-title">Enquiry Form</h1>

      <form id="contact-enquiryForm">
        <div class="contact-form-grid">
          <div class="contact-form-group left-section">
            <input
              type="text"
              class="contact-form-input"
              placeholder="Name*"
              required />
          </div>

          <div class="contact-form-group right-section">
            <input
              type="tel"
              class="contact-form-input"
              placeholder="Tel: 0549337820 *"
              required />
          </div>

          <div class="contact-form-group left-section">
            <select class="contact-form-select" required>
              <option value="">Select Your Region*</option>
              <option value="north">Accra</option>
              <option value="south">Kumasi</option>
              <option value="east">Tamale</option>
            </select>
          </div>

          <div class="contact-form-group right-section">
            <select class="contact-form-select" required>
              <option value="">Select a Service*</option>
              <option value="property-management">Property Development</option>
              <option value="real-estate-sales">Facility Management</option>
              <option value="property-valuation">Property Management</option>
              <option value="rental-services">Support Services</option>
            </select>
          </div>

          <div class="contact-form-group left-section">
            <input
              type="email"
              class="contact-form-input"
              placeholder="Email: ltechhomes555@gmail.com*"
              required />
          </div>

          <div class="contact-form-group right-section">
            <textarea
              class="contact-form-textarea"
              placeholder="Enquiry*"
              required></textarea>
          </div>
        </div>

        <div class="contact-checkbox-container">
          <div class="contact-chackbox-gap">
            <input type="checkbox" id="contact-newsletter" class="contact-checkbox" />

            <label for="contact-newsletter" class="contact-checkbox-label">Subscribe to Email Newsletter</label>
          </div>
          <div class="contact-newsletter-text">
            <p>
              <strong>Newsletter</strong> We will communicate real estate
              related marketing information and related services.
            </p>
            <p class="contact-newsletter-policy">We respect your privacy. See our <span>Privacy Policy</span></p>
          </div>
        </div>

        <button type="submit" class="contact-submit-btn">Send</button>
      </form>
    </div>


    <!-- CONTACT DETAILS SECTION -->

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
              <span class="contact-value"> 054 933 7820 <span class="contact-or">/</span> 0246 932 582</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">Email</span>
              <span class="contact-value">ltechhomes555@gmail.com</span>
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


</main>



<script src="/assets/js/contact-us.js"></script>

<?php include 'footer.php'; ?>