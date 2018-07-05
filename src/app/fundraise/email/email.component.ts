import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from '../../services/emailservice.service';
import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';

const  birthdayMsgTemplate = "birthday message fidjfoseifoiej foewjfiicoi";
const  anniversaryMsgTemplate = "dfhuriwhfiruhh ewowjfoiefj";
const  otherMsgTemplate = "skrjfrjfomro ofjopskfork";

@NgModule({
  imports: [
    FormsModule,    // required for the Material Form tags to work
    FormGroup,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule, // required for the Material Form tags to work
    HttpClientModule
  ],
  exports: [
    FormsModule,    // required for the Material Form tags to work
    FormGroup,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule, // required for the Material Form tags to work
    HttpClientModule
  ],
  declarations: [],
  providers: [EmailService]
})
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['../fundraise.component.css']
})
export class EmailComponent implements OnInit {

  emailForm: FormGroup;
  serviceResponse;
  emailTemplates = ["Birthday", "Anniversary", "Others"]; 
  emailBodyMsg;
  displayResult = false;
  result = "";
  showSpinner: boolean = false;
  
  constructor(public emailService: EmailService) {
    this.emailForm = new FormGroup({
      emailMessageTemplate: new FormControl(),
      fullName: new FormControl(),
      occassionDate: new FormControl(),
      fromEmail: new FormControl(),
      toEmail: new FormControl(),
      emailSubject: new FormControl(),
      emailMessage: new FormControl(this.emailBodyMsg)
      });
   }

  ngOnInit() {

  }

  /**
   * Choose email message based on the template selected. 
   */
  public changeMessageTemplate(event) {

    if(event.value == this.emailTemplates[0]) { // Birthday
      this.emailForm.patchValue({emailMessage: birthdayMsgTemplate});
    } else if (event.value == this.emailTemplates[1]) { // Marriage
      this.emailForm.patchValue({emailMessage: anniversaryMsgTemplate});
    } else { 
      this.emailForm.patchValue({emailMessage: otherMsgTemplate}); //others
    }
  }
  
  /**
   * Call EmailService API to send emails. 
   */
  public onClickSubmit(value) {
    this.showSpinner = true;
    var params = value.fullName + "/" + value.occassionDate + "/" + value.fromEmail + "/" +  value.toEmail + "/" + value.emailSubject + "/" + value.emailMessage;
    try {
      this.emailService.sendEmail(params)
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
    
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

}


