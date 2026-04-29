define('footer.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " style=\"background-image: url('"
    + container.escapeExpression((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"backgroundUrl") : stack1),{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":3,"column":99},"end":{"line":3,"column":151}}}))
    + "');\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col1Links") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":19,"column":21}}})) != null ? stack1 : "")
    + "            </ul>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"href") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                <li class=\"footer-column-link-listitem\"><a class=\"footer-column-link\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":15,"column":86},"end":{"line":15,"column":113}}}))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":15,"column":128},"end":{"line":15,"column":143}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":15,"column":162},"end":{"line":15,"column":180}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":15,"column":195},"end":{"line":15,"column":209}}}) : helper)))
    + "\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":15,"column":211},"end":{"line":15,"column":219}}}) : helper)))
    + "</a></li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <li class=\"footer-column-heading-listitem\"><h4 class=\"footer-column-heading\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":17,"column":93},"end":{"line":17,"column":101}}}) : helper)))
    + "</h4></li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col2Links") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":31,"column":21}}})) != null ? stack1 : "")
    + "            </ul>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col3Links") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":43,"column":21}}})) != null ? stack1 : "")
    + "            </ul>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col4Links") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":12},"end":{"line":55,"column":21}}})) != null ? stack1 : "")
    + "            </ul>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaTitle") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":62,"column":104}}})) != null ? stack1 : "")
    + "\n            <div class=\"footer-social\">\n                <div class=\"footer-content-social\">\n                    <ul class=\"footer-content-social-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":20},"end":{"line":68,"column":29}}})) != null ? stack1 : "")
    + "                    </ul>\n                </div>\n            </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h4>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaTitle") : stack1), depth0))
    + "</h4>";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                        <li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":67,"column":31},"end":{"line":67,"column":58}}}))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":67,"column":73},"end":{"line":67,"column":88}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":67,"column":107},"end":{"line":67,"column":125}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":67,"column":140},"end":{"line":67,"column":154}}}) : helper)))
    + "\" target=\"_blank\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":67,"column":172},"end":{"line":67,"column":263}}})) != null ? stack1 : "")
    + "</a></li>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"footer-content-social-icon icon-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"icon") || (depth0 != null ? compilerNameLookup(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":67,"column":226},"end":{"line":67,"column":234}}}) : helper)))
    + "\"></i>";
},"21":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":67,"column":248},"end":{"line":67,"column":256}}}) : helper)));
},"23":function(container,depth0,helpers,partials,data) {
    return "            	<div data-view=\"FooterContent\"></div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "							<div class=\"newsletter-cct-area\" data-cms-area=\"newsletter-cct-area\" data-cms-area-filters=\"global\"></div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hide") : depth0),{"name":"unless","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":17},"end":{"line":90,"column":28}}})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showRange") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data,"loc":{"start":{"line":84,"column":21},"end":{"line":89,"column":28}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return "	                        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) &#8211; $(1) $(2)",(depth0 != null ? compilerNameLookup(depth0,"initialYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":85,"column":25},"end":{"line":85,"column":106}}}))
    + "\n	                        <!-- an en dash &#8211; is used to indicate a range of values -->\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "	                        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":88,"column":25},"end":{"line":88,"column":81}}}))
    + "\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; 2008-2018 Company Name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":92,"column":5},"end":{"line":92,"column":50}}}))
    + "\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<section class=\"footer-wrapper\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"backgroundUrl") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":162}}})) != null ? stack1 : "")
    + ">\n\n	<div data-view=\"Global.BackToTop\"></div>\n	<div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"global_banner_footer\" data-cms-area-filters=\"global\"></div>\n\n	<div class=\"footer-content\">\n\n		<div class=\"footer-content-nav\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col1Links") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":21,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col2Links") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":33,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col3Links") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":45,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col4Links") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":12},"end":{"line":57,"column":19}}})) != null ? stack1 : "")
    + "		</div>\n\n		<div class=\"footer-content-newsletter\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":72,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"showLegacyNewsletter") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":73,"column":6},"end":{"line":77,"column":13}}})) != null ? stack1 : "")
    + "        </div>\n\n		<div class=\"footer-content-bottom\">\n            <div class=\"footer-content-copyright\">\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"copyright") : stack1),{"name":"with","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(33, data, 0),"data":data,"loc":{"start":{"line":82,"column":4},"end":{"line":93,"column":22}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"footer-extra-info\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":96,"column":16},"end":{"line":98,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n	</div>\n\n</section>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'footer'; return template;});