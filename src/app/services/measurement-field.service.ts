import { Injectable } from '@angular/core';
import { MeasurementField } from '../models/measurement-field';
import { ToolsService } from './tools.service';
import { MeasurementUnitService } from './measurement-unit.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementFieldService {

  public measurementsFields: MeasurementField[] = [
    new MeasurementField('Campo de Medición 1', 1, 1, 3, 1, 1),
    new MeasurementField('Campo de Medición 2', 1, 1, 3, 2, 2),
    new MeasurementField('Campo de Medición 3', 1, 1, 3, 3, 3),
    new MeasurementField('Campo de Medición 4', 1, 1, 3, 4, 4)
  ];

  constructor(private measurementUnitService: MeasurementUnitService, private toolsService: ToolsService) {
    let id = 0;
    this.measurementsFields.forEach(measurementField => {
      measurementField.id = id++;
      measurementField.tool = this.toolsService.getTool(measurementField.toolId);
      measurementField.measurementUnit = this.measurementUnitService.getMeasurementUnit(measurementField.measurementUnitId);
    });
  }

  getMeasurementsFields(): MeasurementField[] {
    return this.measurementsFields;
  }

  getMeasurementField(id: number): MeasurementField {
    return this.measurementsFields.find(measurementField => measurementField.id === id);
  }

  addMeasurementField(measurementField: MeasurementField): void {
    measurementField.id = this.measurementsFields[this.measurementsFields.length - 1].id + 1;
    measurementField.measurementUnit = this.measurementUnitService.getMeasurementUnit(measurementField.measurementUnitId);
    this.measurementsFields.push(measurementField);
  }
}
