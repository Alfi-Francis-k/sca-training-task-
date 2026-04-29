{{!-- Edited for Horizon Theme --}}

<div class="home">
	<!-- CMS ZONE -->
	<div data-cms-area="home_cms_area_1" data-cms-area-filters="path"></div>
    <!-- HERO PROMO -->
    {{#if extraHomeView.hero}}
    <div class="home-hero">
        <div class="hero-wrapper" {{#if extraHomeView.hero.image}}style="background-image: url('{{getThemeAssetsPathWithDefault extraHomeView.hero.image}}');"{{/if}}></div>
        <div class="home-info-container">
            <a href="{{extraHomeView.hero.href}}">
                <div class="home-info">
                    {{#if extraHomeView.hero.title}}
                        <h2 class="home-info-title">{{extraHomeView.hero.title}}</h2>
                    {{/if}}
                    {{#if extraHomeView.hero.text}}
                        <h3 class="home-info-text">{{extraHomeView.hero.text}}</h3>
                    {{/if}}
                    <span class="home-info-linktext">
                        {{#if extraHomeView.hero.linktext}}
                            {{extraHomeView.hero.linktext}}
                        {{else}}
                            {{translate 'Shop Now'}}
                        {{/if}}
                    </span>
                </div>
            </a>
        </div>
    </div>
	{{else}}
	<div class="home-hero">
        <div class="hero-wrapper" style="background-image: url('{{getThemeAssetsPath 'img/horizon-hero.jpg'}}');"></div>
        <div class="home-info-container">
            <a href="/search">
                <div class="home-info">
                    <h2 class="home-info-title">{{translate 'WINTER IS COMING'}}</h2>
                    {{!-- <h3 class="home-info-text">optional text</h3> --}}
                    <span class="home-info-linktext">{{translate 'Shop Now'}}</span>
                </div>
            </a>
        </div>
    </div>
    {{/if}}

	<!-- CMS ZONE -->
	<div data-cms-area="home_cms_area_2" data-cms-area-filters="path"></div>

    <!-- ANNOUNCEMENT -->
    {{#if extraHomeView.announcement}}
    <div class="home-announcement">{{translate extraHomeView.announcement}}</div>
	{{else}}
	<div class="home-announcement">{{translate 'UPGRADE FROM FREE 2-DAY TO NEXT-DAY SHIPPING WHEN YOU SPEND $25'}}</div>
    {{/if}}

    <!-- CMS MERCHANDISING ZONE -->
    <div class="home-merchandizing-zone">
        <div class="home-merchandizing-zone-content">
            <div data-cms-area="home_merchandizing_zone" data-cms-area-filters="path"></div>
        </div>
    </div>

    <!--
    INFOBLOCKS
    The first two infloblocks are styled to span 50% of the viewport on larger devices
    Any subsequent infoblocks span full width
    -->
	{{#if extraHomeView.showInfoblocks}}
    <div class="home-infoblock-layout">
        {{#each extraHomeView.infoBlocks}}
        <a{{objectToAtrributes item}} class="home-infoblock-link">
            <div class="home-infoblock home-infoblock{{@index}}"
			style="{{#if image}}background-image: url('{{getThemeAssetsPathWithDefault image}}');{{/if}}{{#if color}}background-color: {{color}};{{/if}}">

					<div class="home-infoblock-content">
						<div class="home-infoblock-info">
								{{#if title}}
									<h2 class="home-info-title">{{title}}</h2>
								{{/if}}
								{{#if text}}
									<h3 class="home-info-text">{{text}}</h3>
								{{/if}}
								{{#if linktext}}
									<span class="home-info-linktext">
										{{#if linktext}}
											{{linktext}}
										{{else}}
											{{translate 'Shop Now'}}
										{{/if}}
									</span>
								{{/if}}
						</div>
					</div>
            </div>
        </a>
        {{/each}}
    </div>
	{{/if}}

    <!-- CMS ZONE -->
    <div data-cms-area="home_cms_area_3" data-cms-area-filters="path"></div>

    <!-- CAROUSEL -->
	{{#if extraHomeView.isReady}}
	{{#if extraHomeView.showCarousel}}
	<!-- Extended Carousel to include slide text and links, overrides standard carousel -->
    <div class="home-slider-container">
        <div class="home-image-slider">
            <ul data-slider id="home-image-slider-list" class="home-image-slider-list">
                {{#each extraHomeView.carousel}}
                <li>
                    <div class="home-slide-main-container home-slide-main-container{{@index}}">
						{{#if isAbsoluteUrl}}
							<img src="{{image}}" class="home-slide-image">
						{{else}}
							<img{{#unless image}} class="home-slider-backup-image"{{/unless}} src="{{getThemeAssetsPathWithDefault image 'img/horizon-carousel-home-2.jpg'}}" class="home-slide-image">
						{{/if}}
                        <div class="home-info-container">
								<a {{objectToAtrributes item}}>
									<div class="home-info">
										{{#if title}}
											<h2 class="home-info-title">{{title}}</h2>
										{{/if}}
										{{#if text}}
											<h3 class="home-info-text">{{text}}</h3>
										{{/if}}
										{{#if linktext}}
											<span class="home-info-linktext">
												{{#if linktext}}
													{{linktext}}
												{{else}}
													{{translate 'Shop Now'}}
												{{/if}}
											</span>
										{{/if}}
									</div>
								</a>
                        </div>
                    </div>
                </li>
                {{/each}}
            </ul>
        </div>
    </div>
	{{else}}
	<!-- Standard Carousel -->
	<div class="home-slider-container">
        <div class="home-image-slider">
            <ul data-slider class="home-image-slider-list">
                {{#each carouselImages}}
                <li>
                    <div class="home-slide-main-container">
                        <img src="{{this}}" class="home-slide-image">
                        <div class="home-info-container">
                            <a href="/search">
                                <div class="home-info">
                                    <h2 class="home-info-title">SAMPLE HEADLINE</h2>
                                    <span class="home-info-linktext">{{translate 'Shop Now'}}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
				{{else}}
				<li>
                    <div class="home-slide-main-container">
                        <img src="{{getThemeAssetsPath 'img/horizon-carousel-home-1.jpg'}}" class="home-slide-image">
                        <div class="home-info-container">
                            <a href="/search">
                                <div class="home-info">
                                    <h2 class="home-info-title">20% off all goggles</h2>
                                    <span class="home-info-linktext">{{translate 'Shop Now'}}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
				<li>
                    <div class="home-slide-main-container">
                        <img src="{{getThemeAssetsPath 'img/horizon-carousel-home-2.jpg'}}" class="home-slide-image">
                        <div class="home-info-container">
                            <a href="/search">
                                <div class="home-info">
                                    <h2 class="home-info-title">Winter Lookbook</h2>
                                    <span class="home-info-linktext">{{translate 'View Now'}}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
				<li>
                    <div class="home-slide-main-container">
                        <img src="{{getThemeAssetsPath 'img/horizon-carousel-home-3.jpg'}}" class="home-slide-image">
                        <div class="home-info-container">
                            <a href="/search">
                                <div class="home-info">
                                    <h2 class="home-info-title">20% off selected tents</h2>
                                    <span class="home-info-linktext">{{translate 'Shop Now'}}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                {{/each}}
            </ul>
        </div>
    </div>
    {{/if}}
	{{/if}}

    <!-- CMS ZONE -->
	<div data-cms-area="home_cms_area_4" data-cms-area-filters="path"></div>

</div>

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}

