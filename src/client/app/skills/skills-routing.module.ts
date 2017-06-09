import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'skills', component: SkillsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
