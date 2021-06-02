import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  title: String;
  
  constructor() {
    this.title = "Portfolio";
  }

  ngOnInit(): void {
  }

}
