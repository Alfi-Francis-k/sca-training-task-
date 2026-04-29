define('jj_product_list_control.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<button class=\"product-list-control-button-move\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\" type=\"button\">\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Move",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":22}}}))
    + "\r\n	</button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<button class=\"product-list-control-button-wishlist\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\" type=\"button\" >\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add to Wishlist",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":7,"column":33}}}))
    + "\r\n	</button>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "product-list-control-move";
},"7":function(container,depth0,helpers,partials,data) {
    return "style=\"display: block\"";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<div data-confirm-message=\"\"></div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Add to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":18,"column":25}}}))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasProductLists") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":3},"end":{"line":26,"column":10}}})) != null ? stack1 : "")
    + ":\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				("
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"productListLength") || (depth0 != null ? compilerNameLookup(depth0,"productListLength") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"productListLength","hash":{},"data":data,"loc":{"start":{"line":20,"column":5},"end":{"line":20,"column":26}}}) : helper)))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneProductList") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
    + "			";
},"13":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":5},"end":{"line":22,"column":25}}}))
    + ")\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":5},"end":{"line":24,"column":26}}}))
    + "\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":3},"end":{"line":28,"column":25}}}))
    + "\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<li class=\"product-list-control-nolists-messages\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":34,"column":4},"end":{"line":38,"column":11}}})) != null ? stack1 : "")
    + "			</li>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no other lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":5},"end":{"line":35,"column":45}}}))
    + "\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":5},"end":{"line":37,"column":39}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + "<div class=\"product-list-control-flyout "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":40},"end":{"line":10,"column":88}}})) != null ? stack1 : "")
    + "\" data-type=\"productlist-control\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showControl") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":122},"end":{"line":10,"column":170}}})) != null ? stack1 : "")
    + " data-dropdown-content>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":1},"end":{"line":14,"column":12}}})) != null ? stack1 : "")
    + "\r\n	<h5 class=\"product-list-control-flyout-title\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "	</h5>\r\n	<ul class=\"product-list-control-flyout-product-lists\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":2},"end":{"line":40,"column":9}}})) != null ? stack1 : "")
    + "	</ul>\r\n	<h5 class=\"product-list-control-flyout-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Or: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":47},"end":{"line":42,"column":67}}}))
    + "</h5>\r\n	<div class=\"product-list-control-new-product-list-container\" data-type=\"new-item-container\"></div>\r\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/JJ/whislist/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'jj_product_list_control'; return template;});