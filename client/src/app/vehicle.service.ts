import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Car } from "./car";
import { CARS } from "./vehicleData";

@Injectable()
export class VehicleService {

  constructor() { }

  addVehicle(car: Car): void {
    let i = 0;
  }

  getVehicle(license: string): Car {
    let selectedCar: Car;
    for (let i = 0; i < CARS.length; i++) {
      if (CARS[i].license == license) {
        selectedCar = CARS[i];
      }
    }
    return selectedCar;
  }
}
