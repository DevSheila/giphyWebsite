import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { GifCategoriesComponent} from './gif-categories/gif-categories.component'

const routes: Routes = [
  { path: 'categories', component: GifCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
