import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { GifCategoriesComponent} from './gif-categories/gif-categories.component';
import { GifsComponent } from './gifs/gifs.component';


const routes: Routes = [
  { path: 'categories', component: GifCategoriesComponent},
  {path: 'trending', component: GifsComponent},
  {path: '', redirectTo:'/trending', pathMatch:'full'}
  // {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
