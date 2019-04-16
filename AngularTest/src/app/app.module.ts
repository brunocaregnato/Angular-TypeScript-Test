import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { HoteisComponent} from './hoteis/hoteis.component';
import { HotelComponent } from './hoteis/hotel/hotel.component';
import { HoteisService } from './hoteis/hoteis.service';
import { QuartosComponent } from './quartos/quartos.component';
import { QuartoComponent } from './quartos/quarto/quarto.component';
import { QuartosService } from './quartos/quartos.services';
import { HotelPipe } from './hoteis/hotel-filtro-pipe';
import { QuartoPipe } from './quartos/quarto-filro-pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HoteisComponent,
    HotelComponent,
    QuartosComponent,
    QuartoComponent,
    HotelPipe,
    QuartoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}, [HoteisService], [QuartosService]],
  bootstrap: [AppComponent] 
})
export class AppModule { }
