import {Component, OnInit, Input, HostListener, Inject} from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { DOCUMENT } from '@angular/platform-browser';
import {ScrollService} from "../shared/scroll-service/scroll.service";
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [ScrollService],
  inputs: [],
  outputs: [],

})
export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(@Inject(DOCUMENT) private document: Document, public nameListService: NameListService,
               public ScrollService : ScrollService) {

    //console.log(ScrollService.navIsFixedHome)
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();

  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /*just added for git testing*
  from old computer
  1234567
   */

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

  public navIsFixedHome: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.navIsFixedHome = this.ScrollService.onWindowScroll();
  }

  /*just added for git testing*
   from old computer in second place
   1
   2
   3
   4
   5
   */

}
