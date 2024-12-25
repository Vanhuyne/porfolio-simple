import { Component, OnInit } from '@angular/core';
import { Project } from '../../interface/project';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<{projects: Project[]}>('assets/data/projects.json').subscribe(data => {
      this.projects = data.projects;
      console.log(this.projects);
      
    });
  }

  openProject(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
