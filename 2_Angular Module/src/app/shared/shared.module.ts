import { NgModule } from "@angular/core";

import { CardComponent } from "./card/card.component";
@NgModule({
  declarations: [CardComponent],//declaring the component to be used in the module
  exports: [CardComponent]//exporting the component to be used in other modules
})
export class SharedModule { }