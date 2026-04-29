define('login_register_login.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2 class=\"login-register-login-title\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraLoginRegisterLoginView") : depth0)) != null ? compilerNameLookup(stack1,"loginSubtitle") : stack1), depth0)) != null ? stack1 : "")
    + "</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<p class=\"login-register-login-description\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Login below or <a class=\"login-register-login-register-now\" href=\"register\" data-toggle=\"show-in-modal\" data-type=\"register-now\">create an account</a>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":44},"end":{"line":8,"column":210}}}))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p class=\"login-register-login-description\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraLoginRegisterLoginView") : depth0)) != null ? compilerNameLookup(stack1,"loginText") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":139}}})) != null ? stack1 : "")
    + "</p>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraLoginRegisterLoginView") : depth0)) != null ? compilerNameLookup(stack1,"loginText") : stack1), depth0)) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " autofocus ";
},"10":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\n				<div class=\"login-register-login-form-controls\" data-validation=\"control\">\n					<input value=\"true\" type=\"hidden\" name=\"redirect\">\n				</div>\n			</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"GlobalMessageSessionTimeout\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraLoginRegisterLoginView") : depth0)) != null ? compilerNameLookup(stack1,"loginSubtitle") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSkipLogin") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "\n<small class=\"login-register-login-required\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Required <span class=\"login-register-login-form-required\">*</span>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":45},"end":{"line":13,"column":127}}}))
    + "</small>\n\n<form class=\"login-register-login-form\" novalidate>\n	<fieldset class=\"login-register-login-form-fieldset\">\n		<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\n			<label class=\"login-register-login-form-label\" for=\"login-email\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email Address <small class=\"login-register-login-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":19,"column":93}}}))
    + "\n			</label>\n			<div class=\"login-register-login-form-controls\" data-validation=\"control\">\n				<input "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasAutoFocus") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":11},"end":{"line":22,"column":49}}})) != null ? stack1 : "")
    + " type=\"email\" name=\"email\" id=\"login-email\" class=\"login-register-login-form-input\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"your@email.com",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":146},"end":{"line":22,"column":176}}}))
    + "\"/>\n			</div>\n		</div>\n\n		<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\n			<label class=\"login-register-login-form-label\" for=\"login-password\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Password <small class=\"login-register-login-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":28,"column":88}}}))
    + "\n			</label>\n			<div class=\"login-register-login-form-controls\" data-validation=\"control\">\n				<input type=\"password\" name=\"password\" id=\"login-password\" class=\"login-register-login-form-input\">\n			</div>\n		</div>\n\n		<div data-view=\"Login.CustomFields\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":2},"end":{"line":43,"column":9}}})) != null ? stack1 : "")
    + "\n		<div data-type=\"alert-placeholder\" class=\"login-register-login-form-messages\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isUserSessionTimedOut") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":3},"end":{"line":48,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n\n		<div class=\"login-register-login-form-controls-group\" data-type=\"form-login-action\">\n\n			<button type=\"submit\" class=\"login-register-login-submit\" data-action=\"login-button\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Log In",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":54,"column":26}}}))
    + "\n			</button>\n\n			<a class=\"login-register-login-forgot\" data-action=\"forgot-password\" href=\"/forgot-password\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Forgot password?",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":58,"column":4},"end":{"line":58,"column":36}}}))
    + "\n			</a>\n		</div>\n	</fieldset>\n</form>\n<div data-cms-area=\"cms_login_register_login_area\" data-cms-area-filters=\"path\"></div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_login'; return template;});