import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryServiceService } from '../category-service.service';
@Component({
  selector: 'app-gif-categories',
  templateUrl: './gif-categories.component.html',
  styleUrls: ['./gif-categories.component.css']
})
export class GifCategoriesComponent implements OnInit ,OnDestroy {

  gifs: any []=[];
  gifsImage:any;
  index:any;
  images:any;
  downsized:any;
  url:any
  subscription: Subscription = new Subscription;
  showInfo: boolean = false;
  
  // category
  constructor(private catService : CategoryServiceService ) { }

 
 

  category(category:string){
    this.showInfo =true;
    this.catService.getRandomGifs(category);
    this.subscription = this.catService.getRanGifs().subscribe((response:any)=>{
      this.gifsImage = response;
      console.log(response)
    })
 
  }
  ngOnInit():void{

    // this.showInfo=false
    // this.subscription = this.catService.getRanGifs().subscribe((response:any)=>{
    //   this.gifsImage = response;
    //   console.log(response)
    // })

    // this.catService.getCategoriesGifs()
    // this.subscription  = this.catService.getCatGifs().subscribe((response:any)=>{
    //   this.gifs = response;
    //   this.gifs.forEach((data:any)=>{
    //     console.log(data.gif.images.downsized.url)
    //   })
    //   console.log(response)

    // })
    this.catService.getCategoriesGifs().subscribe((response:any)=>{

      this.gifs = response.data;
      console.log(this.gifs)
    })
  
   
  
    
  }

  


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  
}

