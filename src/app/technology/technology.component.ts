import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  technologyNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsByCategory('technology').subscribe(
      data => {
        let jsonNews = JSON.parse(JSON.stringify(data));
        this.technologyNews = jsonNews.articles;
      },
      error => {
        console.error('Error fetching technology news', error);
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
