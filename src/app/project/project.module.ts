import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectIntroductionComponent } from './project-introduction/project-introduction.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home/home.component';

const routes: Routes = [{ path: ':id', component: ProjectIntroductionComponent }];

@NgModule({
  declarations: [
    ProjectIntroductionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
