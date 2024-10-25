import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  sportsNews: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews()
}

   getNews(){
    this.newsService.getNewsByCategory('sports').subscribe(
      data => {
        let jsonNews= JSON.parse(JSON.stringify(data));
        this.sportsNews= jsonNews.articles

      },
      error => {
        console.error('Error fetching sports news', error);
      }
    );
   }
   addToFavourites(newsItem: any) {
    this.newsService.saveToFavorites(newsItem).subscribe(
      () => {
        alert('News added to favourites');
      },
      error => {
        console.error('Error adding to favourites', error);
      }
    );
  }

}
