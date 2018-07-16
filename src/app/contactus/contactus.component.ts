import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailServiceClient } from '../services/emailserviceclient.service';
import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';

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
  providers: []
})

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  contactusForm: FormGroup;
  serviceResponse;
  displayResult = false;
  _result = "";
  showSpinner: boolean = false;

  constructor(public emailService: EmailServiceClient) {
  this.contactusForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    
    });
   }

  ngOnInit() {
  }

  public onClickSubmit(value) {
    this.showSpinner = true;
    var params = value.name + "/" + value.phone + "/" + value.email + "/" + value.message;
    try {
      this.emailService.contactUsEmail(params)
        .subscribe(resp => {
          console.log(resp, "res");
          this.serviceResponse = resp;
          this.displayResult = true;
          this._result = this.serviceResponse.result;
        },
        error => {
          console.log(error, "error");
        });

    } catch (e) {
      this._result = "Email Failed. Please try after sometime.";
    }
    
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

  
}
