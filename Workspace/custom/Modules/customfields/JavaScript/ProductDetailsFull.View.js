define('JJ.custom.ProductDetailsFull.View', [
    'ProductDetails.Full.View',
    'jj_product_details_full.tpl',
    'underscore',
    'jQuery'
], function (
    ProductDetailsFullView,
    product_details_full_tpl,
    _,
    $
) {
    'use strict';

    return {
        loadExtension: function () {

            ProductDetailsFullView.prototype.template = product_details_full_tpl;

            ProductDetailsFullView.prototype.events = _.extend({}, ProductDetailsFullView.prototype.events, {
                'click [data-action="show-warranty-info"]': 'showWarrantyInfo',
                'change [data-action="update-delivery-note"]': 'validateDeliveryNote',
                'blur [data-action="update-delivery-note"]': 'blurDeliveryNote'
            });


            _.extend(ProductDetailsFullView.prototype, {
                showWarrantyInfo: function (e) {
                    e.preventDefault();
                    alert('Warranty Info: This item includes a 1-year manufacturer warranty.');
                },

                validateDeliveryNote: function (e) {
                    var val = $(e.currentTarget).val();
                    if (val && val.length < 5) {
                        alert('Please enter a more detailed delivery note (at least 5 characters).');
                    }
                },

                blurDeliveryNote: function (e) {
                    console.log('Delivery note input blurred.', $(e.currentTarget).val());
                }
            });


            ProductDetailsFullView.prototype.getContext = _.wrap(ProductDetailsFullView.prototype.getContext, function (originalGetContext) {

                var context = originalGetContext.apply(this, _.toArray(arguments).slice(1));

                var item = this.model.get('item');

                context.custitem_expected_delivery = (item && item.get('custitemexpected_delivery')) || '3-5 Business Days';
                context.custcol_special_note = 'No special notes available.';

                context.showWarrantyInfo = true;
                context.showDeliverySection = true;

                return context;
            });
        }
    };
});
