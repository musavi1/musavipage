import {Component, HostListener} from '@angular/core';
import {ScrollService} from "../shared/scroll-service/scroll.service";
import {win} from "@angular/platform-browser/src/browser/tools/browser";

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
    //window.print();
    //w.document.write(assets/data/resume1705);
    let w = window.open('assets/data/resume1705.pdf');
    //w.print();

  }
}
