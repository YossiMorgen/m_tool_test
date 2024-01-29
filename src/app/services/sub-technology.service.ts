import { Injectable } from '@angular/core';
import { SubTechnology } from '../models/sub-technology';
import { TechnologyService } from './technology.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubTechnologyService {

  public subTechnologies: SubTechnology[] = [
    new SubTechnology('Sub-Tecnología 1', '1', 1),
    new SubTechnology('Sub-Tecnología 2', '2', 2),
    new SubTechnology('Sub-Tecnología 3', '3', 3),
    new SubTechnology('Sub-Tecnología 4', '4', 4)
  ];

  public subTechnologiesListener: Subject<SubTechnology[]> = new Subject<SubTechnology[]>();

  constructor(private technologyService: TechnologyService) {
    let id = 0
    this.subTechnologies.forEach(subTechnology => {
      subTechnology.id = id++;
      subTechnology.technology = this.technologyService.getTechnology(subTechnology.technology_id);
    });
  }

  getSubTechnologies(): SubTechnology[] {
    return this.subTechnologies;
  }

  getSubTechnology(id: number): SubTechnology {
    return this.subTechnologies.find(subTechnology => subTechnology.id === id);
  }

  addSubTechnology(subTechnology: SubTechnology): void {
    subTechnology.id = this.subTechnologies[this.subTechnologies.length - 1].id + 1;
    subTechnology.technology = this.technologyService.technologies.find(technology => technology.id === subTechnology.technology_id);    
    this.subTechnologies.push(subTechnology);

    this.subTechnologiesListener.next(this.subTechnologies);
  }
}
