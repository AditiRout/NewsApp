import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'de214514bc8444cfbbfee36b6b03b91d';
  constructor(private http:HttpClient) { }

  getNewsByCategory(search:string){
    return this.http.get<News[]>(`https://newsapi.org/v2/top-headlines?category=${search}&apiKey=${this.apiKey}`)
  }

  saveToFavorites(article: News){
    return this.http.post<News>('http://localhost:3000/favourites', article);
  }

  getFavorites(){
    return this.http.get<News[]>('http://localhost:3000/favourites');
  }
}
