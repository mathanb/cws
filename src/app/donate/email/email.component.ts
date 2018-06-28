import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../../services/emailservice.service';

const  birthdayMsgTemplate = "birthday message fidjfoseifoiej foewjfiicoi";
const  marriageMsgTemplate = "dfhuriwhfiruhh ewowjfoiefj";
const  inMemoryOfMsgTemplate = "kdlkefoiejfjjj orkf[orwkfo";
const  otherMsgTemplate = "skrjfrjfomro ofjopskfork";

@NgModule({
  imports: [
    FormsModule,    //added here too
    FormGroup,
    ReactiveFormsModule, //added here too
    HttpClientModule
  ],
  declarations: [],
  providers: [EmailService]
})
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  emailForm: FormGroup;
  responseVal;
  emailTemplates = ["Birthday", "Marriage", "In Memory Of", "Others"]; 
  emailBodyMsg;
 
  
  constructor(public emailService: EmailService) {
    this.emailForm = new FormGroup({
      emailMessageTemplate: new FormControl(),
      toEmail: new FormControl(),
      ccEmail: new FormControl(),
      emailSubject: new FormControl(),
      emailMessage: new FormControl(this.emailBodyMsg)
      });
   }

  ngOnInit() {

  }

  changeMessageTemplate(event) {
    alert("value from the dropdown = " + event.value);
    if(event.value == this.emailTemplates[0]) { // Birthday
      this.emailForm.patchValue({emailMessage: birthdayMsgTemplate});
    } else if (event.value == this.emailTemplates[1]) { // Marriage
      this.emailForm.patchValue({emailMessage: marriageMsgTemplate});
    } else if (event.value == this.emailTemplates[2]) { // In Memory Of
      this.emailForm.patchValue({emailMessage: inMemoryOfMsgTemplate});
    } else { 
      this.emailForm.patchValue({emailMessage: otherMsgTemplate});
    }
    
    
  }
  
  onClickSubmit(value) {

    var params = value.toEmail + "/" + value.ccEmail + "/" + value.emailSubject + "/" + value.emailMessage;

    // this.urlVal = "http://localhost:8080/CWSServices/cwsemailservice/sendmail/"+value.toEmail+"/"+value.ccEmail+"/"+value.emailSubject+"/"+value.emailMessage;
    try {
      this.emailService.sendEmail(params)
        .subscribe(resp => {
          console.log(resp, "res");
          this.responseVal = resp
        },
        error => {
          console.log(error, "error");
        })
      
    } catch (e) {
      console.log(e);
    }

    
  }

}


