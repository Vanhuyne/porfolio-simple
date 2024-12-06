import { Component } from '@angular/core';
import { Project } from '../interface/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'A responsive weather application using Angular and OpenWeatherMap API.',
      technologies: ['Angular', 'Tailwind CSS', 'RxJS'],
      imageUrl: '/assets/images/weather-project.png', // Optional
      githubLink: 'https://github.com/yourusername/weather-dashboard',
      demoLink: 'https://your-weather-app-demo.com',
      timeSpent: '2 weeks'
    },
    {
      id: 2,
      title: 'Personal Portfolio',
      description: 'Modern portfolio website showcasing my projects and skills.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      imageUrl: '/assets/images/portfolio-project.png', // Optional
      githubLink: 'https://github.com/yourusername/portfolio',
      demoLink: 'https://your-portfolio-demo.com',
      timeSpent: '3 weeks'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Full-featured task tracking and management application.',
      technologies: ['Angular', 'Firebase', 'RxJS'],
      imageUrl: '/assets/images/task-project.png', // Optional
      githubLink: 'https://github.com/yourusername/task-app',
      demoLink: 'https://your-task-app-demo.com',
      timeSpent: '4 weeks'
    }
  ];
}
