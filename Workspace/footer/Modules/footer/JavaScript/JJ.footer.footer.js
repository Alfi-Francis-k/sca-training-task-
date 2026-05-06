
define(
	'JJ.footer.footer'
	, [
		'JJ.footer.footer.View'
	]
	, function (
		FooterView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				var layout = container.getComponent('Layout');

				if (layout) {
					layout.addChildView('Footer', function () {
						return new FooterView({ container: container });
					});
				}
			}
		};
	});
