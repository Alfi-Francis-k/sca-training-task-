define('facets_browse_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "facets-browse-category-heading-list-header-with-image";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"category-pusher\"></div>\n	<div class=\"facets-browse-category-heading-main-image\">\n		<img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"banner") || (depth0 != null ? compilerNameLookup(depth0,"banner") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"banner","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":22}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":6,"column":29},"end":{"line":6,"column":44}}}) : helper)))
    + "\" />\n	</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "	<div class=\"facets-browse-category-heading-main-description\">\n		<h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":21}}}) : helper)))
    + "</h1>\n		<p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":12,"column":5},"end":{"line":12,"column":22}}}) : helper))) != null ? stack1 : "")
    + "</p>\n	</div>\n</section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"facets-browse-category-heading-list-header  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":60},"end":{"line":2,"column":137}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + "\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_browse_category_heading'; return template;});