{{!--  Edited for Horizon  --}}
<section class="facets-browse-category-heading-list-header  {{#if hasBanner}}facets-browse-category-heading-list-header-with-image{{/if}}">
{{#if hasBanner}}
    <div class="category-pusher"></div>
	<div class="facets-browse-category-heading-main-image">
		<img src="{{banner}}" alt="{{pageheading}}" />
	</div>
{{/if}}
{{#if description}}
	<div class="facets-browse-category-heading-main-description">
		<h1>{{pageheading}}</h1>
		<p>{{{description}}}</p>
	</div>
</section>
{{/if}}

{{!----
Use the following context variables when customizing this template:

	name (String)
	banner (String)
	description (String)
	pageheading (String)
	hasBanner (Boolean)
	showDescription (Boolean)

----}}

