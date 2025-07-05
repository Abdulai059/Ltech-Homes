<?php include 'header.php'; ?>


<main>
  <!-- START PRELOADER -->
  <!-- <div id="preloadhttps://github.com/Abdulai059/Ltech-Homes.giter">
    <img src="https://res.cloudinary.com/ltect-homes/image/upload/v1750615773/motion-blur-2_lpskmi.svg" alt="Loading..." class="svg-loader" />
  </div> -->

  <!-- START NAVIGATION BAR  -->
  <!-- <header class="navbar-wrapper" id="navbar-wrapper"></header> -->

  <!-- START HERO SECTION -->
  <section class="hero-section" id="hero-sec">
    <div class="gradient-split"></div>
    <div class="hero-wrapper">
      <div class="hero-container">
        <div class="arrow left"></div>
        <div class="arrow right"></div>
        <div class="hero-layout">
          <div class="hero-left">
            <div class="hero-heading">
              <h1 id="mainTitle">Professional</h1>
              <h3 id="subtitle">Real Estate Services - Since 1975</h3>
            </div>
            <div class="hero-content" id="hero-content">
              <p class="purpose-slide active">
                <i>Leading the Future</i> of Real Estate across Africa.
              </p>
              <p class="purpose-slide">
                <i>Empowering Communities</i> with Innovative Property
                Solutions.
              </p>
              <p class="purpose-slide">
                <i>Building Wealth</i> through Strategic Real Estate
                Investments.
              </p>
            </div>
            <div class="carousel-dots">
              <div class="nav-dot active"></div>
              <div class="nav-dot"></div>
              <div class="nav-dot"></div>
            </div>
          </div>
          <div class="hero-right">
            <div class="hero-image">
              <img
                class="slide"
                src="https://res.cloudinary.com/ltect-homes/image/upload/v1749612466/Broll_PDP_wq7rt0_iwzksa.webp" />
              <img
                class="slide active"
                src="https://res.cloudinary.com/ltect-homes/image/upload/v1749612466/ltach_ceo_PDP_amnnvs.webp" />
              <img
                class="slide"
                src="https://res.cloudinary.com/ltect-homes/image/upload/v1749612466/Broll_PDP_wq7rt0_iwzksa.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- START SEARCH SECTION -->
  <section class="search-section">
    <div class="wcd-icon-hero">
      <img
        src="/assets/icon/Misc (8).png"
        alt=""
        class="wcd-icon-hero-img" />
    </div>

    <div class="search-wraper">
      <div class="search-form" id="searchForm">
        <div class="form-group">
          <label for="searchInput">Find Your Space</label>
          <span class="input-toggle">
            <input
              id="searchInput"
              type="search"
              name="query"
              placeholder="eg: Ridge, web Ref"
              autocomplete="off" />
            <button class="search-toggle" id="searchToggle">☰</button>
          </span>
        </div>
        <div class="form-group">
          <label>Deal Type</label>
          <select>
            <option>For Sale</option>
            <option selected>To Let</option>
          </select>
        </div>
        <div class="form-group">
          <label>Property Type</label>
          <select>
            <option selected>All</option>
          </select>
        </div>
        <div class="form-group">
          <label>Min Price</label>
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            autocomplete="on"
            min="0" />
        </div>
        <div class="form-group">
          <label>Max Price</label>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            autocomplete="on"
            min="1" />
        </div>
        <div class="search-button-container">
          <button class="submit-button">
            <span class="submit-text">Search</span>
            <!-- <img src="../icons/Search-Icon.svg" alt="Search" /> -->
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY YOU CHOOSE US SECTION -->
  <div class="wcd-container">
    <?php include 'pages/why-choose-us.php'; ?>
  </div>

  <!-- START PORFOLIO SECTION-->
  <section class="portfolio-section">
    <?php include 'about-us/portfolio.php'; ?>
  </section>



  <!-- START FAQ SECTION -->
  <section class="faq-section">
    <div class="faq-wrapper">
      <div class="faq-left" data-aos="fade-right" data-aos-delay="150">
        <div class="faq-tip">Buying Guide</div>
        <h2>Need Help? Explore Our FAQ Section!</h2>
        <p>
          Discover everything you need to know about acquiring your dream
          property through our curated collection.
        </p>
      </div>
      <div
        class="faq-container-flex"
        data-aos="fade-left"
        data-aos-delay="150">
        <div class="faq-list">
          <div class="faq-item">
            <input type="checkbox" id="faq1" name="faq" />
            <label class="faq-question" for="faq1">
              What's the process to buy a property?
            </label>
            <div class="faq-answer">
              <p>
                1. Select a property<br />
                2. Contact our sales team<br />
                3. Secure financing (if needed)<br />
                4. Complete purchase paperwork<br />
                <a href="../pages/about-us.html">See detailed steps</a>
              </p>
            </div>
          </div>

          <div class="faq-item">
            <input type="checkbox" id="faq2" name="faq" />
            <label class="faq-question" for="faq2">How can I view available properties?</label>
            <div class="faq-answer">
              <p>
                Browse our <a href="/properties">current listings</a> with
                photos, videos, and virtual tours. Click "Schedule Viewing" to
                book an in-person visit.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <input type="checkbox" id="faq3" name="faq" />
            <label class="faq-question" for="faq3">What payment options do you accept?</label>
            <div class="faq-answer">
              <p>
                We accept bank transfers, cashier's checks, and work with all
                major mortgage lenders.
                <a href="/financing">Financing options available</a>.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <input type="checkbox" id="faq4" name="faq" />
            <label class="faq-question" for="faq4">
              Are prices negotiable?</label>
            <div class="faq-answer">
              <p>
                Prices are fixed for most listings. Contact our team at
                <a href="mailto:sales@ltachhome.com">sales@ltachhome.com</a>
                to discuss possibilities.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <input type="checkbox" id="faq5" name="faq" />
            <label class="faq-question" for="faq5">
              How long does closing take?</label>
            <div class="faq-answer">
              <p>
                Typically 30-45 days after offer acceptance. We'll guide you
                through every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- START SECTION TEAMS -->
  <section class="team-section">
    <?php include 'about-us/our-team.php'; ?>
  </section>


  <!-- START CARRER SECTION -->
  <section id="carrer-section">
    <div class="job-container">
      <div class="job-header" data-aos="fade-up"
        data-aos-delay="120">>
        <h1>Start Your Careers</h1>
        <p>Want To Work With Us?</p>
      </div>

      <div class="job-card" data-aos="fade-left" data-aos-delay="120">
        <h2 class="job-title">Customer Service Associate</h2>
        <p class="job-description">
          Are you passionate about engaging with customers? Do you want to make
          an impact in the field of customer service? Then you should join our
          team.
        </p>
        <div class="job-options">
          <span class="work-type on-site">On-Site</span>
          <span class="work-type part-time">Part-time</span>
          <a href="#" class="apply-btn" onclick="handleApply()">Apply</a>
        </div>
      </div>
    </div>
  </section>

  <!-- START TESTIMONIAL SECTION -->
  <?php include 'about-us/testimonial.php'; ?>

  <!-- START BRAND IMAGES SECTION -->
  <!-- <section>
    <div class="brand-wrapper">
      <div class="brand">
      <img src="./assets/images/Accra_banner_Independance_square.jpg" alt="">
      <div class="overlay"><span class="overlay-text">Let's Talk</span></div>
    </div>
    </div>
    
  </section> -->
</main>



<?php include 'footer.php'; ?>