import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
import { LandingPageFooterComponent } from './landing-page-footer/landing-page-footer.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageHeaderComponent,
    LandingPageFooterComponent,
    AdminAuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
