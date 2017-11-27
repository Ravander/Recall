import { Component, OnInit } from '@angular/core';
import { Car } from "../car";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  car: Car = {
    license: "ABC-123",
    nickname: "Chev 123",
    model: "Chevrolet, Cruze LT",
    year: 2017,
    lastAction: "21.8.2017",
    sumCost: 650
  };

  constructor() { }

  ngOnInit() {
  }

}
