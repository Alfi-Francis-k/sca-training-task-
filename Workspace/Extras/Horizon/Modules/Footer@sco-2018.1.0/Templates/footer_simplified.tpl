{{!-- Edited for Horizon Theme --}}

<section class="footer-wrapper"{{#if extraFooterSimplifiedView.backgroundUrl}} style="background-image: url('{{getThemeAssetsPath extraFooterSimplifiedView.backgroundUrl}}');"{{/if}}>

	<div data-view="Global.BackToTop"></div>
	<div id="banner-footer" class="content-banner banner-footer" data-cms-area="simplified_footer_banner" data-cms-area-filters="global"></div>

	<div class="footer-content footer-simplified">
        <div class="footer-content-bottom">
            <div class="footer-content-copyright">
                {{#with extraFooterSimplifiedView.copyright}}
                    {{#unless hide}}
                        {{#if showRange}}
                            {{translate '&copy; $(0) &#8211; $(1) $(2)' initialYear currentYear companyName}}
                            <!-- an en dash &#8211; is used to indicate a range of values -->
                        {{else}}
                            {{translate '&copy; $(0) $(1)' currentYear companyName}}
                        {{/if}}
                    {{/unless}}
                {{/with}}
            </div>
            <div class="footer-extra-info">
                {{#if extraFooterSimplifiedView.text}}
                    {{{extraFooterSimplifiedView.text}}}
                {{/if}}
            </div>
        </div>
    </div>

</section>



{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}

