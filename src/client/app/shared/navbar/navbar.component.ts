import { Component, HostListener, Inject, OnInit, Output } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import {ScrollService} from "../scroll-service/scroll.service";

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  outputs: ['navIsFixed'],
  providers: [ScrollService]
})
export class NavbarComponent implements OnInit{
  public navIsFixed: boolean = false;
  public number: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document, public ScrollService : ScrollService) { }

  ngOnInit() { }

  /*@HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    //console.log(number);
    if (number > 180) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 180) {
      this.navIsFixed = false;
    }
  }*/

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.number = this.ScrollService.onWindowScroll();
    if (this.number > 180){
      this.navIsFixed = true;
    }else{
      this.navIsFixed = false;
    }
  }


}

