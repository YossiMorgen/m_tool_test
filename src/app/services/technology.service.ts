import { Injectable } from '@angular/core';
import { Technology } from '../models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  public technologies: Technology[] = [
    new Technology('Tecnología 1', '1'),
    new Technology('Tecnología 2', '2'),
    new Technology('Tecnología 3', '3'),
    new Technology('Tecnología 4', '4')
  ];

  constructor() {
    let id = 0
    this.technologies.forEach(technology => {
      technology.id = id++;
    });
  }

  getTechnologies(): Technology[] {
    return this.technologies;
  }

  getTechnology(id: number): Technology {
    return this.technologies.find(technology => technology.id === id);
  }

  addTechnology(technology: Technology): void {
    technology.id = this.technologies[this.technologies.length - 1].id + 1;
    this.technologies.push(technology);
  }
}
