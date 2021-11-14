import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
//Api Local
//readonly APIUrl="https://localhost:44318/api";
//Api server
readonly APIUrl="https://foodsorderapiduy.azurewebsites.net/api/";


  constructor(private http:HttpClient) { }
    getFoodList():Observable<any[]>{
      //return this.http.get<any>(this.APIUrl+"/fooditems");
      return this.http.get<any>(this.APIUrl+"/FoodItems");


  }
  addFood(val:any){
    //return this.http.post(this.APIUrl+"/fooditems", val)
    return this.http.post(this.APIUrl+"/FoodItems", val)
  }
  editFood(val:any){
    //return this.http.put(this.APIUrl+"/fooditems/"+val.id, val)
    return this.http.put(this.APIUrl+"/FoodItems/"+val.foodItemId, val)
  }
  deleteFood(val:any){
    //return this.http.put(this.APIUrl+"/fooditems/"+val.id, val)
    return this.http.delete(this.APIUrl+"/FoodItems/"+val.foodItemId, val)
  }
  Search(val:any){
    return this.http.get(this.APIUrl+"/FoodItems/Search?title="+val.title, val)
  }
}
