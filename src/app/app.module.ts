import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GifsComponent } from './gifs/gifs.component';
import { GifCategoriesComponent } from './gif-categories/gif-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GifsComponent,
    GifCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
