import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { DonateComponent } from './donate/donate.component';
import { GiveonceComponent } from './donate/giveonce/giveonce.component';
import { GivemonthlyComponent } from './donate/givemonthly/givemonthly.component';
import { SponsoracommunityComponent } from './donate/sponsoracommunity/sponsoracommunity.component';
import { FundraiseComponent } from './fundraise/fundraise.component';
import { LearntofundraiseComponent } from './fundraise/learntofundraise/learntofundraise.component';
import { StartacampaignComponent } from './fundraise/startacampaign/startacampaign.component';
import { FindacampaignComponent } from './fundraise/findacampaign/findacampaign.component';
import { EmailComponent } from './donate/email/email.component';
import { EmailService } from './services/emailservice.service';


const appRoutes: Routes = [
  { path: 'app-aboutus', component: AboutusComponent },
  { path: 'app-ourwork', component: OurworkComponent },
  { path: 'app-homepage', component: HomepageComponent },
  { path: 'app-giveonce', component: GiveonceComponent },
  { path: 'app-givemonthly', component: GivemonthlyComponent },
  { path: 'app-email', component: EmailComponent },
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
    DonateComponent,
    GiveonceComponent,
    GivemonthlyComponent,
    SponsoracommunityComponent,
    FundraiseComponent,
    LearntofundraiseComponent,
    StartacampaignComponent,
    FindacampaignComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,     
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
