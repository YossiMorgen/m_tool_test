import { Injectable } from '@angular/core';
import { MeasurementUnit } from '../models/measurement-unit';

@Injectable({
  providedIn: 'root'
})
export class MeasurementUnitService {

  public measurementUnits: MeasurementUnit[] = [
    new MeasurementUnit('Unidad de Medición 1'),
    new MeasurementUnit('Unidad de Medición 2'),
    new MeasurementUnit('Unidad de Medición 3'),
    new MeasurementUnit('Unidad de Medición 4')
  ];

  constructor() {
    let id = 0;
    this.measurementUnits.forEach(measurementUnit => {
      measurementUnit.id = id++;
    });
   }

  getMeasurementUnits(): MeasurementUnit[] {
    return this.measurementUnits;
  }

  getMeasurementUnit(id: number): MeasurementUnit {
    return this.measurementUnits.find(measurementUnit => measurementUnit.id === id);
  }

  addMeasurementUnit(measurementUnit: MeasurementUnit): void {
    measurementUnit.id = this.measurementUnits[this.measurementUnits.length - 1].id + 1;
    this.measurementUnits.push(measurementUnit);
  }
}
