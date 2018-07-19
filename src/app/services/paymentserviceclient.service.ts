import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../config/appsettings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PaymentServiceClient {

  constructor(private http: HttpClient) { }

  sendPayment(value) {
    return this.http.get(AppSettings.PAYMENT_API_ENDPOINT + value);
  }
}
