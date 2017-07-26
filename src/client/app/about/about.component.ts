import {Component, HostListener} from '@angular/core';
import {ScrollService} from "../shared/scroll-service/scroll.service";

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  providers: [ScrollService]
})
export class AboutComponent {

  constructor( public ScrollService: ScrollService) {
  }

  public navIsFixedAbout: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.navIsFixedAbout = this.ScrollService.onWindowScroll();
  }

  printThisPage(){
    window.open('assets/data/resume1705.pdf');

  }
}
