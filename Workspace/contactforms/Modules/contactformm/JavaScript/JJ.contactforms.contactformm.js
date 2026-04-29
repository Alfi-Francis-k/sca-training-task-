define("JJ.contactforms.contactformm", [
  "contactform.Router",
  "MyAccountMenu",
], function (contactformRouter, MyAccountMenu) {
  "use strict";

  return {
    mountToApp: function (container) {
      var myAccountMenu = container.getComponent("MyAccountMenu");

      var contactGroup = {
        id: "contact_group",
        name: "Contact",
        index: 10,
      };

      if (myAccountMenu) {
        myAccountMenu.addGroup(contactGroup);

        var contactEntry = {
          id: "contact_form",
          groupid: "contact_group",
          name: "Contact Form",
          url: "contact",
          index: 1,
        };

        myAccountMenu.addGroupEntry(contactEntry);
      }

      // 🔹 Initialize Router
      return new contactformRouter({
        application: container,
      });
    },
  };
});
