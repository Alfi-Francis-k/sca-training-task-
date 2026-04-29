{{!-- Edited for Horizon Theme --}}

<section class="footer-wrapper"{{#if extraFooterView.backgroundUrl}} style="background-image: url('{{getThemeAssetsPath extraFooterView.backgroundUrl}}');"{{/if}}>

	<div data-view="Global.BackToTop"></div>
	<div id="banner-footer" class="content-banner banner-footer" data-cms-area="global_banner_footer" data-cms-area-filters="global"></div>

	<div class="footer-content">

		<div class="footer-content-nav">
			{{#if extraFooterView.col1Links}}
            <ul class="footer-content-nav-list">
            {{#each extraFooterView.col1Links}}
            {{#if href}}
                <li class="footer-column-link-listitem"><a class="footer-column-link" {{objectToAtrributes item}} data-hashtag="{{datahashtag}}" data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}">{{text}}</a></li>
            {{else}}
                <li class="footer-column-heading-listitem"><h4 class="footer-column-heading">{{text}}</h4></li>
            {{/if}}
            {{/each}}
            </ul>
            {{/if}}

            {{#if extraFooterView.col2Links}}
            <ul class="footer-content-nav-list">
            {{#each extraFooterView.col2Links}}
            {{#if href}}
                <li class="footer-column-link-listitem"><a class="footer-column-link" {{objectToAtrributes item}} data-hashtag="{{datahashtag}}" data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}">{{text}}</a></li>
            {{else}}
                <li class="footer-column-heading-listitem"><h4 class="footer-column-heading">{{text}}</h4></li>
            {{/if}}
            {{/each}}
            </ul>
            {{/if}}

            {{#if extraFooterView.col3Links}}
            <ul class="footer-content-nav-list">
            {{#each extraFooterView.col3Links}}
            {{#if href}}
                <li class="footer-column-link-listitem"><a class="footer-column-link" {{objectToAtrributes item}} data-hashtag="{{datahashtag}}" data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}">{{text}}</a></li>
            {{else}}
                <li class="footer-column-heading-listitem"><h4 class="footer-column-heading">{{text}}</h4></li>
            {{/if}}
            {{/each}}
            </ul>
            {{/if}}

            {{#if extraFooterView.col4Links}}
            <ul class="footer-content-nav-list">
            {{#each extraFooterView.col4Links}}
            {{#if href}}
                <li class="footer-column-link-listitem"><a class="footer-column-link" {{objectToAtrributes item}} data-hashtag="{{datahashtag}}" data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}">{{text}}</a></li>
            {{else}}
                <li class="footer-column-heading-listitem"><h4 class="footer-column-heading">{{text}}</h4></li>
            {{/if}}
            {{/each}}
            </ul>
            {{/if}}
		</div>

		<div class="footer-content-newsletter">
            {{#if extraFooterView.socialMediaLinks}}
            {{#if extraFooterView.socialMediaTitle}}<h4>{{extraFooterView.socialMediaTitle}}</h4>{{/if}}
            <div class="footer-social">
                <div class="footer-content-social">
                    <ul class="footer-content-social-list">
                    {{#each extraFooterView.socialMediaLinks}}
                        <li><a {{objectToAtrributes item}} data-hashtag="{{datahashtag}}" data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}" target="_blank">{{#if icon}}<i class="footer-content-social-icon icon-{{icon}}"></i>{{else}}{{text}}{{/if}}</a></li>
                    {{/each}}
                    </ul>
                </div>
            </div>
            {{/if}}
						{{#if extraFooterView.showLegacyNewsletter}}
            	<div data-view="FooterContent"></div>
						{{else}}
							<div class="newsletter-cct-area" data-cms-area="newsletter-cct-area" data-cms-area-filters="global"></div>
						{{/if}}
        </div>

		<div class="footer-content-bottom">
            <div class="footer-content-copyright">
				{{#with extraFooterView.copyright}}
	                {{#unless hide}}
	                    {{#if showRange}}
	                        {{translate '&copy; $(0) &#8211; $(1) $(2)' initialYear currentYear companyName}}
	                        <!-- an en dash &#8211; is used to indicate a range of values -->
	                    {{else}}
	                        {{translate '&copy; $(0) $(1)' currentYear companyName}}
	                    {{/if}}
	                {{/unless}}
					{{else}}
					{{translate '&copy; 2008-2018 Company Name'}}
	            {{/with}}
            </div>
            <div class="footer-extra-info">
                {{#if extraFooterView.text}}
                    {{{extraFooterView.text}}}
                {{/if}}
            </div>
        </div>

	</div>

</section>


{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)

----}}

