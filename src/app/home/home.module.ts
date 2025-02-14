import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FilterComponent } from './filter/filter.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { CardProjectComponent } from './card-project/card-project.component';


const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    FilterComponent,
    ListProjectsComponent,
    CardProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
