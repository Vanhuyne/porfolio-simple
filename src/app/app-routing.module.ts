import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  // when we go to localhost:4200/ then show HomeComponent
  {path : '', component: HomeComponent},
  {path : 'skills', component: SkillsComponent},
  {path : 'contact', component: ContactComponent},
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
