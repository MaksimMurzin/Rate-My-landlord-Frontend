import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RentalListComponent } from './rental-components/rental-list/rental-list.component';
import { RentalCardComponent } from './rental-components/rental-card/rental-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalListComponent,
    RentalCardComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
