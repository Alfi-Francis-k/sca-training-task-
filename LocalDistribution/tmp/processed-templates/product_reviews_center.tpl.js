define('product_reviews_center.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "                <div class=\"product-reviews-center-container\">\n                    <div class=\"container\">\n                        <div class=\"product-reviews-center-container-header\">\n                            <h2 class=\"product-reviews-center-container-header-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Ratings &amp; Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":86},"end":{"line":14,"column":123}}}))
    + "</h2>\n                            <h3 class=\"product-reviews-center-container-header-number\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneReview") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":16,"column":32},"end":{"line":20,"column":39}}})) != null ? stack1 : "")
    + "                            </h3>\n                            <div data-view=\"Global.StarRating\"></div>\n                        </div>\n                        <div class=\"product-reviews-center-container-wrapper\">\n                            <div data-view=\"Global.RatingByStar\"></div>\n                        </div>\n                    </div>\n                </div>\n\n                <section class=\"product-reviews-center-list\">\n                    <!-- <h2 class=\"product-reviews-center-container-header-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Ratings &amp; Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":83},"end":{"line":31,"column":120}}}))
    + "</h2> -->\n\n                    <div  data-view=\"ListHeader.View\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"totalRecords") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":34,"column":20},"end":{"line":38,"column":27}}})) != null ? stack1 : "")
    + "\n                    <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":40,"column":29},"end":{"line":40,"column":40}}}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-footer-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":107},"end":{"line":40,"column":137}}}))
    + "</a>\n                </section>\n\n                <div class=\"product-reviews-center-footer\">\n                    <div data-view=\"GlobalViews.Pagination\"></div>\n                </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                                    "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":36},"end":{"line":17,"column":60}}}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                                    "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) reviews",(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":36},"end":{"line":19,"column":74}}}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                        <div data-view=\"ProductReviews.Review\" class=\"product-reviews-center-review-container\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no reviews available for your selection",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":24},"end":{"line":37,"column":89}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "                <div class=\"product-reviews-center-container\">\n                    <div class=\"product-reviews-center-container-header\">\n                        <h3 class=\"product-reviews-center-container-header-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Ratings &amp; Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":82},"end":{"line":49,"column":119}}}))
    + "</h3>\n                        <h4 class=\"product-reviews-center-container-header-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"No reviews available",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":50,"column":82},"end":{"line":50,"column":118}}}))
    + "</h4>\n                        <p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Be the first to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":51,"column":27},"end":{"line":51,"column":58}}}))
    + " <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":51,"column":68},"end":{"line":51,"column":79}}}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":51,"column":139},"end":{"line":51,"column":169}}}))
    + "</a></p>\n                    </div>\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"product-reviews-center-content\">\n	<button class=\"product-reviews-center-pusher\" data-target=\"product-reviews-center-review\" data-type=\"sc-pusher\">\n		<span class=\"product-reviews-center-pusher-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":52},"end":{"line":4,"column":77}}}))
    + "</span>\n		<div class=\"product-reviews-center-pusher-rating\" data-view=\"Global.StarRating\"></div>\n		<i class=\"product-reviews-center-pusher-icon\"></i>\n	</button>\n	<div class=\"product-reviews-center-more-info-content-container\" data-action=\"pushable\" data-id=\"product-reviews-center-review\">\n        <div class=\"product-reviews-center\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":54,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</section>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_reviews_center'; return template;});