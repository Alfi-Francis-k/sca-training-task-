define('product_details_information.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "\n		<div class=\"product-details-information-content-container\">\n\n			<div id=\"banner-content-top\" class=\"content-banner banner-content-top\"></div>\n\n			<div role=\"tabpanel\">\n				<ul class=\"product-details-information-content-tabs\" role=\"tablist\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":5},"end":{"line":22,"column":14}}})) != null ? stack1 : "")
    + "				</ul>\n				<div class=\"product-details-information-tab-content\" data-type=\"information-content\" data-action=\"tab-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":5},"end":{"line":31,"column":14}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div id=\"banner-content-bottom\" class=\"content-banner banner-content-bottom\"></div>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<button class=\"product-details-information-pusher\" data-target=\"product-details-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":95},"end":{"line":5,"column":107}}}) : helper)))
    + "\" data-type=\"sc-pusher\">\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":14}}}) : helper)))
    + " <i></i>\n				<p class=\"product-details-information-hint\"> "
    + ((stack1 = (compilerNameLookup(helpers,"trimHtml")||(depth0 && compilerNameLookup(depth0,"trimHtml"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"content") : depth0),150,{"name":"trimHtml","hash":{},"data":data,"loc":{"start":{"line":7,"column":49},"end":{"line":7,"column":75}}})) != null ? stack1 : "")
    + " </p>\n			</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<li class=\"product-details-information-tab-title "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":55},"end":{"line":19,"column":84}}})) != null ? stack1 : "")
    + "\" role=\"presentation\">\n							<a href=\"#\" data-action=\"selected-tab\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":20,"column":55},"end":{"line":20,"column":65}}}) : helper)))
    + "\" data-target=\"#product-details-information-tab-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":20,"column":113},"end":{"line":20,"column":123}}}) : helper)))
    + "\" data-toggle=\"tab\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":143},"end":{"line":20,"column":151}}}) : helper)))
    + "</a>\n						</li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " active ";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<div role=\"tabpanel\" class=\"product-details-information-tab-content-panel "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":80},"end":{"line":27,"column":107}}})) != null ? stack1 : "")
    + "\" id=\"product-details-information-tab-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":145},"end":{"line":27,"column":155}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":157},"end":{"line":27,"column":200}}})) != null ? stack1 : "")
    + " data-action=\"pushable\" data-id=\"product-details-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":261},"end":{"line":27,"column":273}}}) : helper)))
    + "\">\n							"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"showHeader") : depths[1]),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":7},"end":{"line":28,"column":112}}})) != null ? stack1 : "")
    + "\n							<div id=\"product-details-information-tab-content-container-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":66},"end":{"line":29,"column":76}}}) : helper)))
    + "\" class=\"product-details-information-tab-content-container\" data-type=\"information-content-text\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"content") || (depth0 != null ? compilerNameLookup(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":29,"column":173},"end":{"line":29,"column":186}}}) : helper))) != null ? stack1 : "")
    + "</div>\n						</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "active";
},"10":function(container,depth0,helpers,partials,data) {
    return "itemprop=\"description\"";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2 class=\"product-details-information-tab-content-panel-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":28,"column":92},"end":{"line":28,"column":100}}}) : helper)))
    + "</h2>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"product-details-information-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showInformation") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":36,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_information'; return template;});