import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]', // This directive will be applied to anchor tags with the appSafeLink attribute
    standalone: true, //only available in Angular 16+
}) 
export class SafeLinkDirective {
    constructor() {
        console.log('SafeLinkDirective initialized');
    }

}