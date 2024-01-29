import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeasurementField } from 'src/app/models/measurement-field';
import { MeasurementFieldService } from 'src/app/services/measurement-field.service';
import { MeasurementUnitService } from 'src/app/services/measurement-unit.service';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-measurement-field',
  templateUrl: './measurement-field.component.html',
  styleUrls: ['./measurement-field.component.css']
})
export class MeasurementFieldComponent {
  constructor(
    private formBuilder : FormBuilder, 
    private measurementUnitService: MeasurementUnitService,
    private measurementFieldService: MeasurementFieldService,
    private toolsService: ToolsService
  ) { }

  measurementUnits = this.measurementUnitService.getMeasurementUnits();
  tools = this.toolsService.getTools();

  MeasurementFieldForm = this.formBuilder.group({
    name: [''],
    toolId: [0],
    minValue: [0],
    maxValue: [0],
    uncertainty: [0],
    measurement_unit_id: [0],
  });

  onSubmit(){
    this.measurementFieldService.addMeasurementField(
      new MeasurementField(this.MeasurementFieldForm.value.name, 
      this.MeasurementFieldForm.value.toolId,
      this.MeasurementFieldForm.value.minValue, 
      this.MeasurementFieldForm.value.maxValue, 
      this.MeasurementFieldForm.value.measurement_unit_id, 
      this.MeasurementFieldForm.value.uncertainty)
    );
    console.log(this.measurementFieldService.getMeasurementsFields());
    this.MeasurementFieldForm.reset();
  }
}
