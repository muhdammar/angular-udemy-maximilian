import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]', // This directive will be applied to anchor tags with the appSafeLink attribute
    standalone: true, //only available in Angular 16+
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
}) 
export class SafeLinkDirective {
    // queryParam = input('myapp-docs-link'); //default value, if other component have this name too,
                                           //it will apply to that components too
                                           //<app-component appSafeLink queryParam="x">	Both the component and the directive get it

    queryParam = input('myapp-docs-link', {alias: 'appSafeLink'}); //alias is used to avoid conflict with other components           
    constructor() {
        console.log('SafeLinkDirective initialized');
    }

    onConfirmLeavePage(event: MouseEvent) {
       //Prevent the default behavior of the anchor tag
       const wantToLeave = window.confirm('Are you sure you want to leave this page?');
       if (wantToLeave) {
           const address = (event.target as HTMLAnchorElement).href;
           (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
           return;
       }    

       event.preventDefault(); // Prevent the default action of the anchor tag
    }

}