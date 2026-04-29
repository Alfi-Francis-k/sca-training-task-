define('global_views_breadcrumb.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "        <figure>\n            <img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraBreadcrumbView") : depth0)) != null ? compilerNameLookup(stack1,"pageBanner") : stack1),"none",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":9,"column":22},"end":{"line":9,"column":75}}}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":9,"column":82},"end":{"line":9,"column":97}}}) : helper)))
    + "\" class=\"breadcrumb-image\" />\n        </figure>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && compilerNameLookup(data,"last")),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":26,"column":19}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <li class=\"global-views-breadcrumb-item-active\">\n                    "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":16,"column":28}}}) : helper)))
    + "\n                </li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <li class=\"global-views-breadcrumb-item\">\n                    <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"href") || (depth0 != null ? compilerNameLookup(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":20,"column":29},"end":{"line":20,"column":37}}}) : helper)))
    + "\"\n                        "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDataTouchpoint") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":24},"end":{"line":21,"column":95}}})) != null ? stack1 : "")
    + "\n                        "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDataHashtag") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":22,"column":86}}})) != null ? stack1 : "")
    + "\n                    > "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":23,"column":22},"end":{"line":23,"column":30}}}) : helper)))
    + " </a>\n                </li>\n                <li class=\"global-views-breadcrumb-divider\"><span class=\"global-views-breadcrumb-divider-icon\"></span></li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return " data-touchpoint=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"data-touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"data-touchpoint") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"data-touchpoint","hash":{},"data":data,"loc":{"start":{"line":21,"column":67},"end":{"line":21,"column":86}}}) : helper)))
    + "\" ";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return " data-hashtag=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"data-hashtag") || (depth0 != null ? compilerNameLookup(depth0,"data-hashtag") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"data-hashtag","hash":{},"data":data,"loc":{"start":{"line":22,"column":61},"end":{"line":22,"column":77}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"breadcrumb-container\">\n\n    <div id=\"banner-breadcrumb-top\" class=\"content-banner banner-breadcrumb-top\" data-cms-area=\"breadcrumb_top\" data-cms-area-filters=\"global\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraBreadcrumbView") : depth0)) != null ? compilerNameLookup(stack1,"showCategHeading") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "    <ul class=\"global-views-breadcrumb\" itemprop=\"breadcrumb\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>\n\n<div id=\"banner-breadcrumb-bottom\" class=\"content-banner banner-breadcrumb-bottom\" data-cms-area=\"breadcrumb_bottom\" data-cms-area-filters=\"global\"></div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_breadcrumb'; return template;});