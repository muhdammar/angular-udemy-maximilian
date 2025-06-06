import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, Host, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
    console.log(this.el); // Access the host element using ElementRef
    console.log(this.control()  ); // Access the input element inside the control component
  }


  label = input.required<string>();
  private el = inject(ElementRef); // Inject the ElementRef to access the host element

  //@ContentChild('input') private control?:ElementRef<HTMLInputElement  | HTMLTextAreaElement>; // Access the input element inside the control component

  // Note: ContentChild is used to access elements projected into this component's template
  // In Angular 17+, you can use the `contentChild` function for required content child (signal way)
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); // Angular 17+ syntax for required content child (signal way)
  ngOnInit() {
    console.log("On Init");
    console.log(this.control());
  }
  constructor() {
    // afterRender will trigger for every single component in application rendered
    afterRender(() => {
      console.log('After render - DOM is now available');
    });

    // Use afterNextRender to run code after the next rendering cycle
    afterNextRender(() => {
      console.log('After next render - runs after the next change detection cycle');
    });
  }
   ngAfterContentInit(): void {
    console.log("ngAfterContentInit");

    //signal way to access the form element
    console.log(this.control());
  }

}
