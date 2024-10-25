import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  {path:'',redirectTo:'search',pathMatch:'full'},
  { path: 'search', component: SearchComponent },
  { path: 'category/sports', component: SportsComponent },
  { path: 'category/business', component: BusinessComponent },
  { path: 'category/technology', component: TechnologyComponent },
  { path: 'category/science', component: ScienceComponent },
  { path: 'category/health', component: HealthComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
