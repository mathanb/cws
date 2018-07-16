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
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  donationFrequency;
  donationAmount;
  
  isLinear = false;
  addressFormGroup: FormGroup;
  cardFormGroup: FormGroup;
  
  cardForm = {
    amountToPay: '',
    description: '',
    nameOnCard: '',
    cardNumber: '',
    expiry: '',
    cvc:'',
    email: ''
  };
  
  addressForm = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postCode:'',
    country:'',
  };
  
  countries = ["india", "australia", "england"];

  /**
   * constructor
   */
  constructor(private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DonateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    
    this.donationFrequency = data.donationFrequency;
    this.donationAmount = data.donationAmount;
    
    console.log("Donation Frequency is " + this.donationFrequency + " Amount is " + this.donationAmount);
   
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
    this.addressFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.cardFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
   public onClickSubmit(value) {
console.log(this.cardForm.amountToPay + "   " + this.cardForm.description + "   " + this.cardForm.nameOnCard + "   " + this.cardForm.cardNumber + "    " + this.cardForm.cvc + "   " + this.cardForm.email + "   " + this.addressForm.addressLine1 + "   " + this.addressForm.addressLine2 + "   " + this.addressForm.city + "   " + this.addressForm.state + "   " + this.addressForm.postCode + "   " + this.addressForm.country);
             }
  
}
  // create a new method which should be called on click submit button.




