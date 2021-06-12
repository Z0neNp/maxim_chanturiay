import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { SoftwareTool } from "./software-tool";

import { TOOLS } from "./mock-sw-tools";

@Component({
  selector: 'app-enterprise-experience',
  templateUrl: './enterprise-experience.component.html',
  styleUrls: ['./enterprise-experience.component.sass']
})
export class EnterpriseExperienceComponent implements OnInit {

  title: String;
  tools: SoftwareTool[];

  constructor(private sanitizer: DomSanitizer) {
    this.title = "Enterprise Experience";
    this.tools = TOOLS;
  }

  ngOnInit(): void {
  }

  pngSrcFromBase64(base64Val: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64,' + base64Val
    )
  }

}
