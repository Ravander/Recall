import { Component, OnInit } from '@angular/core';

import { Car } from "../car";
import { VehicleService } from "../vehicle.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  car: Car;
  cars: Car[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.car = this.getCar("ABC-123");
    this.cars = this.getCars();
  }

  getCar(license: string): Car {
    return this.vehicleService.getVehicle(license);
  }

  getCars(): Car[] {
    return this.vehicleService.getVehicles();
  }

  onClick(license: string) {
    console.log(license);
    this.car = this.getCar(license); 
  }

}
