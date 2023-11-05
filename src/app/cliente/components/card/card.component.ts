import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpDataService} from "src/app/shared/services/fastfood.service";
import { Recipe } from 'src/app/shared/models/recipe';
import {data} from "autoprefixer";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() bundle: any; // Recibe el objeto de bundle como entrada

  constructor(private router: Router) {
  }
  onCardClick(id:any) {
    // Lógica que se ejecutará al hacer clic en la tarjeta
    console.log('Hiciste clic en la tarjeta');
    this.router.navigateByUrl(`/recetasDetail/${id}`)
    // Puedes agregar la lógica que necesites aquí
  }
}



