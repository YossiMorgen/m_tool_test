import { Injectable } from '@angular/core';
import { MeasurementTool } from '../models/measurement-tool';
import { MeasurementFieldService } from './measurement-field.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementToolService {

  public measurementTools: MeasurementTool[] = [
    new MeasurementTool('Herramienta de Medición 1', 1, 1, 1, 1),
    new MeasurementTool('Herramienta de Medición 2', 2, 2, 2, 2),
    new MeasurementTool('Herramienta de Medición 3', 3, 3, 3, 3),
    new MeasurementTool('Herramienta de Medición 4', 4, 4, 4, 4)
  ];

  constructor(private measurementFieldService: MeasurementFieldService ) {
    let id = 0;
    this.measurementTools.forEach(measurementTool => {
      measurementTool.id = id++;
      measurementTool.measurementField = this.measurementFieldService.getMeasurementField(measurementTool.measurementFieldId);
    });
  }

  getMeasurementTools(): MeasurementTool[] {
    return this.measurementTools;
  }

  getMeasurementTool(id: number): MeasurementTool {
    return this.measurementTools.find(measurementTool => measurementTool.id === id);
  }

  addMeasurementTool(measurementTool: MeasurementTool): void {
    measurementTool.id = this.measurementTools[this.measurementTools.length - 1].id + 1;
    measurementTool.measurementField = this.measurementFieldService.getMeasurementField(measurementTool.measurementFieldId);
    this.measurementTools.push(measurementTool);
  }
}
