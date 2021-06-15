import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Icon } from "./icon";
import { PROFILE } from "./mock-profile";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  title: String;
  profile: Icon;
  
  constructor(private sanitizer: DomSanitizer) {
    this.title = "About Me";
    this.profile = PROFILE;
  }

  ngOnInit(): void {
  }

  pngSrcFromBase64(base64Val: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64,' + base64Val
    )
  }

}
