import { Component,OnInit } from '@angular/core';
import {Recipe} from "../../../shared/models/recipe";
import {HttpDataService} from "../../../shared/services/fastfood.service";

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit{

  data: any = [];
  recipesList!: Recipe;
  constructor(private httpDataService: HttpDataService) {
  }
  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.httpDataService.getList().subscribe((response: any) => {
      this.data = response
    });
  }

}
