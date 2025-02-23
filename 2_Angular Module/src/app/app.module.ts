import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DatePipe } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { CardComponent } from "./shared/card/card.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent, 
        UserComponent, 
        TasksComponent, 
        HeaderComponent,
        TaskComponent, 
        NewTaskComponent, 
        CardComponent], //can use for non standalone components
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, DatePipe], //can use for standalone components
})
export class AppModule {

}