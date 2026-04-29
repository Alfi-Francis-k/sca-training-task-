<div class="contact-form-container">

  <h2>{{pageHeader}}</h2>

  {{#if successMessage}}
    <div class="alert alert-success">
      Contact form submitted successfully!
    </div>
  {{/if}}

  <form class="contact-form">

    <!-- First Name -->
    <div class="form-group">
      <input type="text" name="firstname" placeholder='First Name ' class="form-control" />

      {{#if errors.firstname}}
        <small class="text-danger">{{errors.firstname}}</small>
      {{/if}}
    </div>

    <!-- Last Name -->
    <div class="form-group">
      <input type="text" name="lastname" placeholder='Last Name' class="form-control" />

      {{#if errors.lastname}}
        <small class="text-danger">{{errors.lastname}}</small>
      {{/if}}
    </div>

    <!-- Phone -->
    <div class="form-group">

      <input type="text" name="phone" placeholder='Phone Number' class="form-control" />

      {{#if errors.phone}}
        <small class="text-danger">{{errors.phone}}</small>
      {{/if}}
    </div>

    <!-- Email -->
    <div class="form-group">
      <input type="email" name="email" placeholder='Email'class="form-control" />

      {{#if errors.email}}
        <small class="text-danger">{{errors.email}}</small>
      {{/if}}
    </div>

    <!-- Buttons -->
 <div class="form-actions">

  <button type="button" class="button button-secondary" data-action="cancel-form">
    Cancel
  </button>

  <button type="submit" class="button button-primary" data-action='submit-form'>
    Submit
  </button>

</div>

  </form>
  {{#if successMessage}}
  <div class="alert alert-success">
    Your contact created successfully.
  </div>
{{/if}}

</div>