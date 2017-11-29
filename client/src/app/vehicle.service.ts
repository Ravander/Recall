import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Car } from "./car";
import { CARS } from "./vehicleData";

@Injectable()
export class VehicleService {

  private cars: Car[] = CARS;

  constructor() { }

  addVehicle(car: Car): void {
    this.cars.push(car);
  }

  getVehicle(license: string): Car {
    let selectedCar: Car;
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].license == license) {
        selectedCar = this.cars[i];
      }
    }
    return selectedCar;
  }

  getVehicles(): Car[] {
    return this.cars;
  }
}
