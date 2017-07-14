import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {SkillsData} from "../../skills/skills";


@Injectable()
export class SkillsdataServices{

  public _url:string = 'assets/data/skills.json';
  constructor(private _http: Http) {}
  resp: SkillsData[] = [];

  get(): Observable<SkillsData[]>{
    return this._http.get(this._url)
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
  };



  /**
   * Handle HTTP error
   */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }





}
