import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  businessNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsByCategory('business').subscribe(
      data => {
        let jsonNews = JSON.parse(JSON.stringify(data));
        this.businessNews = jsonNews.articles;
      },
      error => {
        console.error('Error fetching business news', error);
      }
    );
  }
  addToFavourites(newsItem: any) {
    this.newsService.saveToFavorites(newsItem).subscribe(
      data => {
        alert('News added to favourites');
      },
      error => {
        console.error('Error adding to favourites', error);
      }
    );
  }
}
