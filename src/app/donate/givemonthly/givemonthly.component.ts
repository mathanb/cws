import { DonateComponent } from '../donate.component';
import { Component, OnInit, Inject, NgModule  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-givemonthly',
  templateUrl: './givemonthly.component.html',
  styleUrls: ['../donate.component.css']
})
export class GivemonthlyComponent implements OnInit {

  amount50 = 50;
  amount75 = 75;
  amount120 = 120;
  amount150 = 150;
  otherAmount = 0;
  donationAmount = this.amount50;
  
  isAmount50Selected: boolean = true;
  isAmount75Selected: boolean = false;
  isAmount120Selected: boolean = false;
  isAmount150Selected: boolean = false;
  isOtherAmountSelected: boolean = false;
  isOtherFixedAmountSelected: boolean = false;
  
  isAmount50UnSelected: boolean = false;
  isAmount75UnSelected: boolean = true;
  isAmount120UnSelected: boolean = true;
  isAmount150UnSelected: boolean = true;
  isOtherAmountUnSelected: boolean = true;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  setAmtBtnBgColor(event: any) {
    var id = event.currentTarget.id;
    this.setStyles(id);
  }

  setOtherAmount(otherAmount) {
    if(otherAmount > 0) {
       this.donationAmount = otherAmount;
    }
  }
  
  saveAmount(value) {
    if(value > 0) {
       this.donationAmount = value;
    }
    alert (this.donationAmount);
  }
  
  setStyles(id) {
    if (id == this.amount50) {
      this.isAmount50Selected = true;
      this.isAmount50UnSelected = false;
      this.donationAmount = this.amount50;
    } else {
      this.isAmount50Selected = false;
      this.isAmount50UnSelected = true;
    } 
    
    if (id == this.amount75) {
      this.isAmount75Selected = true;
      this.isAmount75UnSelected = false;
      this.donationAmount = this.amount75;
    } else {
      this.isAmount75Selected = false;
      this.isAmount75UnSelected = true;
    }
     
    if (id == this.amount120) {
      this.isAmount120Selected = true;
      this.isAmount120UnSelected = false;
      this.donationAmount = this.amount120;
    } else {
      this.isAmount120Selected = false;
      this.isAmount120UnSelected = true;
    }
    
    if (id == this.amount150) {
      this.isAmount150Selected = true;
      this.isAmount150UnSelected = false;
      this.donationAmount = this.amount150;
    } else {
      this.isAmount150Selected = false;
      this.isAmount150UnSelected = true;
    }
    
    if (id == this.otherAmount) {
      this.isOtherAmountSelected = true;
      this.isOtherAmountUnSelected = false;
    } else {
      this.isOtherAmountSelected = false;
      this.isOtherAmountUnSelected = true;
    }
  }
  
   openPaymentScreen(otherAmount): void {
    this.setOtherAmount(otherAmount);
    
    const dialogRef = this.dialog.open(DonateComponent, {
      width: '900px',
      height: '900px',
      data: {donationAmount: this.donationAmount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
