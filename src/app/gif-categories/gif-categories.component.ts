import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-gif-categories',
  templateUrl: './gif-categories.component.html',
  styleUrls: ['./gif-categories.component.css']
})
export class GifCategoriesComponent implements OnInit {

  gifCategories: any []=[];
  index:any;
  images:any;
  downsized:any;
  url:any
  subscription: Subscription = new Subscription;

  constructor(private dataService : DataService) { }

  ngOnInit():void{

   
    this.dataService.getCategoriesGifs().subscribe((response:any)=>{
      this.gifCategories = response.data;
      this.gifCategories.forEach((item:any,index:any)=>{
        // console.log(item.gif.images.downsized.url)
        console.log(item.gif.name)
      })
      console.log("Categories Data" ,response.data)
      // console.log("Categories Data" ,response.data[0].gif.images.downsized.url)
    })
    
  }

  
}
