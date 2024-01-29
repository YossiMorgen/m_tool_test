import { Injectable } from '@angular/core';
import { ToolsFinalDefinition } from '../models/tools-final-definition';
import { ToolsService } from './tools.service';
import { MeasurementToolService } from './measurement-tool.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsFinalDefinitionService {

  public toolsFinalDefinition: ToolsFinalDefinition[] = [
    new ToolsFinalDefinition( 1, 1, true),
    new ToolsFinalDefinition( 2, 2, true),
    new ToolsFinalDefinition( 3, 3, false),
    new ToolsFinalDefinition( 4, 4, false)
  ];

  public toolsFinalDefinitionListener: Subject<ToolsFinalDefinition[]> = new Subject<ToolsFinalDefinition[]>();

  constructor(private toolsService: ToolsService, private measurementToolService: MeasurementToolService) {
    let id = 0
    this.toolsFinalDefinition.forEach(toolFinalDefinition => {
      toolFinalDefinition.id = id++;
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
    toolFinalDefinition.measurementTool = this.measurementToolService.getMeasurementTool(toolFinalDefinition.measurementToolId);
    this.toolsFinalDefinition.push(toolFinalDefinition);

    this.toolsFinalDefinitionListener.next(this.toolsFinalDefinition);
  }
}
