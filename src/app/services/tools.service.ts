import { Injectable } from '@angular/core';
import { Tools } from '../models/tools';
import { SubTechnologyService } from './sub-technology.service';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  public tools: Tools[] = [
    new Tools('Herramienta 1', 1, 1),
    new Tools('Herramienta 2', 2, 2),
    new Tools('Herramienta 3', 3, 3),
    new Tools('Herramienta 4', 4, 4)
  ];

  constructor( private subTechnologyService: SubTechnologyService ) {
    let id = 0;
    this.tools.forEach(tool => {
      tool.id = id++;
      tool.sub_technology = this.subTechnologyService.getSubTechnology(tool.sub_tech_id);
    });
  }

  getTools(): Tools[] {
    return this.tools;
  }

  getTool(id: number): Tools {
    return this.tools.find(tool => tool.id === id);
  }

  addTool(tool: Tools): void {
    tool.id = this.tools[this.tools.length - 1].id + 1;
    tool.sub_technology = this.subTechnologyService.getSubTechnology(tool.sub_tech_id);
    this.tools.push(tool);
  }
}
