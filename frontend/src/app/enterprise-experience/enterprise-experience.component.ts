import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise-experience',
  templateUrl: './enterprise-experience.component.html',
  styleUrls: ['./enterprise-experience.component.sass']
})
export class EnterpriseExperienceComponent implements OnInit {

  title: String;

  constructor() {
    this.title = "Enterprise Experience";
  }

  ngOnInit(): void {
  }

}
