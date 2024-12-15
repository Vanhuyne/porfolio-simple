import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'TypeScript', icon: 'assets/img-icons/typescript.png' },
    { name: 'Java', icon: 'assets/img-icons/java.png' },
    { name: 'HTML', icon: 'assets/img-icons/html.png' },
    { name: 'JavaScript', icon: 'assets/img-icons/javascript.png' },
    { name: 'CSS', icon: 'assets/img-icons/css.png' },
    { name: 'Angular', icon: 'assets/img-icons/angular.png' },
    { name: 'Postman', icon: 'assets/img-icons/postman.png' },
    { name: 'MySQL', icon: 'assets/img-icons/mysql.png' },
    { name: 'Docker', icon: 'assets/img-icons/docker.png' },
    { name: 'Spring Boot', icon: 'assets/img-icons/springboot.png' },
    { name: 'Bootstrap', icon: 'assets/img-icons/bootstrap.png' },
    { name: 'Tailwindcss', icon: 'assets/img-icons/tailwindcss.png' },
    { name: 'Github', icon: 'assets/img-icons/github.png' }
  ];
}
