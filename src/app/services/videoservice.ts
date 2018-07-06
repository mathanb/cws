import { Injectable } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Injectable()
export class Videoservice {

  youtubeUrl = "https://www.youtube.com/embed/iHhcHTlGtRs";
  

  constructor() {}
  
  getVideoURL() {
    return this.youtubeUrl;
  }
}
