import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EnterpriseExperienceComponent } from './enterprise-experience/enterprise-experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    AboutMeComponent,
    EnterpriseExperienceComponent,
    PortfolioComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
