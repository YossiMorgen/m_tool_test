import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeasurementUnit } from 'src/app/models/measurement-unit';
import { MeasurementUnitService } from 'src/app/services/measurement-unit.service';

@Component({
  selector: 'app-measurement-unit',
  templateUrl: './measurement-unit.component.html',
  styleUrls: ['./measurement-unit.component.css']
})
export class MeasurementUnitComponent {
  
    constructor(private formBuilder : FormBuilder, private measurementUnitService: MeasurementUnitService) { }
  
    measurementUnitForm = this.formBuilder.group({
      symbol: ['']
    });
    onSubmit = () => {
      console.log(this.measurementUnitForm.value.symbol);
      
      this.measurementUnitService.addMeasurementUnit(new MeasurementUnit(this.measurementUnitForm.value.symbol));
      console.log(this.measurementUnitService.getMeasurementUnits());
      this.measurementUnitForm.reset();
    }
}
