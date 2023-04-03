import { Injectable } from '@angular/core';
import { Hero } from './model/heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'http://localhost:8080/api/heroes'

  constructor(private messageService :MessageService,private http: HttpClient) { }
  getHeroes():Observable<Hero[]>{
    const heroes = this.http.get<Hero[]>(this.heroesUrl);
    console.log(heroes)
    this.messageService.add('HeroService: fetched heroes');
    
    return this.http.get<Hero[]>(this.heroesUrl);
    // return heroes
  }
  
}
