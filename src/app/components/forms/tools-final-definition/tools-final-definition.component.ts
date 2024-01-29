import { Component, OnInit } from '@angular/core';
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
export class ToolsFinalDefinitionComponent implements OnInit{

  constructor(
    private formBuilder : FormBuilder, 
    private measurementToolService: MeasurementToolService,
    private toolsService: ToolsService,
    private toolsFinalDefinitionService: ToolsFinalDefinitionService
  ) { }

  tools = this.toolsService.getTools();
  measurementTools = this.measurementToolService.getMeasurementTools();

  toolsFinalDefinitions = this.toolsFinalDefinitionService.getToolsFinalDefinition();

  ngOnInit(): void {
    this.toolsFinalDefinitionService.toolsFinalDefinitionListener.subscribe(toolsFinalDefinition => {
      this.toolsFinalDefinitions = toolsFinalDefinition;
    });
  }

  toolsFinalDefinitionForm = this.formBuilder.group({
    toolId: [0],
    measurementToolId: [0],
    resolution: [0],
    iso: [false],
  });

  onSelectionChanged(event: any){
    console.log(event.value);
    this.measurementToolService.getMeasurementTools().forEach(measurementTool => console.log(measurementTool.measurementField?.toolId));
    
    this.measurementTools = this.measurementToolService.getMeasurementTools().filter(measurementTool => measurementTool.measurementField?.tool?.id == event.value);
  }

  onSubmit(){
    this.toolsFinalDefinitionService.addToolFinalDefinition(
      new ToolsFinalDefinition(
      this.toolsFinalDefinitionForm.value.measurementToolId, 
      this.toolsFinalDefinitionForm.value.resolution, 
      this.toolsFinalDefinitionForm.value.iso)
    );
    console.log(this.toolsFinalDefinitionService.getToolsFinalDefinition());
    this.toolsFinalDefinitionForm.reset();
  }
}
