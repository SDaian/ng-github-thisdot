import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/profile/card/card.component';
import { ProfileResultsComponent } from './components/profile-results/profile-results.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './components/profile/image/image.component';
import { PaginationComponent } from './components/profile-results/pagination/pagination.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    CardComponent,
    ProfileResultsComponent,
    SearchBarComponent,
    ImageComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
