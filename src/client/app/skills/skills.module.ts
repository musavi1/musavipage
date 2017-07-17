import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, SkillsRoutingModule],
  declarations: [SkillsComponent],
  exports: [SkillsComponent, BrowserAnimationsModule]
})
export class SkillsModule {


}
