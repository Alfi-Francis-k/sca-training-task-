define('contactform.Router', [
  'Backbone',
  //'contactformm.View'
  'JJ.contactforms.contactformm.View',
], function (
  Backbone,
  contactformmView
) {
  'use strict';

  return Backbone.Router.extend({

    routes: {
      'contact': 'showContactForm'
    },

    initialize: function (options) {
      this.application = options.application;
    },

    showContactForm: function () {

      var view = new contactformmView({
        application: this.application
      });

      view.showContent();
    }

  });
});