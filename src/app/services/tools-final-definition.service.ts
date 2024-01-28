import { Injectable } from '@angular/core';
import { ToolsFinalDefinition } from '../models/tools-final-definition';
import { ToolsService } from './tools.service';
import { MeasurementToolService } from './measurement-tool.service';

@Injectable({
  providedIn: 'root'
})
export class ToolsFinalDefinitionService {

  public toolsFinalDefinition: ToolsFinalDefinition[] = [
    new ToolsFinalDefinition(1, 1, 1, true),
    new ToolsFinalDefinition(1, 2, 2, true),
    new ToolsFinalDefinition(1, 3, 3, false),
    new ToolsFinalDefinition(1, 4, 4, false)
  ];

  constructor(private toolsService: ToolsService, private measurementToolService: MeasurementToolService) {
    let id = 0
    this.toolsFinalDefinition.forEach(toolFinalDefinition => {
      toolFinalDefinition.id = id++;
      toolFinalDefinition.tool = this.toolsService.getTool(toolFinalDefinition.toolId);
      toolFinalDefinition.measurementTool = this.measurementToolService.getMeasurementTool(toolFinalDefinition.measurementToolId);
    });
  }

  getToolsFinalDefinition(): ToolsFinalDefinition[] {
    return this.toolsFinalDefinition;
  }

  getToolFinalDefinition(id: number): ToolsFinalDefinition {
    return this.toolsFinalDefinition.find(toolFinalDefinition => toolFinalDefinition.id === id);
  }

  addToolFinalDefinition(toolFinalDefinition: ToolsFinalDefinition): void {
    toolFinalDefinition.id = this.toolsFinalDefinition[this.toolsFinalDefinition.length - 1].id + 1;
    toolFinalDefinition.tool = this.toolsService.getTool(toolFinalDefinition.toolId);
    toolFinalDefinition.measurementTool = this.measurementToolService.getMeasurementTool(toolFinalDefinition.measurementToolId);
    this.toolsFinalDefinition.push(toolFinalDefinition);
  }
}
