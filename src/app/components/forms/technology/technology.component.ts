import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Technology } from 'src/app/models/technology';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor( private formBuilder : FormBuilder, private technologyService: TechnologyService) { }

  public technologies: Technology[];

  public displayedColumns: string[] = ['name', 'm_code'];

  ngOnInit(): void {
    this.technologies = this.technologyService.getTechnologies();
    this.technologyService.TechnologiesListener.subscribe(technologies => {
      this.technologies = technologies;
    });
  }
  
  technologyForm = this.formBuilder.group({
    name: [''],
    m_code: [''],
  });

  onSubmit(): void {
    this.technologyService.addTechnology(new Technology(this.technologyForm.value.name, this.technologyForm.value.m_code))
    console.log(this.technologyService.getTechnologies());
    this.technologyForm.reset();
  }
}
