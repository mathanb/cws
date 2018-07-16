import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';

export interface DialogData {
  donationFrequency: string;
  donationAmount: string;
}

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component2.css', './donate.component.css']
})
export class DonateComponent implements OnInit {

  donationFrequency;
  donationAmount;
  isCardPage = true;
  isAddressPage = false;
  
  isLinear = false;
  paymentForm: FormGroup;

  


  /**
   * constructor
   */
  constructor(private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DonateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    
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
      addressLine1: new FormControl(),
      addressLine2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postCode: new FormControl(),
      country: new FormControl()
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
   alert(value.amountToPay + value.description + value.nameOnCard + value.cardNumber + value.expiry + value.cvc + value.addressLine1 + value.addressLine2 + value.city + value.state + value.postCode + value.country);
   }
  
}





