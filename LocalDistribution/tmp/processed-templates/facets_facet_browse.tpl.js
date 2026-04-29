define('facets_facet_browse.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "facets-display-format-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFacetsBrowseView") : depth0)) != null ? compilerNameLookup(stack1,"facetsDisplayFormat") : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"facets-facet-browse-content\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCategory") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":17,"column":19}}})) != null ? stack1 : "")
    + "\n			<div class=\"facets-facet-browse-facets\" data-action=\"pushable\" data-id=\"product-search-facets\">\n				<div data-cms-area=\"facet_navigation_top\" data-cms-area-filters=\"page_type\"></div>\n				<div data-view=\"Facets.FacetedNavigation\" data-exclude-facets=\"commercecategoryname,category\" class=\"facets-faceted-navigation-data-view\"></div>\n			</div>\n\n			<!--\n			Sample of how to add a particular facet into the HTML. It is important to specify the data-facet-id=\"<facet id>\"\n			properly <div data-view=\"Facets.FacetedNavigation.Item\" data-facet-id=\"custitem1\"></div>\n			 -->\n\n			<div class=\"facets-facet-browse-results\">\n\n			<header class=\"facets-facet-browse-header\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showItems") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":83,"column":11}}})) != null ? stack1 : "")
    + "			</header>\n\n			<div data-cms-area=\"facets_facet_browse_cms_area_1\" data-cms-area-filters=\"page_type\"></div>\n\n			<div id=\"banner-section-top\" class=\"content-banner banner-section-top\" data-cms-area=\"item_list_banner_top\" data-cms-area-filters=\"path\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showItems") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":4},"end":{"line":96,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n		<div class=\"facets-facet-browse-pagination\" data-view=\"GlobalViews.Pagination\"></div>\n		<div class=\"facets-facet-browse-cms-area-2\" data-cms-area=\"facets_facet_browse_cms_area_2\" data-cms-area-filters=\"page_type\"></div>\n\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"facets-facet-browse-category\">\n                    <div data-view=\"Facets.Browse.CategoryHeading\" class=\"facets-facet-browse-category-heading\"></div>\n\n                    <div class=\"facets-facet-browse-category-cells-container\">\n                        <div data-view=\"Facets.CategoryCells\" class=\"facets-facet-browse-category-cells\"></div>\n                    </div>\n                </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<h1 class=\"facets-facet-browse-title\" data-quantity=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"total") || (depth0 != null ? compilerNameLookup(depth0,"total") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"total","hash":{},"data":data,"loc":{"start":{"line":34,"column":57},"end":{"line":34,"column":66}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":35,"column":5},"end":{"line":47,"column":12}}})) != null ? stack1 : "")
    + "				</h1>\n\n				<nav class=\"facets-facet-browse-list-header\">\n\n					<div class=\"facets-facet-browse-list-header-actions\" data-view=\"Facets.ItemListDisplaySelector\"></div>\n					<div class=\"facets-facet-browse-list-header-expander\">\n						<button class=\"facets-facet-browse-list-header-expander-button collapsed\" data-toggle=\"collapse\" data-target=\"#list-header-filters\" aria-expanded=\"true\" aria-controls=\"list-header-filters\">\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sort & Filter",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":7},"end":{"line":55,"column":36}}}))
    + "\n							<i class=\"facets-facet-browse-list-header-expander-icon\"></i>\n						</button>\n					</div>\n\n					<div class=\"facets-facet-browse-list-header-filters collapse\" id=\"list-header-filters\">\n						<div class=\"facets-facet-browse-list-header-filters-wrapper\">\n\n							<div class=\"facets-facet-browse-list-header-filters-row\">\n\n								<div class=\"facets-facet-browse-list-header-filter-column\" data-view=\"Facets.ItemListShowSelector\">\n								</div>\n\n								<div class=\"facets-facet-browse-list-header-filter-column\" data-view=\"Facets.ItemListSortSelector\">\n								</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItemsAndFacets") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":8},"end":{"line":78,"column":15}}})) != null ? stack1 : "")
    + "							</div>\n						</div>\n					</div>\n				</nav>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isTotalProductsOne") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":40,"column":13}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 Result for <span class=\"facets-facet-browse-title-alt\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":7},"end":{"line":37,"column":100}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Results for <span class=\"facets-facet-browse-title-alt\">$(1)</span>",(depth0 != null ? compilerNameLookup(depth0,"total") : depth0),(depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":39,"column":7},"end":{"line":39,"column":110}}}))
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isTotalProductsOne") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":42,"column":6},"end":{"line":46,"column":13}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 Product",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":7},"end":{"line":43,"column":32}}}))
    + "\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Products",(depth0 != null ? compilerNameLookup(depth0,"total") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":7},"end":{"line":45,"column":42}}}))
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "									<div class=\"facets-facet-browse-list-header-filter-column\">\n										<button class=\"facets-facet-browse-list-header-filter-facets\" data-type=\"sc-pusher\" data-target=\"product-search-facets\">\n											"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Narrow By",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":74,"column":11},"end":{"line":74,"column":36}}}))
    + "\n											<i class=\"facets-facet-browse-list-header-filter-facets-icon\"></i>\n										</button>\n									</div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<div class=\"facets-facet-browse-narrowedby\" data-view=\"Facets.FacetsDisplay\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isEmptyList") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":91,"column":6},"end":{"line":95,"column":13}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "							<div data-view=\"Facets.Items.Empty\"></div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "							<div class=\"facets-facet-browse-items\" data-view=\"Facets.Items\"></div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"facets-facet-browse-empty-items\" data-view=\"Facets.Items.Empty\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<section class=\"facets-facet-browse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFacetsBrowseView") : depth0)) != null ? compilerNameLookup(stack1,"facetsDisplayFormat") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":159}}})) != null ? stack1 : "")
    + "\">\n	<div data-cms-area=\"item_list_banner\" data-cms-area-filters=\"page_type\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showResults") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":6,"column":1},"end":{"line":104,"column":9}}})) != null ? stack1 : "")
    + "\n	<div id=\"banner-section-bottom\" class=\"content-banner banner-section-bottom facets-facet-browse-banner-section-bottom\" data-cms-area=\"item_list_banner_bottom\" data-cms-area-filters=\"page_type\"></div>\n</section>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_facet_browse'; return template;});