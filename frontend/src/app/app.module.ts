import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutMeComponent } from './about-me/about-me.component';
import { AbtMeRsmElDirective } from './about-me/rsm-el.directive';
import { AbtMeRsmElTitleDirective } from './about-me/rsm-el-title.directive';

import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactInfoRsmElDirective } from './contact-info/rsm-el.directive';
import { ContactInfoRsmElTitleDirective } from './contact-info/rsm-el-title.directive';

import { EducationComponent } from './education/education.component';
import { EducationRsmElDirective } from './education/rsm-el.directive';
import { EducationRsmElTitleDirective } from './education/rsm-el-title.directive';

import { EnterpriseExperienceComponent } from './enterprise-experience/enterprise-experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AbtMeRsmElDirective,
    AbtMeRsmElTitleDirective,
    ContactInfoComponent,
    ContactInfoRsmElDirective,
    ContactInfoRsmElTitleDirective,
    EducationComponent,
    EducationRsmElTitleDirective,
    EducationRsmElDirective,
    EnterpriseExperienceComponent,
    PortfolioComponent,
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
