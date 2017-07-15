import {Component, HostListener} from '@angular/core';
import {ScrollService} from "../scroll-service/scroll.service";


/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  providers: [ScrollService]
})
export class ToolbarComponent {

  constructor (public ScrollService: ScrollService){}

  private cssNone : Boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.cssNone = this.ScrollService.onWindowScroll();
  }


}

