define('jj_whislist_whislists.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "Remove from Wishlist";
},"3":function(container,depth0,helpers,partials,data) {
    return "Add to Wishlist";
},"5":function(container,depth0,helpers,partials,data) {
    return "❤";
},"7":function(container,depth0,helpers,partials,data) {
    return "♡";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <button \n                class=\"product-list-control-button-move\"\n                data-action=\"show-productlist-control\"\n                data-toggle=\"showFlyout\"\n                type=\"button\">\n                "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Move",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":36}}}))
    + "\n            </button>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "            <button \n                class=\"product-list-control-button-wishlist\"\n                data-action=\"show-productlist-control\"\n                data-toggle=\"showFlyout\"\n                type=\"button\">\n                "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add to Wishlist",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":33,"column":47}}}))
    + "\n            </button>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "display:block;";
},"15":function(container,depth0,helpers,partials,data) {
    return "display:none;";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"wishlist-integrated-container\" style=\"position: relative; display: inline-block; width: 100%; text-align: center;\">\n\n    <button \n        class=\"wishlist-icon-btn\" \n        data-action=\"toggle-wishlist\"\n        style=\"background:none; border:none; cursor:pointer; font-size:32px; color:#e74c3c; outline:none;\"\n        title=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inWishlist") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":83}}})) != null ? stack1 : "")
    + "\"\n    >\n        <span class=\"heart-symbol\" style=\"transition: transform 0.2s ease;\">\n            "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inWishlist") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":47}}})) != null ? stack1 : "")
    + "\n        </span>\n    </button>\n\n    <div class=\"native-wishlist-trigger-wrapper\"\n         style=\"position:absolute; opacity:0; pointer-events:none; height:0; width:0; overflow:hidden;\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":35,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n\n    <div class=\"wishlist-dropdown-container\"\n         style=\"position:absolute; top:100%; left:50%; transform:translateX(-50%); z-index:10000; background:white; min-width:220px;\n         "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMenu") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":42,"column":9},"end":{"line":42,"column":67}}})) != null ? stack1 : "")
    + "\">\n\n        <div data-view=\"ProductListControl\"></div>\n\n    </div>\n\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/JJ/whislist/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'jj_whislist_whislists'; return template;});