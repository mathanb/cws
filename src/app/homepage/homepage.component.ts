import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AppSettings } from '../config/appsettings';
import { EmailService } from '../services/emailservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  result: any;
  displayResult: boolean;
  serviceResponse;
  sEmail;
  videoUrl: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer, private emailService: EmailService) { 
    this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl(AppSettings.HOMEPAGE_OUR_STORY_VIDEO);
  }

  
  ngOnInit() {
  }

  public subscriptionEmail(value) {
    var params = value.subscriptionEmailId;
    try {
      this.emailService.sendSubscribeEmail(params)
        .subscribe(resp => {
          console.log(resp, "res");
          this.serviceResponse = resp
        },
        error => {
          console.log(error, "error");
        });
      this.displayResult = true;
      this.result = this.serviceResponse.result;
    } catch (e) {
      console.log(e);
      this.result = "Email Failed. Please try after sometime.";
    }
  } 
  
}
