define('quantity_pricing.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "quantity-pricing-hidden";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div class=\"quantity-pricing-expander-head\">\n			 	<a class=\"quantity-pricing-expander-head-toggle "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":53},"end":{"line":5,"column":91}}})) != null ? stack1 : "")
    + "\" data-toggle=\"collapse\" data-target=\"#expander-body-container-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemKey") || (depth0 != null ? compilerNameLookup(depth0,"itemKey") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemKey","hash":{},"data":data,"loc":{"start":{"line":5,"column":154},"end":{"line":5,"column":165}}}) : helper)))
    + "\" aria-expanded=\"true\" aria-controls=\"expander-body\" data-action=\"toggle\">\n			 		"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity discounts available",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":50}}}))
    + " <i class=\"quantity-pricing-expander-toggle-icon\"></i>\n			 	</a>\n			</div>\n		<div class=\"quantity-pricing-expander-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":54},"end":{"line":9,"column":77}}})) != null ? stack1 : "")
    + "\" data-nonprefix='true' id=\"expander-body-container-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemKey") || (depth0 != null ? compilerNameLookup(depth0,"itemKey") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemKey","hash":{},"data":data,"loc":{"start":{"line":9,"column":129},"end":{"line":9,"column":140}}}) : helper)))
    + "\" aria-expanded=\"true\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"6":function(container,depth0,helpers,partials,data) {
    return "in";
},"8":function(container,depth0,helpers,partials,data) {
    return "			<a class=\"quantity-pricing-flyout-head-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Quantity discounts available",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":96},"end":{"line":11,"column":140}}}))
    + " <i class=\"quantity-pricing-flyout-toggle-icon\"></i></a>\n		<div class=\"quantity-pricing-flyout-content collapsed\">\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<tr>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"maximumquantity") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":40,"column":15}}})) != null ? stack1 : "")
    + "							</tr>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "									<td class=\"quantity-pricing-table-body-quantity\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"minimumquantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumquantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minimumquantity","hash":{},"data":data,"loc":{"start":{"line":27,"column":58},"end":{"line":27,"column":77}}}) : helper)))
    + " – "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maximumquantity") || (depth0 != null ? compilerNameLookup(depth0,"maximumquantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maximumquantity","hash":{},"data":data,"loc":{"start":{"line":27,"column":80},"end":{"line":27,"column":99}}}) : helper)))
    + "</td>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"is_range") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":28,"column":9},"end":{"line":32,"column":16}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "										<td class=\"quantity-pricing-table-body-price\">"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"price_range") : depth0)) != null ? compilerNameLookup(stack1,"min_formatted") : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"price_range") : depth0)) != null ? compilerNameLookup(stack1,"max_formatted") : stack1), depth0))
    + "</td>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "										<td class=\"quantity-pricing-table-body-price\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"price_formatted") || (depth0 != null ? compilerNameLookup(depth0,"price_formatted") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"price_formatted","hash":{},"data":data,"loc":{"start":{"line":31,"column":56},"end":{"line":31,"column":75}}}) : helper)))
    + "</td>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "									<td class=\"quantity-pricing-table-body-quantity\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"minimumquantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumquantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"minimumquantity","hash":{},"data":data,"loc":{"start":{"line":34,"column":58},"end":{"line":34,"column":77}}}) : helper)))
    + " +</td>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"is_range") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":35,"column":9},"end":{"line":39,"column":16}}})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"quantity-pricing "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContent") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":86}}})) != null ? stack1 : "")
    + "\">\n	<div class=\"quantity-pricing-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + "			<!-- content -->\n			<div class=\"quantity-pricing-expander-body-container\">\n				<table>\n					<thead>\n						<tr>\n							<th class=\"quantity-pricing-table-header-quantity\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":58},"end":{"line":19,"column":82}}}))
    + "</th>\n							<th class=\"quantity-pricing-table-header-price\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Price",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":55},"end":{"line":20,"column":76}}}))
    + "</th>\n						</tr>\n					</thead>\n					<tbody>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"priceSchedule") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":42,"column":15}}})) != null ? stack1 : "")
    + "					</tbody>\n				</table>\n			</div>\n			<!-- /content -->\n		</div>\n	</div>\n</div>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quantity_pricing'; return template;});