/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
define([
  'N/record',
  'N/runtime'
],function (record, runtime) {
    "use strict";
    return {
        service: function (ctx) {

               ctx.response.addHeader({
                name: 'Content-Type',
                value: 'application/json'
            });
           try {
      // 🔹 Parse request body
      var data = JSON.parse(ctx.request.body || '{}');

      if (!data.firstname || !data.email) {
        throw new Error('First Name and Email are required');
      }


      var customerId = runtime.getCurrentUser().id;
    

      var contact = record.create({
        type: record.Type.CONTACT,
        isDynamic: true
      });
      contact.setValue({
      fieldId: 'entityid',
      value: data.firstname + ' ' + data.lastname
    });
      contact.setValue({
        fieldId: 'firstname',
        value: data.firstname
      });

      contact.setValue({
        fieldId: 'lastname',
        value: data.lastname || ''
      });

      contact.setValue({
        fieldId: 'phone',
        value: data.phone || ''
      });

      contact.setValue({
        fieldId: 'email',
        value: data.email
      });

      contact.setValue({
        fieldId: 'company',
        value: customerId
      });

      var contactId = contact.save();
  
      ctx.response.write(JSON.stringify({
        success: true,
        message: 'Your contact created successfully.',
        id: contactId
      }));

    } catch (e) {

      ctx.response.write(JSON.stringify({
        success: false,
        message: e.message || 'Something went wrong'
     
      }));
    }
  
        }}       
});
