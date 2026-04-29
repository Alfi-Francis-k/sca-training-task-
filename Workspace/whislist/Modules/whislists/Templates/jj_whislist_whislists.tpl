<style>
    /* ONLY hide the button when it is inside our custom heart dropdown */
    .wishlist-dropdown-container .product-list-control-button-wishlist,
    .wishlist-dropdown-container .product-list-control-button-move {
        display: none !important;
    }

    /* Style the dropdown menu to be clean */
    .wishlist-dropdown-container .product-list-control-dropdown {
        display: block !important;
        position: static !important;
        box-shadow: none !important;
        border: 1px solid #ccc !important;
        padding: 10px !important;
        border-radius: 4px !important;
    }
</style>

<div class="wishlist-integrated-container" style="position: relative; display: inline-block; width: 100%; text-align: center;">

    {{!-- 1. HEART ICON (VISIBLE UI) --}}
    <button 
        class="wishlist-icon-btn" 
        data-action="toggle-wishlist"
        style="background:none; border:none; cursor:pointer; font-size:32px; color:#e74c3c; outline:none;"
        title="{{#if inWishlist}}Remove from Wishlist{{else}}Add to Wishlist{{/if}}"
    >
        <span class="heart-symbol" style="transition: transform 0.2s ease;">
            {{#if inWishlist}}❤{{else}}♡{{/if}}
        </span>
    </button>

    {{!-- 2. HIDDEN NATIVE BUTTON (DO NOT REMOVE) --}}
    <div class="native-wishlist-trigger-wrapper"
         style="position:absolute; opacity:0; pointer-events:none; height:0; width:0; overflow:hidden;">

        {{#if isMoving}}
            <button 
                class="product-list-control-button-move"
                data-action="show-productlist-control"
                data-toggle="showFlyout"
                type="button">
                {{translate 'Move'}}
            </button>
        {{else}}
            <button 
                class="product-list-control-button-wishlist"
                data-action="show-productlist-control"
                data-toggle="showFlyout"
                type="button">
                {{translate 'Add to Wishlist'}}
            </button>
        {{/if}}

    </div>

    {{!-- 3. DROPDOWN / FLYOUT --}}
    <div class="wishlist-dropdown-container"
         style="position:absolute; top:100%; left:50%; transform:translateX(-50%); z-index:10000; background:white; min-width:220px;
         {{#if showMenu}}display:block;{{else}}display:none;{{/if}}">

        <div data-view="ProductListControl"></div>

    </div>

</div>