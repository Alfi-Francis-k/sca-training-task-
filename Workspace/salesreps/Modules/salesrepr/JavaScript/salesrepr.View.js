// @module JJ.salesreps.salesrepr
define('JJ.salesreps.salesrepr.View'
	, [
		'jj_salesreps_salesrepr.tpl'
		, 'JJ.salesreps.salesrepr.SS2Model'
		, 'Backbone'
	]
	, function (
		jj_salesreps_salesrepr_tpl
		, salesreprSS2Model
		, Backbone
	) {
		'use strict';

		return Backbone.View.extend({

			template: jj_salesreps_salesrepr_tpl

			, initialize: function (options) {
				this.model = new salesreprSS2Model();
				var self = this;
				this.isLoading = true;

				this.model.fetch().done(function () {
					self.isLoading = false;
					self.render(); // Final render with data
				}).fail(function (e) {
					self.isLoading = false;
					console.error("salesrepr fetch failed", e);
					self.render();
				});
			}
			, render: function() {
				if (this.isLoading) {
					return this; 
				}
				return Backbone.View.prototype.render.apply(this, arguments);
			}

			, getContext: function getContext() {
				return {
					isLoading: this.isLoading,
					showRepresentative: this.model.get('assigned') && !this.isLoading,
					
					name: this.model.get('name'),
					title: this.model.get('title'),
					comments: this.model.get('comments'),
					email: this.model.get('email'),
					phone: this.model.get('phone'),
					image: this.model.get('image'),
					meetingLink: this.model.get('meeting_link')
				};
			}
		});
	});