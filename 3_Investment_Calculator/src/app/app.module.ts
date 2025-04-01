import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InvestmentResultsComponent], // Declare components that belong to this module
    imports: [BrowserModule, UserInputModule], // BrowserModule got CurrencyPipe module inside it
    bootstrap: [AppComponent], // The root component that Angular creates and inserts into the index.html host web page
})
export class AppModule {
  // This is the root module of the Angular application.
  // It imports necessary modules and declares components.
  // The AppComponent is the main component that bootstraps the application.


}