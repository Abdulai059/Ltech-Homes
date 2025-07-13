<!-- header.php -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <title>Ltech Homes</title>
  <link rel="icon" href="https://res.cloudinary.com/ltect-homes/image/upload/v1750363970/logo-main_m57kgj.jpg" type="image/png" />

  <!--/Bootstrap CSS Stylesheet-->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet" />

  <!-- OAS Animation Stylesheet-->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">
  <!-- Load your custom CSS -->


  <!--component css stylesheet-->
  <link rel="stylesheet" href="/assets/css/root.css">
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/navbar.css" />
  <link rel="stylesheet" href="/assets/css/why-choose-us.css">
  <link rel="stylesheet" href="/assets/css/team.css">
  <link rel="stylesheet" href="/assets/css/mission-team.css">
  <link rel="stylesheet" href="/assets/css/property-management.css">
  <link rel="stylesheet" href="/assets/css/carrer.css">
  <link rel="stylesheet" href="/assets/css/portfolio.css">
  <link rel="stylesheet" href="/assets/css/testimonial.css">
  <link rel="stylesheet" href="/assets/css/our-partners.css">
  <link rel="stylesheet" href="/assets/css/gallary.css">
  <link rel="stylesheet" href="/assets/css/properties-section.css">


  <!-- GOOGLE FONTS -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet" />

  <!-- Font-Awesome Icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

  <!-- Load Swiper CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">


  <!-- bootsrap Icons -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
</head>

<body>

  <nav class="navbar <?php echo basename($_SERVER['PHP_SELF']) === 'index.php' ? 'navbar-home' : 'scrolled'; ?>">
    <div class="nav-container">
      <a href="/index.php" class="logo">
        <svg class="logo-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 7v10l8 5 8-5V7L12 2zm0 2.5L18 9v6l-6 3.5-6-3.5V9l6-3.5z" />
        </svg>
        LTECH
      </a>

      <div class="menu-overlay" id="menuOverlay" onclick="closeMobileMenu()"></div>

      <ul class="nav-menu" id="navMenu">
        <li class="nav-item">
          <a href="/index.php" class="nav-link active">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle">About Us</a>
          <div class="dropdown-content">
            <a href="/about-us/mission-team.php" class="dropdown-item">Our Story</a>
            <a href="/about-us/mission-team.php#team-members-section" class="dropdown-item">Our Team</a>
            <a href="/about-us/ltech-overview.php" class="dropdown-item">Mission & Vision</a>
            <a href="/index.php#carrer-section" class="dropdown-item">Careers</a>
            <a href="#" class="dropdown-item">Awards</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle">Services</a>
          <div class="dropdown-content">
            <a href="/pages/services/property-development.php" class="dropdown-item">Property Development</a>
            <a href="/pages/services/facility-mangement.php" class="dropdown-item">Facility Management</a>
            <a href="/pages/services/property-management.php" class="dropdown-item">Property Management</a>
            <!-- <a href="#" class="dropdown-item">Careers</a>
            <a href="#" class="dropdown-item">Awards</a> -->
          </div>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Property Search</a>
        </li>
        <li class="nav-item">
          <a href="/pages/gallary.php" class="nav-link">Gallery</a>
        </li>
        <li class="nav-item">
          <a href="/contact.php" class="nav-link">Contact</a>
        </li>
      </ul>

      <div class="search-container">
        <div class="search-box">
          <svg class="search-icon" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M12.9 14.32a8 8 0 111.41-1.41l4.1 4.1a1 1 0 11-1.42 1.42l-4.1-4.1zM8 14A6 6 0 108 2a6 6 0 000 12z"
              clip-rule="evenodd"></path>
          </svg>
          <input
            type="text"
            class="search-input"
            placeholder="Search properties..." />
        </div>

        <button
          class="mobile-menu-toggle"
          id="mobileToggle"
          onclick="toggleMobileMenu()"
          aria-label="Toggle menu">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  </nav>