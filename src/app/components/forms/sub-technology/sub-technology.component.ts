import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubTechnology } from 'src/app/models/sub-technology';
import { SubTechnologyService } from 'src/app/services/sub-technology.service';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-sub-technology',
  templateUrl: './sub-technology.component.html',
  styleUrls: ['./sub-technology.component.css']
})
export class SubTechnologyComponent implements OnInit{
  
  constructor(
    private formBuilder : FormBuilder, 
    private subTechnologyService: SubTechnologyService, 
    private technologyService: TechnologyService
  ) { }

  public technologies = this.technologyService.getTechnologies();
  public subTechnologies: SubTechnology[] = this.subTechnologyService.getSubTechnologies();

  ngOnInit(): void {
    this.subTechnologyService.subTechnologiesListener.subscribe(subTechnologies => {
      this.subTechnologies = subTechnologies;
    });
  }
  subTechnologyForm = this.formBuilder.group({
    name: [''],
    m_code: [''],
    technology_id: [0],
  });

  onSubmit = () => {    
    this.subTechnologyService.addSubTechnology(new SubTechnology(this.subTechnologyForm.value.name, this.subTechnologyForm.value.m_code, this.subTechnologyForm.value.technology_id));
    console.log(this.subTechnologyService.getSubTechnologies());
    this.subTechnologyForm.reset();
  }
}
