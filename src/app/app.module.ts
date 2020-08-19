import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingpageComponent,
    PartenairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
