/*initial imports*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*internal declarations*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './facilities/carousel/carousel.component';
import { Carousel2Component } from './facilities/carousel2/carousel2.component';
import { Carousel3Component } from './facilities/carousel3/carousel3.component';

/*outer imports*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FacilitiesComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    Carousel2Component,
    Carousel3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule, 
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
