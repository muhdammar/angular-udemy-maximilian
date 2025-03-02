import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent, 
        UserComponent, 
        HeaderComponent,
    ], //can use for non standalone components
    bootstrap: [AppComponent], //we only have this for root module of the application
    imports: [BrowserModule, SharedModule, TasksModule], //can use for standalone components
})
export class AppModule {

}