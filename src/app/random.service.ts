import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment} from '../environments/environment'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RandomService {

  gifs = new BehaviorSubject<any>([])
  constructor(private http :HttpClient) { 
   
  }
  getRandomGifs(category:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${environment.giphyApiKey}&limit=50`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  }


  getRanGifs(){
    return this.gifs.asObservable()
  }

}
