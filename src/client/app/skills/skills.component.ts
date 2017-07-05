import {Component, Inject, HostListener} from '@angular/core';
import {ScrollService} from "../shared/scroll-service/scroll.service";
import {DOCUMENT} from "@angular/platform-browser";

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['skills.component.css'],
  providers: [ScrollService]
})
export class SkillsComponent {


  constructor( public ScrollService: ScrollService) {
  }

  public navIsFixedSkills: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.navIsFixedSkills = this.ScrollService.onWindowScroll();
  }
}
