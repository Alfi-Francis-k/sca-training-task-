/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 */
define(['N/runtime', 'N/search', 'N/log', 'N/file'], function (runtime, search, log, file) {
    "use strict";

    return {
        service: function (ctx) {

            var user = runtime.getCurrentUser();

            var response = {
                assigned: false,
                name: '',
                title: '',
                email: '',
                comments: '',
                phone: '',
                image: '',
                meeting_link: ''
            };

            ctx.response.addHeader({
                name: 'Content-Type',
                value: 'application/json'
            });

            if (user.id > 0) {
                try {

                    // Get Sales Rep from Customer
                    var customerData = search.lookupFields({
                        type: search.Type.CUSTOMER,
                        id: user.id,
                        columns: ['salesrep']
                    });

                    var salesRepId = null;

                    if (customerData.salesrep) {
                        if (Array.isArray(customerData.salesrep) && customerData.salesrep.length > 0) {
                            salesRepId = customerData.salesrep[0].value;
                        } else if (customerData.salesrep.value) {
                            salesRepId = customerData.salesrep.value;
                        }
                    }

                    log.debug('Sales Rep ID', salesRepId);

                    if (salesRepId) {

                        var employeeData = search.lookupFields({
                            type: search.Type.EMPLOYEE,
                            id: salesRepId,
                            columns: [
                                'entityid',
                                'job',
                                'email',
                                'phone',
                                'image',
                                'comments',
                                'custentity_jj_meeting_link'
                            ]
                        });

                        log.debug('Employee Data', employeeData);

                        if (employeeData) {

                            response.assigned = true;
                            response.name = employeeData.entityid || '';
                            response.email = employeeData.email || '';
                            response.phone = employeeData.phone || '';
                            response.comments = employeeData.comments || '';
                            response.meeting_link = employeeData.custentity_jj_meeting_link || '';

                            // Handle Job/Title safely
                            if (employeeData.job) {
                                if (Array.isArray(employeeData.job) && employeeData.job.length > 0) {
                                    response.title = employeeData.job[0].text || '';
                                } else if (employeeData.job.text) {
                                    response.title = employeeData.job.text;
                                } else {
                                    response.title = '';
                                }
                            } else {
                                response.title = '';
                            }

                            // Handle Image safely
                            if (employeeData.image) {
                                try {
                                    var imageId = null;

                                    if (Array.isArray(employeeData.image) && employeeData.image.length > 0) {
                                        imageId = employeeData.image[0].value;
                                    } else if (employeeData.image.value) {
                                        imageId = employeeData.image.value;
                                    }

                                    if (imageId) {
                                        var imageFile = file.load({ id: imageId });
                                        response.image = imageFile.url;
                                    }

                                } catch (imgErr) {
                                    log.debug('Image Load Fail', imgErr);
                                }
                            }
                        }
                    }

                } catch (e) {
                    log.error("Service Error", e);
                    response.error = e.message;
                }
            }

            ctx.response.write(JSON.stringify(response));
        }
    };
});