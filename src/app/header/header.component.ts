import { Component } from '@angular/core'
@Component({
   selector: 'app-header',
   standalone: true, //this is new features, before this angular use module based approach
   templateUrl:"./header.component.html",
   styleUrl:"./header.component.css"
  })
export class HeaderComponent {}