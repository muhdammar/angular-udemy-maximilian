import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserInputComponent } from "./user-input.component";

@NgModule({
    declarations: [UserInputComponent],//declaring the component to be used in the module
    imports: [FormsModule],
    exports: [UserInputComponent]//exporting the component to be used in other modules
})
export class UserInputModule { }