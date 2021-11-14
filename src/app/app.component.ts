import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    constructor(private service: SharedService) {
    }
    @Input()
    title :string
    //use for testing
   
    FoodList: any = [];
    card_items = [];
    scroll_left_value = 0;
    max_width = 0;
    ActivateAddEditFood: boolean = false;
    food: any;

    ModelTitle: string;
    ngOnInit(): void {
        this.refreshFoodList();
        this.title = this.food.title;
    }

    // btnPrevious() {
    //     // if (this.scroll_left_value >= 0) {
    //     //     this.scroll_left_value = this.scroll_left_value - 100;
    //     //this.ctnPopularFood.nativeElement.animate({ scrollLeft: this.scroll_left_value }, 200);
    //     document.getElementById('ctnPopularFood').scrollLeft -= 100;
    //     // } else {
    //     //     this.scroll_left_value = 0;
    //     // }
    // }

    // btnNext() {
    //     // if (this.scroll_left_value <= (this.max_width - 300)) {
    //     //     this.scroll_left_value = this.scroll_left_value + 100;
    //     // }
    //     // this.ctnPopularFood.nativeElement.animate({ scrollLeft: this.scroll_left_value }, 200);
    //     document.getElementById('ctnPopularFood').scrollLeft += 100;
    // }
    refreshFoodList() {
        this.service.getFoodList().subscribe(data => {
            this.FoodList = data;

        })
    }
    addClick() {
        this.food = {
          foodItemId: 0,
            imgSource: "",
            title: "",
            desc: "",
        }
        this.ModelTitle = "Add New Food, The dish you just added is at the bottom of the list";
        this.ActivateAddEditFood = true;
    }
    editClick(item) {
        this.food = item;
        this.ModelTitle = "Update Food";
        this.ActivateAddEditFood = true;
    }
    closeClick() {
        this.ActivateAddEditFood = false;
        this.refreshFoodList();
    }
    deleteClick(val){
      if (confirm("Are you sure to delete this record?")){
        this.service.deleteFood(val).subscribe(res => {
          alert("Delete food successfully");
          this.refreshFoodList();
        });
      }

    }
    searchClick(){
      var val={
        title: this.title
      }
      this.service.Search(val).subscribe(data => {
        this.FoodList= data;
      })
    }
    reLoadClick(){
      window.location.reload();
    }
}
