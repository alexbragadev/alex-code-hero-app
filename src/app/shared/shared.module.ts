import { PaginationComponent } from './components/pagination/pagination.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { HeroAPIService } from '../services/heroAPI.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CardHeroComponent,
    PaginationComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    CardHeroComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [HeroAPIService, SlicePipe],
  bootstrap: []
})
export class SharedModule { }
