{{#if showDeliverySection}}
  <section class="delivery-info-section" style="margin-top: 15px; padding: 15px; border: 1px solid #e3e3e3; border-radius: 4px;">
      <h4 style="margin-bottom: 10px;">Custom Delivery Details</h4>
      
      <!-- Custom Fields Displayed from Extensibility Component Context -->
      <p style="margin-bottom: 5px;">Expected Delivery: <strong>{{custitem_expected_delivery}}</strong></p>
      
      <!-- Input triggering "change" and "blur" events -->
      <div style="margin-top:10px;">
        <label style="display:block; margin-bottom:5px;">Delivery Note Instructions:</label>
        <input type="text" data-action="update-delivery-note" placeholder="Enter note (min 5 characters)" style="width:100%; padding: 8px; border: 1px solid #ccc;"/>
      </div>
      
      <!-- Button triggering "click" event -->
      {{#if showWarrantyInfo}}
         <button data-action="show-warranty-info" style="margin-top:15px; padding: 10px; background-color: #5dc6f0ff; color: white; border: none; border-radius: 3px; cursor: pointer;">
            View Warranty Info
         </button>
      {{/if}}
  </section>
{{/if}}