import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectDataService} from '../../services/project-data.service';

@Component({
  selector: 'app-project-introduction',
  standalone: false,
  templateUrl: './project-introduction.component.html',
  styleUrl: './project-introduction.component.css'
})
export class ProjectIntroductionComponent implements OnInit{
  projectId: string | null = '';
  projectDetail: any;

  constructor(private route: ActivatedRoute, private projectDataService: ProjectDataService) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id'); // Obtiene el ID al cargar

    this.projectDetail = this.projectDataService.getProjectById(Number(this.projectId))

    console.log(this.projectDetail);



    // Alternativamente, si la URL cambia dinámicamente, usa:
    // this.route.paramMap.subscribe(params => {
    //   this.projectId = params.get('id');
    // });
  }
}
