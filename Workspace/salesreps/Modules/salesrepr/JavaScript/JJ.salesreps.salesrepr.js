define(
	'JJ.salesreps.salesrepr'
,   [
		'JJ.salesreps.salesrepr.View'
	]
,   function (
		salesreprView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			console.log('salesrepr Extension Loading...');
			
			// Using Layout component as it is available across all application contexts
			var layout = container.getComponent('Layout');
			
			if (layout)
			{
				console.log('Layout Component found. Mounting views...');

				// Mount to Account Overview Banner
				layout.addChildView('Overview.Banner', function() { 
					return new salesreprView({ container: container });
				});

				// Mount to Recent Purchases (Order History) page Banner
				layout.addChildView('OrderHistory.List.Banner', function() { 
					return new salesreprView({ container: container });
				});
			}
			else {
				console.error('salesrepr Error: Layout component not found.');
			}
		}
	};
});