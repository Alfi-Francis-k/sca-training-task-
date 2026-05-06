// @module JJ.contactforms.contactformm
define("JJ.contactforms.contactformm.View", [
  "jj_contactforms_contactformm.tpl",
  "JJ.contactforms.contactformm.SS2Model",

  "Backbone",
  "jQuery",
], function (
  jj_contactforms_contactformm_tpl,
  contactformmSS2Model,
  Backbone,
) {
  "use strict";

  return Backbone.View.extend({
    template: jj_contactforms_contactformm_tpl,

    initialize: function () {
      this.formErrors = {};
      this.successMessage = false;
      this.model = new contactformmSS2Model();
    },

    events: {
      "click [data-action='submit-form']": "submitForm",
      "click [data-action='cancel-form']": "clearForm",
      "blur input": "validateField",
      "keyup input": "removeError",
    },

    // 🔹 Submit Form
    submitForm: function (e) {

      var self = this;
      e.preventDefault();

      var data = {
        firstname: this.$('[name="firstname"]').val(),
        lastname: this.$('[name="lastname"]').val(),
        phone: this.$('[name="phone"]').val(),
        email: this.$('[name="email"]').val(),
      };

      this.formValues = data;

      var errors = this.validateForm(data);

      if (Object.keys(errors).length > 0) {

        // Clear only error fields
        if (errors.firstname) {
          this.formValues.firstname = "";
        }

        if (errors.lastname) {
          this.formValues.lastname = "";
        }

        if (errors.phone) {
          this.formValues.phone = "";
        }

        if (errors.email) {
          this.formValues.email = "";
        }

        this.formErrors = errors;
        this.successMessage = false;
        this.render();
        return;


      }


      this.model.save(data)
        .done(function (response) {
          console.log('reponse from creating new request', response)
          if (response.success) {
            alert("Contact created successfully");
            self.clearForm();

          }
        })
        .fail(function (error) {


          var message = "Something went wrong";

          if (error.responseText) {
            try {
              var res = JSON.parse(error.responseText);
              message = res.message || message;
              //   customer=res.customerid
            } catch (e) { }
          }

          alert(message);
        });
    },


    // 🔹 Validation
    validateForm: function (data) {
      var errors = {};

      if (!data.firstname) {
        errors.firstname = "First name is required";
      } else if (!/^[A-Za-z\s]+$/.test(data.firstname)) {
        errors.firstname = "Only letters allowed";
      }

      if (!data.lastname) {
        errors.lastname = "Last name is required";
      }

      if (!data.email) {
        errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        errors.email = "Invalid email format";
      }

      if (!data.phone) {
        errors.phone = "Phone number is required";
      } else if (!/^[0-9]{10}$/.test(data.phone)) {
        errors.phone = "Enter valid 10 digit number";
      }

      return errors;
    },

    validateField: function (e) {

      var field = e.currentTarget.name;
      var value = this.$(e.currentTarget).val();

      // initialize formValues
      this.formValues = this.formValues || {};

      this.formValues[field] = value;

      // remove old error
      delete this.formErrors[field];

      // validation
      if (field === "firstname") {

        if (!value) {
          this.formErrors.firstname = "First name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          this.formErrors.firstname = "Only letters allowed";
        }

      }

      if (field === "lastname") {

        if (!value) {
          this.formErrors.lastname = "Last name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          this.formErrors.lastname = "Only letters allowed";
        }

      }

      if (field === "email") {

        if (!value) {
          this.formErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          this.formErrors.email = "Invalid email format";
        }

      }

      if (field === "phone") {

        if (!value) {
          this.formErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(value)) {
          this.formErrors.phone = "Enter valid 10 digit number";
        }

      }

      this.render();
    },


    removeError: function (e) {

      var field = e.currentTarget.name;

      if (this.formErrors[field]) {
        delete this.formErrors[field];
        this.render();
      }
    },

    clearForm: function () {

      this.formValues = {
        firstname: "",
        lastname: "",
        phone: "",
        email: ""
      };

      this.formErrors = {};
      this.successMessage = false;

      this.render();
    },

    getContext: function () {
      return {
        pageHeader: "Contact Form",
        errors: this.formErrors,
        successMessage: this.successMessage,
        values: this.formValues || {}
      };
    },

  });
});
