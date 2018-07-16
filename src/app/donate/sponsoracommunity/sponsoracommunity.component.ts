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

  donationAmount;
  donationFrequency = "Sponser a Community";
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
   
 openPaymentScreen(amount): void {

    this.donationAmount = amount;
   
    const dialogRef = this.dialog.open(DonateComponent, {
      width: '800px',
      height: '600px',
      data: {donationFrequency: this.donationFrequency, donationAmount: this.donationAmount}
    });

 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
