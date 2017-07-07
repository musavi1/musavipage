
import {Injectable, HostListener, Inject} from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';




@Injectable()
export class ScrollService{
  public navIsFixedHome: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onWindowScroll() {
    let number = this.document.body.scrollTop;
    //console.log(number, this.navIsFixedHome);
    if (number > 180) {
      this.navIsFixedHome = true;
    } else if (this.navIsFixedHome && number < 180) {
      this.navIsFixedHome = false;
    }
    return this.navIsFixedHome;
  }
}
