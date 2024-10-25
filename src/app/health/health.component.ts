import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  healthNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsByCategory('health').subscribe(
      data => {
        let jsonNews = JSON.parse(JSON.stringify(data));
        this.healthNews = jsonNews.articles;
      },
      error => {
        console.error('Error fetching health news', error);
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
