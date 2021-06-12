import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Chip } from "./chip";

import { CHIPS } from "./mock-chips";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.sass']
})
export class ContactInfoComponent implements OnInit {

  title: String;
  chips: Chip[];

  constructor(private sanitizer: DomSanitizer) {
    this.title = "Contact Details";
    this.chips = CHIPS;
  }

  ngOnInit(): void {
  }

  pngSrcFromBase64(base64Val: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64,' + base64Val
    )
  }

}
