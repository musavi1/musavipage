import {Component, HostListener, trigger, state, transition, animate, keyframes, style} from '@angular/core';
import {ScrollService} from "../shared/scroll-service/scroll.service";
import {SkillsdataServices} from "../shared/skillsdata-service/skillsdata.service";
import {SkillsData} from "../skills/skills"
import {Observable} from "rxjs";


/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['skills.component.css'],
  providers: [ScrollService, SkillsdataServices],
  animations: [
    trigger('myTrigger', [
      state('normal', style({transform: 'scale(1)'})),
      state('zoom', style({transform:'scale(1.4'})),
      transition('normal <=> zoom', animate('500ms'))
    ])
  ]
})
export class SkillsComponent {
  private  _skillData : SkillsData[] ;
  private errorMessage: string = '';
  public navIsFixedSkills: boolean = false;
  //public skills: Observable<SkillsData[]> ;
  public skills: Observable<any[]>;
  state: string = 'normal';



  constructor( public ScrollService: ScrollService, private skillsdataServices: SkillsdataServices) {}
  ngOnInit(){
    //this.skills = this.skillsdataServices.get();
    this.getSkills();
  }



  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.navIsFixedSkills = this.ScrollService.onWindowScroll();
  }

  getSkills() {
    this.skillsdataServices.get()
      .subscribe(data => this._skillData = data)
  }

  toggleState(){
    this.state = (this.state === 'normal' ? 'zoom' : 'normal')
  }

}
