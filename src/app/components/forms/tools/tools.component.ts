import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Tools } from 'src/app/models/tools';
import { SubTechnologyService } from 'src/app/services/sub-technology.service';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  constructor(
    private formBuilder : FormBuilder, 
    private subTechnologyService: SubTechnologyService, 
    private toolsService: ToolsService
  ) { }

  subTechnologies = this.subTechnologyService.getSubTechnologies();

  public tools: Tools[] = [];

  ngOnInit(): void {
    this.tools = this.toolsService.getTools();
    this.toolsService.toolsListener.subscribe(tools => {
      this.tools = tools;
    });
  }

  toolForm = this.formBuilder.group({
    name: [''],
    sub_technology_id: [0],
  });


  onSubmit = () => {    
    this.toolsService.addTool(new Tools(this.toolForm.value.name, this.toolForm.value.sub_technology_id, 1));
    console.log(this.toolsService.getTools());
    this.toolForm.reset();
  }
}
