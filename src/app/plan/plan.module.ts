import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { ObjectsComponent } from './objects/objects.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    ObjectsComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClarityModule,
    ShareModule
  ]
})
export class PlanModule { }
