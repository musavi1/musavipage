import {Component, HostListener} from '@angular/core';
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
  providers: [ScrollService, SkillsdataServices]
})
export class SkillsComponent {
  private  _skillData : SkillsData[] ;
  private errorMessage: string = '';
  public navIsFixedSkills: boolean = false;
  public skills: Observable<SkillsData[]> ;


  constructor( public ScrollService: ScrollService, private skillsdataServices: SkillsdataServices) {}
  ngOnInit(){
    this.skills = this.skillsdataServices.get();
  }



  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.navIsFixedSkills = this.ScrollService.onWindowScroll();
    this.getSkills();
    //console.log(this.navIsFixedSkills);
  }

  getSkills() {
    this.skillsdataServices.get()
      .subscribe(data => this._skillData = data,
        error => this.errorMessage = <any>error
      );
  }
}
