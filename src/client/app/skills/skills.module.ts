import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {HomeRoutingModule} from "../home/home-routing.module";
import {SharedModule} from "../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [CommonModule, SkillsRoutingModule, HomeRoutingModule, SharedModule, BrowserModule],
  declarations: [SkillsComponent],
  exports: [SkillsComponent, BrowserAnimationsModule]
})
export class SkillsModule {


}
