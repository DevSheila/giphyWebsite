import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { GifCategoriesComponent} from './gif-categories/gif-categories.component';
import { GifsComponent } from './gifs/gifs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'categories', component: GifCategoriesComponent},
  {path: 'trending', component: GifsComponent},
  {path: '', redirectTo:'/trending', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
