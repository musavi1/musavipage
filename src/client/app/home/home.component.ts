import {Component, OnInit, Input, HostListener, Inject} from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { DOCUMENT } from '@angular/platform-browser';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  inputs: ['navIsFixed'],
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
  constructor(@Inject(DOCUMENT) private document: Document, public nameListService: NameListService) {}

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
    let number = this.document.body.scrollTop;
    console.log(number);
    if (number > 180) {
      this.navIsFixedHome = true;
    } else if (this.navIsFixedHome && number < 180) {
      this.navIsFixedHome = false;
    }
  }

}
