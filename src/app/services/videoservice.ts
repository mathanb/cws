import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmbedVideoService } from 'ngx-embed-video';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations:[] ,
  providers: [Videoservice]
})
@Injectable()
export class Videoservice {

  youtubeUrl = "https://www.youtube.com/embed/iHhcHTlGtRs";
  
  constructor(private http: HttpClient) {}
  
  getVideoURL() {
    return this.youtubeUrl;
  }
}
