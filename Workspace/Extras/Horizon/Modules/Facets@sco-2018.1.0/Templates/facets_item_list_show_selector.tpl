{{!-- Edited for Horizon Theme --}}

<label for="" class="facets-item-list-show-label">Products Per Page</label>
<select data-type="navigator" class="facets-item-list-show-selector">
	{{#each options}}
	<option value="{{configOptionUrl}}" class="{{className}}" {{#if isSelected}} selected="" {{/if}} >{{name}}</option>
	{{/each}}
</select>




{{!----
Use the following context variables when customizing this template:

	options (Array)

----}}

