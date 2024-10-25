import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  scienceNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsByCategory('science').subscribe(
      data => {
        let jsonNews = JSON.parse(JSON.stringify(data));
        this.scienceNews = jsonNews.articles;
      },
      error => {
        console.error('Error fetching science news', error);
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
