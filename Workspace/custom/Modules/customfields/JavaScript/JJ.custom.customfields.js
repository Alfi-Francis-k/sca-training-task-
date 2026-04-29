define('JJ.custom.customfields', [
    'JJ.custom.ProductDetailsFull.View'
], function (
    ProductDetailsFullViewExtension
) {
    'use strict';

    return {
        mountToApp: function (container) {
            // Loading the override method
            ProductDetailsFullViewExtension.loadExtension();
        }
    };
});