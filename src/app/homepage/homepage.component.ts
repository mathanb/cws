import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Videoservice } from '../services/videoservice';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  iframe_html: any;
  videoUrl: SafeResourceUrl;
  
  constructor(public embedVideo: Videoservice, private sanitizer: DomSanitizer) { 
    this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl(embedVideo.getVideoURL());
  }

  ngOnInit() {
  }

}
