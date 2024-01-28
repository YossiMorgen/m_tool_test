import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeasurementTool } from 'src/app/models/measurement-tool';
import { MeasurementFieldService } from 'src/app/services/measurement-field.service';
import { MeasurementToolService } from 'src/app/services/measurement-tool.service';

@Component({
  selector: 'app-measurement-tool',
  templateUrl: './measurement-tool.component.html',
  styleUrls: ['./measurement-tool.component.css']
})
export class MeasurementToolComponent {
  constructor(
    private formBuilder : FormBuilder, 
    private measurementToolService: MeasurementToolService,
    private measurementFieldService: MeasurementFieldService
  ) { }

  measurementFields = this.measurementFieldService.getMeasurementsFields();

  measurementToolForm = this.formBuilder.group({
    name: [''],
    measurement_field_id: [0],
    minValue: [0],
    maxValue: [0],
    uncertainty: [0],
  });

  onSubmit(){
    this.measurementToolService.addMeasurementTool(
      new MeasurementTool(this.measurementToolForm.value.name, 
      this.measurementToolForm.value.measurement_field_id, 
      this.measurementToolForm.value.minValue, 
      this.measurementToolForm.value.maxValue, 
      this.measurementToolForm.value.uncertainty)
    );
    console.log(this.measurementToolService.getMeasurementTools());
    this.measurementToolForm.reset();
  }


}
