define('header_menu_myaccount.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<li class=\"header-menu-myaccount-item-level2\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"permission") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":47},"end":{"line":25,"column":105}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"permissionOperator") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":106},"end":{"line":25,"column":189}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":26,"column":2},"end":{"line":36,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":3},"end":{"line":51,"column":10}}})) != null ? stack1 : "")
    + "	</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-permissions=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"permission") || (depth0 != null ? compilerNameLookup(depth0,"permission") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"permission","hash":{},"data":data,"loc":{"start":{"line":25,"column":83},"end":{"line":25,"column":97}}}) : helper)))
    + "\"";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-permissions-operator=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"permissionOperator") || (depth0 != null ? compilerNameLookup(depth0,"permissionOperator") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"permissionOperator","hash":{},"data":data,"loc":{"start":{"line":25,"column":159},"end":{"line":25,"column":181}}}) : helper)))
    + "\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	  <a  class=\"header-menu-myaccount-anchor-level2\" tabindex=\"-1\" href=\"#\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":74},"end":{"line":27,"column":127}}})) != null ? stack1 : "")
    + " data-touchpoint=\"customercenter\" data-hashtag=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":27,"column":176},"end":{"line":27,"column":183}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":27,"column":191},"end":{"line":27,"column":199}}}) : helper)))
    + "\">\n	    "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":5},"end":{"line":28,"column":23}}}))
    + "\n	  	"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":29,"column":86}}})) != null ? stack1 : "")
    + "\n	  </a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "data-action=\"push-menu\"";
},"9":function(container,depth0,helpers,partials,data) {
    return "<i class=\"header-menu-myaccount-menu-push-icon\"></i>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	  <span  class=\"header-menu-myaccount-span-level2\" tabindex=\"-1\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":66},"end":{"line":32,"column":119}}})) != null ? stack1 : "")
    + " name=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":32,"column":126},"end":{"line":32,"column":134}}}) : helper)))
    + "\">\n	    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":33,"column":23}}}))
    + "\n	    "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":5},"end":{"line":34,"column":87}}})) != null ? stack1 : "")
    + "\n	  </span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	  <ul class=\"header-menu-myaccount-level3\">\n	    <li>\n	      <a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\">\n	          <i class=\"header-menu-myaccount-pop-icon \"></i>\n	          "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":11},"end":{"line":42,"column":31}}}))
    + "\n	      </a>\n	    </li>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":5},"end":{"line":49,"column":14}}})) != null ? stack1 : "")
    + "	  </ul>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	    <li "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"permission") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":9},"end":{"line":46,"column":67}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"permissionOperator") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":68},"end":{"line":46,"column":151}}})) != null ? stack1 : "")
    + ">\n	      <a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":47,"column":125},"end":{"line":47,"column":132}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":47,"column":140},"end":{"line":47,"column":148}}}) : helper)))
    + "\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":47,"column":150},"end":{"line":47,"column":168}}}))
    + "</a>\n	    </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<a class=\"header-menu-myaccount-anchor\" href=\"#\" data-action=\"push-menu\" name=\"myaccount\">\n	"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":27}}}))
    + "\n	<i class=\"header-menu-myaccount-menu-push-icon\"></i>\n</a>\n\n<ul class=\"header-menu-myaccount\">\n	<li>\n		<a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back\">\n			<i class=\"header-menu-myaccount-pop-icon \"></i>\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":23}}}))
    + "\n		</a>\n	</li>\n	<li class=\"header-menu-myaccount-overview\">\n		<a class=\"header-menu-myaccount-overview-anchor\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#overview\" name=\"accountoverview\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Account Overview",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":35}}}))
    + "\n		</a>\n\n		<a class=\"header-menu-myaccount-signout-link\" href=\"#\" data-touchpoint=\"logout\" name=\"signout\">\n			<i class=\"header-menu-myaccount-signout-icon\"></i>\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sign Out",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":20,"column":27}}}))
    + "\n		</a>\n	</li>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"entries") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":1},"end":{"line":53,"column":10}}})) != null ? stack1 : "")
    + "\n</ul>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_menu_myaccount'; return template;});