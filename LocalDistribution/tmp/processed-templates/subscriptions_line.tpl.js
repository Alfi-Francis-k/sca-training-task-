define('subscriptions_line.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "            <span class=\"subscriptions-line-status\" data-view=\"StatusView\"></span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"subscriptions-line-price\" data-view=\"Pricing.View\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isProcessing") : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":20,"column":23}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "                <span class=\"subscriptions-line-quantity\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":58},"end":{"line":19,"column":82}}}))
    + ": "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":19,"column":84},"end":{"line":19,"column":96}}}) : helper)))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <span class=\"subscriptions-line-added\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Added",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":51},"end":{"line":23,"column":72}}}))
    + ": "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"startDate") || (depth0 != null ? compilerNameLookup(depth0,"startDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"startDate","hash":{},"data":data,"loc":{"start":{"line":23,"column":74},"end":{"line":23,"column":87}}}) : helper)))
    + "</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"subscriptions-line\">\n    <p class=\"subscriptions-line-info-card-content subscriptions-line-info-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPhoneDevice") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":19}}})) != null ? stack1 : "")
    + "        <span class=\"subscriptions-line-info-card-content\">\n            <a data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"subscriptionLineNumber") || (depth0 != null ? compilerNameLookup(depth0,"subscriptionLineNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subscriptionLineNumber","hash":{},"data":data,"loc":{"start":{"line":7,"column":24},"end":{"line":7,"column":50}}}) : helper)))
    + "\" data-action=\"change\" class=\"subscriptions-line-button-edit\">\n                "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":24}}}) : helper)))
    + "\n            </a>\n        </span>\n    </p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasPriceIntervals") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "    <p class=\"subscriptions-line-info-card-content subscriptions-line-info-container\">\n        <span class=\"subscriptions-line-type\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Type",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":46},"end":{"line":16,"column":66}}}))
    + ": "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":16,"column":68},"end":{"line":16,"column":76}}}) : helper)))
    + "</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChargeTypeUsage") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":21,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLineTypeOptional") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":24,"column":15}}})) != null ? stack1 : "")
    + "    </p>\n</section>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_line'; return template;});