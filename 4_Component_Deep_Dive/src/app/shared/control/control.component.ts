import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Use None to avoid styles being scoped to this component (global styles)
  host: {
    class: 'control', // Add a class to the host element for styling
  }
})
export class ControlComponent {
  label = input.required<string>();
}
