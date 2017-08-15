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
  private number: number =0;

  constructor( public ScrollService: ScrollService) {
  }

  public navIsFixedAbout: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.number = this.ScrollService.onWindowScroll();
    if (this.number > 180){
      this.navIsFixedAbout = true;
    }else{
      this.navIsFixedAbout = false;
    }
  }

  printThisPage(){
    window.open('assets/data/Resume1705.pdf');

  }
}
