define('header_menu.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":47,"column":10}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<li "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":62}}})) != null ? stack1 : "")
    + ">\n					<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":18,"column":15},"end":{"line":18,"column":24}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":18,"column":26},"end":{"line":18,"column":53}}}))
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":54},"end":{"line":18,"column":72}}}))
    + "</a>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":5},"end":{"line":45,"column":12}}})) != null ? stack1 : "")
    + "				</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-toggle=\"categories-menu\"";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<ul class=\"header-menu-level-container\">\n						<li>\n							<ul class=\"header-menu-level2\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":41,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n						</li>\n					</ul>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "								<li>\n									<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":25,"column":19},"end":{"line":25,"column":28}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":25,"column":30},"end":{"line":25,"column":57}}}))
    + ">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"thumbnailurl") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":40},"end":{"line":28,"column":47}}})) != null ? stack1 : "")
    + "										<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":29,"column":34}}}))
    + "</span>\n									</a>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":9},"end":{"line":39,"column":16}}})) != null ? stack1 : "")
    + "								</li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "										    <img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"thumbnailurl") : depth0),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":27,"column":24},"end":{"line":27,"column":64}}}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":27,"column":71},"end":{"line":27,"column":79}}}) : helper)))
    + "\">\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "									<ul class=\"header-menu-level3\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":37,"column":19}}})) != null ? stack1 : "")
    + "									</ul>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "										<li>\n											<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":35,"column":21},"end":{"line":35,"column":30}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":35,"column":32},"end":{"line":35,"column":59}}}))
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":60},"end":{"line":35,"column":78}}}))
    + "</a>\n										</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n\n<nav class=\"header-menu-secondary-nav\">\n\n	<div class=\"header-menu-search\">\n			<button class=\"header-menu-search-link\" data-action=\"show-sitesearch\" title=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":80},"end":{"line":8,"column":102}}}))
    + "\">\n					<i class=\"header-menu-search-icon\"></i>\n			</button>\n	</div>\n\n	<ul class=\"header-menu-level1\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":48,"column":11}}})) != null ? stack1 : "")
    + "	</ul>\n</nav>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_menu'; return template;});