import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app.header.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppDirectiveComponent } from './directive/app.directive.component';
import { AppCustomersComponent } from './customers/app.customers.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppDirectiveComponent,
    AppCustomersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
