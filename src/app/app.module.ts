import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { DonateComponent } from './donate/donate.component';

const appRoutes: Routes = [
  { path: 'app-aboutus', component: AboutusComponent },
  { path: 'app-ourwork', component: OurworkComponent },
  { path: 'app-homepage', component: HomepageComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    HomepageComponent,
    AboutusComponent,
    FooterComponent,
    OurworkComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
