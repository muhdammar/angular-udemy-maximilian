import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]', // This directive will be applied to anchor tags with the appSafeLink attribute
    standalone: true, //only available in Angular 16+
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
}) 
export class SafeLinkDirective {
    constructor() {
        console.log('SafeLinkDirective initialized');
    }

    onConfirmLeavePage(event: MouseEvent) {
        // Prevent the default behavior of the anchor tag
       const wantToLeave = window.confirm('Are you sure you want to leave this page?');
       if (wantToLeave) {
           return;
       }    

       event.preventDefault(); // Prevent the default action of the anchor tag
    }

}