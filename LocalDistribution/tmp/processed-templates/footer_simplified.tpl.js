define('footer_simplified.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " style=\"background-image: url('"
    + container.escapeExpression((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterSimplifiedView") : depth0)) != null ? compilerNameLookup(stack1,"backgroundUrl") : stack1),{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":3,"column":109},"end":{"line":3,"column":171}}}))
    + "');\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hide") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":20},"end":{"line":19,"column":31}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showRange") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":13,"column":24},"end":{"line":18,"column":31}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "                            "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) &#8211; $(1) $(2)",(depth0 != null ? compilerNameLookup(depth0,"initialYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":28},"end":{"line":14,"column":109}}}))
    + "\n                            <!-- an en dash &#8211; is used to indicate a range of values -->\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                            "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":84}}}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterSimplifiedView") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<section class=\"footer-wrapper\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterSimplifiedView") : depth0)) != null ? compilerNameLookup(stack1,"backgroundUrl") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":182}}})) != null ? stack1 : "")
    + ">\n\n	<div data-view=\"Global.BackToTop\"></div>\n	<div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"simplified_footer_banner\" data-cms-area-filters=\"global\"></div>\n\n	<div class=\"footer-content footer-simplified\">\n        <div class=\"footer-content-bottom\">\n            <div class=\"footer-content-copyright\">\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterSimplifiedView") : depth0)) != null ? compilerNameLookup(stack1,"copyright") : stack1),{"name":"with","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":20,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"footer-extra-info\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterSimplifiedView") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":25,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n\n</section>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'footer_simplified'; return template;});