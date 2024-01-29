import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
