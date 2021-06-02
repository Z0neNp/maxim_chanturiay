import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  title: String;

  constructor() {
    this.title = "Education";
  }

  ngOnInit(): void {
  }

}
