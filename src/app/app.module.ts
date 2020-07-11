import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaComponent } from './grafica/grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    CardComponent,
    NavbarComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
