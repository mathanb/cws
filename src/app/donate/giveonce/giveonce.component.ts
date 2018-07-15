import { DonateComponent } from '../donate.component';
import { Component, OnInit, Inject, NgModule } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

const DONATE_ONCE = "Donate Once";
const DONATE_MONTHLY = "Donate Monthly";

@Component({
  selector: 'app-giveonce',
  templateUrl: './giveonce.component.html',
  styleUrls: ['../donate.component.css']
})
export class GiveonceComponent implements OnInit {
  
  amount50 = 50;
  amount75 = 75;
  amount120 = 120;
  amount150 = 150;
  otherAmount = 0;
  donationAmount = this.amount50;
  donationFrequency = DONATE_ONCE;
  
  isGiveOnceSelected: boolean = true;
  isMonthlySelected: boolean = false;
  
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
  
  constructor(public dialog: MatDialog) {}
  
  ngOnInit() {
  }
  
  setGiveOnceBgColor() {
    this.isGiveOnceSelected = true;
    this.isMonthlySelected = false;
    this.donationFrequency = DONATE_ONCE;
  }

  setGiveMonthlyBgColor() {
    this.isMonthlySelected = true;
    this.isGiveOnceSelected = false;
    this.donationFrequency = DONATE_MONTHLY;
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
  
  /**
   * opens dialog window to capture payment details.
   */
  openPaymentScreen(otherAmount): void {
    this.setOtherAmount(otherAmount);
    
    const dialogRef = this.dialog.open(DonateComponent, {
      width: '900px',
      height: '900px',
      data: {donationFrequency: this.donationFrequency, donationAmount: this.donationAmount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}




