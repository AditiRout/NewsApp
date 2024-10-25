import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  constructor(private router: Router,private news:NewsService) {}
  selectedCategory: string = '';  
  categories: string[] = ['business', 'sports', 'technology', 'science', 'health'];
  favNews:any=[]
  ngOnInit():void{
    this.getFavs()
  }

  searchNews() {
    if (this.selectedCategory) {
      this.router.navigate(['/category', this.selectedCategory]);
    } else {
      alert('Please select a category');
    }
  }

  getFavs(){
    this.news.getFavorites().subscribe(
      data =>{
        console.log(data)
        this.favNews=data
      },
      error=>{
        console.log(error)
      }
    
    )
    

  }
  


}
