import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment} from '../environments/environment'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {


  gifs = new BehaviorSubject<any>([])
  constructor(private http :HttpClient) { 
   
  }
  getRandomGifs(category:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${environment.giphyApiKey}&limit=50`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }


  getCategoriesGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/categories?api_key=${environment.giphyApiKey}&limit=12`)
    // .subscribe((response:any)=>{
    //   this.gifs.next(response.data)
    // })
  }

  


  getCatGifs(){
    return this.gifs.asObservable()
  }

  getRanGifs(){
    return this.gifs.asObservable()
  }

}
