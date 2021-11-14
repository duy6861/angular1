import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: SharedService, private appComponent: AppComponent) { }
  @Input() food: any;
  foodItemId: string;
  title: string;
  imgSource: string;
  desc: string;

  FoodList: any = [];

  ngOnInit(): void {
    this.foodItemId = this.food.foodItemId;
    this.desc = this.food.desc;
    this.imgSource = this.food.imgSource;
    this.title = this.food.title;
  }
  addFood() {
    var val = {
      foodItemId: this.foodItemId,
      title: this.title,
      desc: this.desc,
      imgSource: this.imgSource
    }
    try {
      if (this.title == "" || this.desc == "" || this.imgSource == "") {
        alert("Please fill out all input information!");
      } else {
        this.service.addFood(val).subscribe(res => {
          this.appComponent.closeClick();
          alert("Add new food successfully");

        });
      }
    } catch (error) {
      alert("Have error" + error)
    }
  }
  editFood() {
    var val = {
      foodItemId: this.foodItemId,
      title: this.title,
      desc: this.desc,
      imgSource: this.imgSource
    }
    try {
      if (this.title == "" || this.desc == "" || this.imgSource == "") {
        alert("Please fill out all input information");
      } else {
        this.service.editFood(val).subscribe(res => {
          this.appComponent.closeClick();
          alert("Update food successfully");

        });
      }
    } catch (error) {
      alert("Have error" + error)
    }
  }
  refreshFood() {
    this.desc = "";
    this.title = "";
    this.imgSource = "";
  }

}



