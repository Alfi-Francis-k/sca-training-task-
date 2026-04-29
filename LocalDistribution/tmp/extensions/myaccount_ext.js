var extensions = {};

extensions['JJ.whislist.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJ/whislist/1.0.0/' + asset;
}

// // @module JJ.whislist.whislists
// define('JJ.whislist.whislists.View'
// ,	[
// 	'jj_whislist_whislists.tpl'
	
// 	,	'JJ.whislist.whislists.SS2Model'
	
// 	,	'Backbone'
//     ]
// , function (
// 	jj_whislist_whislists_tpl
	
// 	,	whislistsSS2Model
	
// 	,	Backbone
// )
// {
//     'use strict';

// 	// @class JJ.whislist.whislists.View @extends Backbone.View
// 	return Backbone.View.extend({

// 		template: jj_whislist_whislists_tpl

// 	,	initialize: function (options) {

// 			/*  Uncomment to test backend communication with an example service
// 				(you'll need to deploy and activate the extension first)
// 			*/

// 			// this.model = new whislistsModel();
// 			// var self = this;
//          	// this.model.fetch().done(function(result) {
// 			// 	self.message = result.message;
// 			// 	self.render();
//       		// });
// 		}

// 	,	events: {
// 		}

// 	,	bindings: {
// 		}

// 	, 	childViews: {

// 		}

// 		//@method getContext @return JJ.whislist.whislists.View.Context
// 	,	getContext: function getContext()
// 		{
// 			//@class JJ.whislist.whislists.View.Context
// 			this.message = this.message || 'Hello World!!'
// 			return {
// 				message: this.message
// 			};
// 		}
// 	});
// });


define('JJ.whislist.whislists.View', [
    'jj_whislist_whislists.tpl',
    'ProductDetails.AddToProductList.View',
    'Backbone',
    'Product.Model',
    'Item.Model',
    'jQuery'
], function (
    template,
    ProductDetailsAddToProductListView,
    Backbone,
    ProductModel,
    ItemModel,
    jQuery
) {
    'use strict';

    return Backbone.View.extend({

        template: template,

        events: {
            'click [data-action="toggle-wishlist"]': 'toggleWishlist'
        },

        initialize: function (options) {

            this.model = options.model || options.Model;
            this.application = options.application || options.container;

            this.inWishlist = false;
            this.showMenu = false;

            var self = this;

            var internalid = this.model.get('internalid') || this.model.id;

            if (!internalid) return;


            this.itemModel = new ItemModel({
                internalid: internalid,
                quantity: 1
            });

            this.productModel = new ProductModel({
                item: this.itemModel.attributes
            });

            this.itemModel.set('options', this.model.get('options'));


            this.productModel = new ProductModel({
                item: this.itemModel.attributes
            });
            this.productModel.set('options', this.itemModel.get('options'));

            if (this.productModel.get('item')) {
                this.productModel.get('item').set('options', this.itemModel.get('options'));
            }

            try {
                if (this.productModel.get('options') && this.productModel.get('options').length > 0) {
                    this.productModel.get('options').filter(function (option) {
                        var values = option.get('values');
                        if (values && values.length) {
                            var optionValue = values[values.length - 1];
                            option.set('value', optionValue);
                        }
                        return option;
                    });
                }
            } catch (error) {

            }

            this.productModel.set('quantity', 1);
            this.productModel.set('_maximumQuantity', 3);
            this.productModel.set('_minimumQuantity', 1);


            var productListModule = this.application.ProductListModule;

            if (productListModule && productListModule.Utils) {

                productListModule.Utils.getProductListsPromise().done(function (lists) {

                    var isFound = false;

                    lists.each(function (list) {

                        var items = list.get('items');

                        if (items && items.length) {

                            items.each(function (item) {

                                var wishlistId = String(
                                    item.get('item').internalid || item.get('item').id
                                );

                                if (wishlistId === String(internalid)) {
                                    isFound = true;

                                }
                            });

                            items.on('add', function (addedItem) {
                                var addedId = String(
                                    addedItem.get('item').internalid || addedItem.get('item').id
                                );

                                if (addedId === String(internalid)) {

                                    self.inWishlist = true;
                                    self.showMenu = false;
                                    self.render();

                                    self.showToast('Added to Wishlist!');
                                }
                            });
                        }
                    });

                    self.inWishlist = isFound;
                    self.render();
                });
            }
        },


        childViews: {
            ProductListControl: function () {
                return new ProductDetailsAddToProductListView({
                    model: this.productModel,
                    application: this.application
                });
            }
        },


        toggleWishlist: function (e) {

            e.preventDefault();
            e.stopPropagation();
            if (this.inWishlist) {
                this.removeFromWishlist();
                return;
            }
            this.isWishlistCreated = !this.inWishlist;
            this.showMenu = !this.showMenu;
            this.render();

            if (this.showMenu) {

                var self = this;

                setTimeout(function () {

                    var $btn = self.$('.product-list-control-button-wishlist');

                    if ($btn.length) {
                        $btn.click();
                    }

                }, 200);
            }
        },
        removeFromWishlist: function () {

            var self = this;

            var productListModule = this.application.ProductListModule;

            if (!productListModule || !productListModule.Utils) return;

            productListModule.Utils.getProductListsPromise().done(function (lists) {

                lists.each(function (list) {

                    var items = list.get('items');

                    if (items && items.length) {

                        var itemToRemove = null;

                        items.each(function (item) {

                            var wishlistId = String(
                                item.get('item').internalid || item.get('item').id
                            );

                            var currentId = String(self.model.get('internalid') || self.model.id);

                            if (wishlistId === currentId) {
                                itemToRemove = item;
                            }
                        });

                        if (itemToRemove) {

                            itemToRemove.destroy().done(function () {

                                self.inWishlist = false;
                                self.render();

                                self.showToast('Removed from Wishlist');
                            });
                        }
                    }
                });
            });
        },

   
        showToast: function (message) {

            jQuery('.wishlist-toast').remove();

            var $toast = jQuery(
                '<div class="wishlist-toast" style="position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%); background: rgba(39,174,96,0.9); color:#fff; padding:10px 20px; border-radius:20px; z-index:10000;">'
                + message +
                '</div>'
            );

            jQuery('body').append($toast);

            setTimeout(function () {
                $toast.fadeOut(function () {
                    jQuery(this).remove();
                });
            }, 2000);
        },

        getContext: function () {
            return {
                inWishlist: this.inWishlist,
                showMenu: this.showMenu
            };
        }

    });
});

// Model.js
// -----------------------
// @module Case
define("JJ.whislist.whislists.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/whislists.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("JJ.whislist.whislists.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/whislists/SuiteScript2/whislists.Service.ss"
            ),
            true
        )
});
});



// define(
// 	'JJ.whislist.whislists'
// ,   [
// 		'JJ.whislist.whislists.View'
// 	]
// ,   function (
// 		whislistsView
// 	)
// {
// 	'use strict';

// 	return  {
// 		mountToApp: function mountToApp (container)
// 		{
// 			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
// 			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
// 			// more documentation of the Extensibility API in
// 			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
// 			/** @type {LayoutComponent} */
// 			var layout = container.getComponent('Layout');
			
// 			if(layout)
// 			{
// 				layout.addChildView('Header.Logo', function() { 
// 					return new whislistsView({ container: container });
// 				});
// 			}

// 		}
// 	};
// });


define('JJ.whislist.whislists', [
    'Facets.ItemCell.View',
    'JJ.whislist.whislists.View',
    'underscore'
], function (
    FacetsItemCellView,
    whislistsView,
    _
) {
    'use strict';

    return {
        mountToApp: function (container) {
            if (FacetsItemCellView) {
                FacetsItemCellView.addChildViews({
                    'ItemDetails.Options': {
                        'Wishlist.Icon': {
                            childViewIndex: 10,
                            childViewConstructor: function () {
                                return new whislistsView({
                                    container: container,
                                    Model: this.model
                                });
                            }
                        }
                    }
                });
            } else {
                console.log("FacetsBrowseView component is not available.");
            }
        }
    };
});

};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["JJ.whislist.whislists.View","JJ.whislist.whislists.Model","JJ.whislist.whislists.SS2Model"];
try{
	extensions['JJ.whislist.1.0.0']();
	SC.addExtensionModule('JJ.whislist.whislists');
}
catch(error)
{
	console.error(error);
}

