import { Component } from '@angular/core';
import { MeasurementFieldService } from 'src/app/services/measurement-field.service';
import { MeasurementToolService } from 'src/app/services/measurement-tool.service';
import { MeasurementUnitService } from 'src/app/services/measurement-unit.service';
import { SubTechnologyService } from 'src/app/services/sub-technology.service';
import { TechnologyService } from 'src/app/services/technology.service';
import { ToolsFinalDefinitionService } from 'src/app/services/tools-final-definition.service';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-export-to-json',
  templateUrl: './export-to-json.component.html',
  styleUrls: ['./export-to-json.component.css']
})
export class ExportToJsonComponent {
  constructor(
    private measurementFieldService: MeasurementFieldService,
    private measurementToolService: MeasurementToolService,
    private measurementUnitService: MeasurementUnitService,
    private subTechnologyService: SubTechnologyService,
    private technologyService: TechnologyService,
    private toolsFinalDefinitionService: ToolsFinalDefinitionService,
    private toolsService: ToolsService
  ) {}

  exportToJson = () => {
    const data = {
      measurementFields: this.measurementFieldService.getMeasurementsFields(),
      measurementTools: this.measurementToolService.getMeasurementTools(),
      measurementUnits: this.measurementUnitService.getMeasurementUnits(),
      subTechnologies: this.subTechnologyService.getSubTechnologies(),
      technologies: this.technologyService.getTechnologies(),
      toolsFinalDefinition: this.toolsFinalDefinitionService.getToolsFinalDefinition(),
      tools: this.toolsService.getTools()
    };
    const dataStr = JSON.stringify(data);
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = 'data.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };
}
