import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.sass']
})
export class ContactInfoComponent implements OnInit {

  title: String;

  constructor() {
    this.title = "Contact Details";
  }

  ngOnInit(): void {
  }

}
