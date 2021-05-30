import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  public title: String;
  
  constructor() {
    this.title = "About Me";
  }

  ngOnInit(): void {
  }

}
