import { NgModule } from '@angular/core';
import { PaymentServiceClient } from '../services/paymentserviceclient.service';
import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export interface DialogData {
  donationFrequency: string;
  donationAmount: string;
}

@NgModule({
  imports: [
    
    MatDialogRef,
    MatDialog,
    FormsModule,    // required for the Material Form tags to work
    FormGroup,
    FormControl,
    FormBuilder,
    Validators,
    ReactiveFormsModule, // required for the Material Form tags to work
    HttpClientModule
  ],
  exports: [
    MatDialogRef,
    MatDialog,
    FormsModule,    // required for the Material Form tags to work
    FormGroup,
     FormControl,
    FormBuilder,
    Validators,
    ReactiveFormsModule, // required for the Material Form tags to work
    HttpClientModule,
  ],
  declarations: [],
  providers: [PaymentServiceClient]
})

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component2.css', './donate.component.css']
})
export class DonateComponent implements OnInit {
  
  
  serviceResponse;
  donationFrequency;
  donationAmount;
  isCardPage = true;
  isAddressPage = false;
  
  isLinear = false;
  paymentForm: FormGroup;
  displayResult = false;
   result = "";
  


  /**
   * constructor
   */
  constructor(private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DonateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public paymentService: PaymentServiceClient) {
    
    this.donationFrequency = data.donationFrequency;
    this.donationAmount = data.donationAmount;
    
    console.log("Donation Frequency is " + this.donationFrequency + " Amount is " + this.donationAmount);
   
    this.paymentForm = new FormGroup({
      amountToPay: new FormControl(),
      description: new FormControl(),
      nameOnCard: new FormControl(),
      cardNumber: new FormControl(),
      expiry: new FormControl(),
      cvc: new FormControl(),
      email: new FormControl(),
      addressLine1: new FormControl(),
      addressLine2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postCode: new FormControl(),
      country: new FormControl()
      });
    
    this.paymentForm.setValue({
      amountToPay:this.donationAmount,
      description:this.donationFrequency,
      nameOnCard: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
      email:'',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postCode: '',
      country: ''
      });
    
  }

  /**
   * called by dialog
   * .0
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * called when class is instantiated.
   */
  ngOnInit() {
    
  }
  
 
  nextPage() {
    this.isCardPage = false;
    this.isAddressPage = true;
  }
  
  prevPage() {
    this.isCardPage = true;
    this.isAddressPage = false;
  }  
  
   public onClickSubmit(value) {
    var params = value.amountToPay + "/" + value.description + "/" + value.nameOnCard + "/" +  value.cardNumber + "/" + value.expiry + "/" + value.cvc +
     "/" + value.email + "/" + value.addressLine1 + "/" + value.addressLine2 + "/" + value.city + "/" + value.state + "/" + value.postCode + "/" + value.country + "/" + "AUD" ;
       try {
      this.paymentService.sendPayment(params)
        .subscribe(resp => {
          console.log(resp, "res");
          this.serviceResponse = resp;
           this.displayResult = true;
      this.result = this.serviceResponse.result;
        },
        error => {
          console.log(error, "error");
        });
      
    } catch (e) {
         this.result = "Payment Failed. Please try after sometime.";
    }
   }
  
}





