import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); // Assuming you want to use this directive with a template reference
  private viewContainerRef = inject(ViewContainerRef); // Inject ViewContainerRef to manage the view
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef); // Create the view if the condition matches
      }
      else {
        this.viewContainerRef.clear(); // Clear the view if the condition does not match
      }
    })
   }

}
