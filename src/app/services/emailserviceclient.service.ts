import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../config/appsettings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmailServiceClient {

  constructor(private http: HttpClient) {}
  /* Uses http.get() to load data from a single API endpoint */
  sendEmail(value) {
    return this.http.get(AppSettings.EMAIL_API_ENDPOINT + value);
  }
  
  sendSubscribeEmail(value) {
    return this.http.get(AppSettings.SUBSCRIBE_API_ENDPOINT + value);
  }
  
  contactUsEmail(value) {
    return this.http.get(AppSettings.CONTACTUSMAIL_API_ENDPOINT + value);
  }
}
