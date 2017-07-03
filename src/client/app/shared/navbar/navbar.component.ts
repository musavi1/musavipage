import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  outputs: ['navIsFixed'],
})
export class NavbarComponent implements OnInit{
  public navIsFixed: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    console.log(number);
    if (number > 180) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 180) {
      this.navIsFixed = false;
    }
  }


}

