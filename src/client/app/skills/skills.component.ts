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
      transition('normal <=> zoom', animate(400, keyframes([
        style({transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .15}),
        style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 1deg)', offset: .30}),
        style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .45}),
        style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 1deg)', offset: .60}),
        style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75}),
        style({transform: 'none', offset: 1}),
      ]))),
    ])
  ]
})
export class SkillsComponent {
  private  _skillData : SkillsData[] ;
  private errorMessage: string = '';
  public navIsFixedSkills: boolean = false;
  //public skills: Observable<SkillsData[]> ;
  public skills: Observable<any[]>;
  private number : number = 0;



  constructor( public ScrollService: ScrollService, private skillsdataServices: SkillsdataServices) {}
  ngOnInit(){
    //this.skills = this.skillsdataServices.get();
    this.getSkills();
  }



  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.number = this.ScrollService.onWindowScroll();
    if (this.number>180){
      this.navIsFixedSkills = true;
    }else{
      this.navIsFixedSkills = false;
    }
  }

  getSkills() {
    this.skillsdataServices.get()
      .subscribe(data => this._skillData = data)
  }

  toggleState(skill: SkillsData){
    //console.log('button pressed');

    skill.state= (skill.state == 'normal' ? 'zoom' : 'normal')
    //console.log(skill.state);
  }


}
