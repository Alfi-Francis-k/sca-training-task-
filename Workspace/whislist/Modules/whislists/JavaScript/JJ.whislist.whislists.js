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
