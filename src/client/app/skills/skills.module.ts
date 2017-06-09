import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
  imports: [CommonModule, SkillsRoutingModule],
  declarations: [SkillsComponent],
  exports: [SkillsComponent]
})
export class SkillsModule { }
