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
