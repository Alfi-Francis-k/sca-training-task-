// Model.js
// -----------------------
// @module Case
define("JJ.salesreps.salesrepr.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/salesrepr/SuiteScript2/salesrepr.Service.ss"
            ),
            true
        )
});
});
