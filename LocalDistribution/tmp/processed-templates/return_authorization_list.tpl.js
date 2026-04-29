define('return_authorization_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"return-authorization-list-button-back\">\n		<i class=\"return-authorization-list-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"Message\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n			<table class=\"return-authorization-list-results-list\">\n				<thead class=\"return-authorization-list-content-table\">\n					<tr class=\"return-authorization-list-content-table-header-row\">\n						<th class=\"return-authorization-list-content-table-header-row-title\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Return No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":13},"end":{"line":26,"column":39}}}))
    + "</span>\n						</th>\n							<th class=\"return-authorization-list-content-table-header-row-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":13},"end":{"line":29,"column":33}}}))
    + "</span>\n						</th>\n						</th>\n							<th class=\"return-authorization-list-content-table-header-row-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":13},"end":{"line":33,"column":34}}}))
    + "</span>\n						</th>\n						<th class=\"return-authorization-list-content-table-header-row-currency\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":13},"end":{"line":36,"column":35}}}))
    + "</span>\n						</th>\n						<th class=\"return-authorization-list-content-table-header-row-status\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":39,"column":13},"end":{"line":39,"column":35}}}))
    + "</span>\n						</th>\n					</tr>\n				</thead>\n				<tbody data-view=\"Records.List\" class=\"return-authorization-list-records-list\"></tbody>\n			</table>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":3},"end":{"line":53,"column":10}}})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"return-authorization-list-paginator\">\n					<div data-view=\"GlobalViews.Pagination\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":5},"end":{"line":51,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "						<div data-view=\"GlobalViews.ShowCurrentPage\"></div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":56,"column":3},"end":{"line":62,"column":10}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"return-authorization-list-empty\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading...",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":57,"column":47},"end":{"line":57,"column":73}}}))
    + "</p>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"return-authorization-list-empty-section\">\n					<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No returns were found",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":60,"column":9},"end":{"line":60,"column":46}}}))
    + "</h5>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<section class=\"return-authorization-list\">\n	<header class=\"return-authorization-list-header\">\n		<h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":20}}}) : helper)))
    + "</h2>\n	</header>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMessage") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":1},"end":{"line":15,"column":8}}})) != null ? stack1 : "")
    + "\n	<div data-view=\"ListHeader.View\"></div>\n\n	<div class=\"return-authorization-list-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isResultLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":63,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n</section>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'return_authorization_list'; return template;});