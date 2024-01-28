import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './components/forms/technology/technology.component';
import { SubTechnologyComponent } from './components/forms/sub-technology/sub-technology.component';
import { MeasurementFieldComponent } from './components/forms/measurement-field/measurement-field.component';
import { MeasurementToolComponent } from './components/forms/measurement-tool/measurement-tool.component';
import { MeasurementUnitComponent } from './components/forms/measurement-unit/measurement-unit.component';
import { ToolsComponent } from './components/forms/tools/tools.component';
import { ToolsFinalDefinitionComponent } from './components/forms/tools-final-definition/tools-final-definition.component';
import { HomeComponent } from './components/layout/home/home.component';

const routes: Routes = [
  {path: 'add_technologies', component: TechnologyComponent},
  {path: 'add_sub_technology', component: SubTechnologyComponent},
  {path: 'add_measurement_field', component: MeasurementFieldComponent},
  {path: 'add_measurement_tool', component: MeasurementToolComponent},
  {path: 'add_measurement_unit', component: MeasurementUnitComponent},
  {path: 'add_tool', component: ToolsComponent},
  {path: 'add_tools_final_definition', component: ToolsFinalDefinitionComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
