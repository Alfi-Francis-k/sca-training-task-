// @module JJ.footer.footer
define('JJ.footer.footer.View'
,	[
	'jj_footer_footer.tpl'
	
	,	'JJ.footer.footer.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_footer_footer_tpl
	
	,	footerSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.footer.footer.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_footer_footer_tpl

	,	initialize: function (options) {
			this.configuration = options.container.getComponent('Configuration');
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.footer.footer.View.Context
	,	getContext: function getContext()
		{
			var footerConfig = this.configuration ? this.configuration.get('footer') : {};
			
			var context = {
				newsletterText: footerConfig.newsletterText || 'Sign up to get new and exclusive offers to your inbox!',
				newsletterButton: footerConfig.newsletterButton || 'Subscribe',
				phone: footerConfig.phone || '909-444-7999',
				email: footerConfig.email || 'info@balajiwireless.com',
				address: footerConfig.address || 'NASHVILLE DISTRIBUTION CENTER, 5301 Centre Pointe Dr, La Vergne, IN 37086',
				brandName: footerConfig.brandName || 'BALAJI',
				copyright: footerConfig.copyright || '© Balaji Trading, Inc. - All Rights Reserved.',
				socialFb: footerConfig.socialFb || '#',
				socialTw: footerConfig.socialTw || '#',
				socialIg: footerConfig.socialIg || '#',
				socialYt: footerConfig.socialYt || '#'
			};

			console.log('Footer Context Data:', context);

			return context;
		}
	});
});
