import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutMeComponent } from './about-me/about-me.component';
import { AbtMeRsmElDirective } from './about-me/rsm-el.directive';
import { AbtMeRsmElTitleDirective } from './about-me/rsm-el-title.directive';

import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EnterpriseExperienceComponent } from './enterprise-experience/enterprise-experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AbtMeRsmElDirective,
    AbtMeRsmElTitleDirective,
    ContactInfoComponent,
    EnterpriseExperienceComponent,
    PortfolioComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
