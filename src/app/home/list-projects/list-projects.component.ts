import {Component, OnInit} from '@angular/core';
import {ProjectDataService} from '../../services/project-data.service';

@Component({
  selector: 'app-list-projects',
  standalone: false,
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css'
})
export class ListProjectsComponent implements OnInit {

  projectsDetails: any;

  constructor(private projectDataService:ProjectDataService) {
  }

  ngOnInit() {
      this.projectsDetails = this.projectDataService.getProjects();
    }

}
