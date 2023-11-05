import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FastfoodtableComponent } from './cocinero/components/fastfoodtable/fastfoodtable.component';
import { FastfoodDetailComponent } from './cocinero/components/fastfood-detail/fastfood-detail.component';
import { HomeComponent } from './cocinero/pages/home/home.component';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './cocinero/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardComponent } from './cliente/components/card/card.component';
import { RecetasComponent } from './cliente/pages/recetas/recetas.component';
import { RecetasDetailComponent } from './cliente/pages/recetas-detail/recetas-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    FastfoodtableComponent,
    FastfoodDetailComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    RecetasComponent,
    RecetasDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
