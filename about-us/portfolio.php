<div class="port-container">
    <div class="port-header">
        <div class="title-section">
            <div class="project-label">Project Gallery</div>
            <h1 class="main-title">Our Portfolio</h1>
        </div>
        <button class="view-all-btn" onclick="viewAllProjects()">
            VIEW ALL PROJECT →
        </button>
    </div>

    <div class="portfolio-swiper swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="project-card" onclick="viewProject('prime-oikos')">
                    <div class="project-image project-1">
                        <div class="add-icon">+</div>
                    </div>
                    <div class="project-info">
                        <div class="project-location">East Legon, Accra</div>
                        <div class="project-name">Prime Oikos Estate</div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="project-card" onclick="viewProject('annapolis-court')">
                    <div class="project-image project-2">
                        <div class="add-icon">+</div>
                    </div>
                    <div class="project-info">
                        <div class="project-location">Cantonments, Accra</div>
                        <div class="project-name">Annapolis Court</div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="project-card" onclick="viewProject('idera-residential')">
                    <div class="project-image project-3">
                        <div class="add-icon">+</div>
                    </div>
                    <div class="project-info">
                        <div class="project-location">Airport Residential, Accra</div>
                        <div class="project-name">Idera Residential Scheme</div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="project-card" onclick="viewProject('golden-heights')">
                    <div class="project-image project-4">
                        <div class="add-icon">+</div>
                    </div>
                    <div class="project-info">
                        <div class="project-location">Ridge, Accra</div>
                        <div class="project-name">Golden Heights Towers</div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="project-card" onclick="viewProject('emerald-gardens')">
                    <div class="project-image project-5">
                        <div class="add-icon">+</div>
                    </div>
                    <div class="project-info">
                        <div class="project-location">Spintex, Accra</div>
                        <div class="project-name">Emerald Gardens</div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="project-card" onclick="viewProject('royal-terraces')">
                    <div class="project-image project-6">
                        <div class="add-icon">+</div>
                    </div>
                    <div class="project-info">
                        <div class="project-location">Labone, Accra</div>
                        <div class="project-name">Royal Terraces</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation buttons -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

        <!-- Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</div>