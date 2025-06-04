import { Component, Host, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Use None to avoid styles being scoped to this component (global styles)
  host: {
    class: 'control from-host-decorator', // Add a class to the host element for styling
    '(click)': 'onClick()' // Recommend by angular team -> Listen to onclick events on the host element
  }
})
export class ControlComponent {
  //if we have a class that is used in the template, we can use HostBinding to add it to the host element
  @HostBinding('class') hostClass = 'control from-hostbinding-decorator'; // alternative way to add a class to the host

  // @HostListener('click')
  onClick() {
    // This method will be called when the host element is clicked
    console.log('Control clicked');
    // You can perform any action here, like updating a property or emitting an event
  }


  label = input.required<string>();
}
