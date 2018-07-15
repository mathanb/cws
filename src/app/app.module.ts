import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatButtonModule,
   MatIconModule,MatStepperModule, MatButtonToggleModule } from '@angular/material';
import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import {  creditcards } from 'angular-credit-cards';


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
import { EmailComponent } from './fundraise/email/email.component';
import { EmailService } from './services/emailservice.service';


const appRoutes: Routes = [
  { path: 'app-aboutus', component: AboutusComponent },
  { path: 'app-ourwork', component: OurworkComponent },
  { path: 'app-homepage', component: HomepageComponent },
  { path: 'app-giveonce', component: GiveonceComponent },
  { path: 'app-givemonthly', component: GivemonthlyComponent },
  { path: 'app-sac', component: SponsoracommunityComponent },  
  { path: 'app-email', component: EmailComponent },
  { path: 'app-learntofundraise', component: LearntofundraiseComponent },
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
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatStepperModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )

  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    HttpClientModule
  ],
  entryComponents: [DonateComponent],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
