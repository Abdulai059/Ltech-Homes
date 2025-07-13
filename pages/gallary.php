<!-- Hero Section -->

<?php include '../header.php'; ?>


<link rel="stylesheet" href="/assets/css/navbar.css">
<link rel="stylesheet" href="/assets/css/main.css">
<link rel="stylesheet" href="/assets/css/gallary.css">

<section class="gallary-section">

    <section class="hero">
        <div class="background-slides">
            <div
                class="background-slide active"
                style="background-image: url('https://res.cloudinary.com/ltect-homes/image/upload/v1752102901/FILE-C-scaled-1_ggkvoj.webp')"></div>

            <div
                class="background-slide"
                style="background-image: url('https://res.cloudinary.com/ltect-homes/image/upload/v1752102815/Regimanuel-Gray-Eagles-Place-Sakumono_b3mpnv.webp')"></div>
            <div
                class="background-slide"
                style="
            background-image: url('https://res.cloudinary.com/ltect-homes/image/upload/v1752105312/pop_vwjc6s.jpg');
          "></div>

            <!-- <div
                class="background-slide"
                style="
            background-image: url('./glow_slide3.jpeg');
          "></div> -->
        </div>

        <div class="gallary-content">
            <h1>Our <span class="hide-galary">Luxury Property </span>Gallery</h1>
            <p>
                Discover exquisite homes, modern apartments, and premium commercial
                spaces crafted for your dreams.
            </p>
            <a href="#gallery" class="btn">Explore Properties</a>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section" id="gallery">
        <div class="container">
            <div class="filter-bar">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="houses">Houses</button>
                <button class="filter-btn" data-filter="apartments">
                    Apartments
                </button>
                <button class="filter-btn" data-filter="land">Land</button>
            </div>

            <div class="category-descriptions">
                <h2>Our Properties</h2>

                <div class="category houses active" data-category="houses">
                    <span class="category-icon">🏡</span>
                    <h3>Houses</h3>
                    <p>
                        Spacious family homes and luxury villas designed for comfort and
                        elegance.
                    </p>
                </div>
                <div class="category apartments" data-category="apartments">
                    <span class="category-icon">🏢</span>
                    <h3>Apartments</h3>
                    <p>
                        Modern condos and apartments in vibrant urban and suburban
                        settings.
                    </p>
                </div>
                <div class="category commercial" data-category="commercial">
                    <span class="category-icon">🏬</span>
                    <h3>Commercial</h3>
                    <p>
                        Premium office spaces and retail properties for thriving
                        businesses.
                    </p>
                </div>
                <div class="category land" data-category="land">
                    <span class="category-icon">🌳</span>
                    <h3>Land</h3>
                    <p>Scenic vacant land perfect for building your dream project.</p>
                </div>
            </div>

            <div class="gallery-container">
                <div class="gallery-grid">
                    
                    <!-- All Images (3 items) -->
                    <div class="gallery-item" data-category="all houses">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/121_g9gyy7.jpg" />
                    </div>

                    <div class="gallery-item" data-category="all">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/6_etwcif.jpg"
                            alt="Luxury Villa" />
                    </div>
                    <div class="gallery-item" data-category="all">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/1_zgcd1c.jpg"
                            alt="Luxury Villa" />
                    </div>
                    <div class="gallery-item" data-category="all">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/9_q1u9bv.jpg"
                            alt="Luxury Villa" />
                    </div>
                    <div class="gallery-item" data-category="all">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752352476/3_iokxyy.jpg"
                            alt="Luxury Villa" />
                    </div>

                    <!-- Houses (3 items) -->
                    <div class="gallery-item" data-category="houses">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752077894/4_gvoptj.jpg" />
                    </div>
                    <div class="gallery-item" data-category="houses">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752077918/6_fzmm7n.jpg"
                            alt="Suburban Home" />
                    </div>
                    <div class="gallery-item" data-category="houses">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752077925/7_l0wzp1.jpg"
                            alt="Luxury Villa" />
                    </div>
                    <div class="gallery-item" data-category="houses">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752077985/16_r6o0v3.jpg" />
                    </div>
                    <div class="gallery-item" data-category="houses">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752357318/22_rdhbkt.webp"
                            alt="Modern House" />
                    </div>


                    <!-- Apartments (3 items) -->
                    <div class="gallery-item" data-category="apartments">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752356947/17_lyra65.jpg"
                            alt="City Apartment" />
                    </div>
                    <div class="gallery-item" data-category="apartments">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752356971/20_spkdaq.jpg"
                            alt="Studio Apartment" />
                    </div>
                    <div class="gallery-item" data-category="apartments">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752077878/3_i7nnit.jpg"
                            alt="Modern Apartment" />
                    </div>

                    <div class="gallery-item" data-category="all">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752077850/1_kx1aqd.jpg"
                            alt="Luxury Villa" />
                    </div>

                    <div class="gallery-item" data-category="all">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752077976/14_zrwtxy.jpg"
                            alt="Luxury Villa" />
                    </div>

                    <div class="gallery-item" data-category="all">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752077871/2_ayxqml.jpg"
                            alt="Luxury Villa" />
                    </div>


                    <!-- Land (1 item) -->
                    <div class="gallery-item" data-category="land">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752365695/401_esjsml.jpg"
                            alt="Vacant Land" />
                    </div>
                    <div class="gallery-item" data-category="land">
                        <img
                            src="https://res.cloudinary.com/ltect-homes/image/upload/v1752366449/Amasaman-848x530_ffcuhg.jpg"
                            alt="Vacant Land" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>

<script src="/assets/js/gallary.js"></script>

<?php include '../footer.php'; ?>