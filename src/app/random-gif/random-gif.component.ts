import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RandomService } from '../random.service';
@Component({
  selector: 'app-random-gif',
  templateUrl: './random-gif.component.html',
  styleUrls: ['./random-gif.component.css']
})
export class RandomGifComponent implements OnInit ,OnDestroy {

  gifs: any []=[];
  gifsImage:any;
  index:any;
  images:any;
  downsized:any;
  url:any
  subscription: Subscription = new Subscription;
  showInfo: boolean = true;
  
  // category
  constructor(private ranService : RandomService ) { }

  category(category:string){
    // this.catService.getRandomGifs(category);
    // this.showInfo=true
    // console.log(category)

    this.showInfo =true;
    this.ranService.getRandomGifs(category);
    this.subscription = this.ranService.getRanGifs().subscribe((response:any)=>{
      this.gifsImage = response;
      console.log(response)
    })
  }


  ngOnInit():void{

    this.showInfo=true;
    


  
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  
}

