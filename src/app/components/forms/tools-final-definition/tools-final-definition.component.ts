import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToolsFinalDefinition } from 'src/app/models/tools-final-definition';
import { MeasurementToolService } from 'src/app/services/measurement-tool.service';
import { ToolsFinalDefinitionService } from 'src/app/services/tools-final-definition.service';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-tools-final-definition',
  templateUrl: './tools-final-definition.component.html',
  styleUrls: ['./tools-final-definition.component.css']
})
export class ToolsFinalDefinitionComponent {

  constructor(
    private formBuilder : FormBuilder, 
    private measurementToolService: MeasurementToolService,
    private toolsService: ToolsService,
    private toolsFinalDefinitionService: ToolsFinalDefinitionService
  ) { }

  tools = this.toolsService.getTools();
  measurementTools = this.measurementToolService.getMeasurementTools();

  toolsFinalDefinitionForm = this.formBuilder.group({
    toolId: [0],
    measurementToolId: [0],
    resolution: [0],
    iso: [false],
  });

  onSubmit(){
    this.toolsFinalDefinitionService.addToolFinalDefinition(
      new ToolsFinalDefinition(this.toolsFinalDefinitionForm.value.toolId, 
      this.toolsFinalDefinitionForm.value.measurementToolId, 
      this.toolsFinalDefinitionForm.value.resolution, 
      this.toolsFinalDefinitionForm.value.iso)
    );
    console.log(this.toolsFinalDefinitionService.getToolsFinalDefinition());
    this.toolsFinalDefinitionForm.reset();
  }
}
