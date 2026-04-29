
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.whislist.whislists.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.whislist.whislists.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}