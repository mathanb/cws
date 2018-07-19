import { DonateComponent } from '../donate.component';
import { Component, OnInit, Inject, NgModule  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-sponsoracommunity',
  templateUrl: './sponsoracommunity.component.html',
  styleUrls: ['../donate.component.css']
})
export class SponsoracommunityComponent implements OnInit {

   otherAmount = 0;
  donationAmount = this.otherAmount;
  
 
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  setOtherAmount(otherAmount) {
    if(otherAmount > 0) {
       this.otherAmount = otherAmount;
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
