import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SubTechnologyComponent } from './components/forms/sub-technology/sub-technology.component';
import { ToolsComponent } from './components/forms/tools/tools.component';
import { MeasurementFieldComponent } from './components/forms/measurement-field/measurement-field.component';
import { MeasurementToolComponent } from './components/forms/measurement-tool/measurement-tool.component';
import { MeasurementUnitComponent } from './components/forms/measurement-unit/measurement-unit.component';
import { ToolsFinalDefinitionComponent } from './components/forms/tools-final-definition/tools-final-definition.component';
import { TechnologyComponent } from './components/forms/technology/technology.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HomeComponent } from './components/layout/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExportToJsonComponent } from './components/layout/export-to-json/export-to-json.component';

@NgModule({
  declarations: [
    SubTechnologyComponent,
    ToolsComponent,
    MeasurementFieldComponent,
    MeasurementToolComponent,
    MeasurementUnitComponent,
    ToolsFinalDefinitionComponent,
    TechnologyComponent,
    LayoutComponent,
    HomeComponent,
    ExportToJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
