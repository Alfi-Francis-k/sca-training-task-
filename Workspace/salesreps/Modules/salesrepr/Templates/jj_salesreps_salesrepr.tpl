{{#unless isLoading}}
    {{#if showRepresentative}}
        <div class="salesrepr-card">
            <div class="salesrepr-card-container">
                
                {{!-- Left side: Large circular image --}}
                <div class="salesrepr-image-column">
                    {{#if image}}
                        <img src="{{image}}" alt="{{name}}" class="salesrepr-image-round">
                    {{else}}
                        <div class="salesrepr-image-placeholder-round">
                            <span>{{name.[0]}}</span>
                        </div>
                    {{/if}}
                </div>

                {{!-- Right side: Information and Action --}}
                <div class="salesrepr-info-column">
                    <h2 class="salesrepr-card-name">{{name}}</h2>
                    <p class="salesrepr-card-title">{{title}}</p>
                    
                    {{#if comments}}
                        <p class="salesrepr-card-bio">{{comments}}</p>
                    {{/if}}

                    <div class="salesrepr-card-contact-list">
                        <p><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:{{phone}}">{{phone}}</a></p>
                        {{#if meetingLink}}
                            <p><strong>LinkedIn:</strong> <a href="{{meetingLink}}" target="_blank">Connect with {{name}}</a></p>
                        {{/if}}
                    </div>

                    {{#if meetingLink}}
                        <div class="salesrepr-card-button-wrapper">
                            <a href="{{meetingLink}}" class="salesrepr-card-green-button" target="_blank">
                                Schedule a Meeting
                            </a>
                        </div>
                    {{/if}}
                </div>

            </div>
        </div>
    {{else}}
        <div class="salesrepr-unavailable">
            <p>{{translate 'Your representative information is currently unavailable.'}}</p>
        </div>
    {{/if}}
{{/unless}}