import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Position } from "./position";
import { POSITIONS } from "./mock-positions";

@Component({
  selector: 'app-enterprise-experience',
  templateUrl: './enterprise-experience.component.html',
  styleUrls: ['./enterprise-experience.component.sass']
})
export class EnterpriseExperienceComponent implements OnInit {

  title: String;
  positions: Position[];

  constructor(private sanitizer: DomSanitizer) {
    this.title = "Enterprise Experience";
    this.positions = POSITIONS;
  }

  ngOnInit(): void {
  }

  pngSrcFromBase64(base64Val: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64,' + base64Val
    )
  }

}
