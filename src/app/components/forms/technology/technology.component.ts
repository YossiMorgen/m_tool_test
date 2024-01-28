import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Technology } from 'src/app/models/technology';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  constructor( private formBuilder : FormBuilder, private technologyService: TechnologyService) { }

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
