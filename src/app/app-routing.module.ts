import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // when we go to localhost:4200/ then show HomeComponent
  {path : '', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path : 'projects', component: ProjectsComponent},
  {path : 'skills', component: SkillsComponent},
  {path : 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }