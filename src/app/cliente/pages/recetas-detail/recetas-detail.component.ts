import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpDataService} from "../../../shared/services/fastfood.service";

@Component({
  selector: 'app-recetas-detail',
  templateUrl: './recetas-detail.component.html',
  styleUrls: ['./recetas-detail.component.css']
})
export class RecetasDetailComponent implements OnInit {

  recipeName: any = '';
  ingredientsRecipe:any []=[];
  recipePhoto ='';
  preparationRecipe: any;

  ngOnInit(): void {
  }

  constructor(private recipeServices: HttpDataService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
        params => {
          this.getRecipe(params['id']);
        }
    );
  }

  getRecipe(id:any){
    this.recipeServices.getItem(id).subscribe(
        res =>
        {
          console.log(res);
          this.recipeName = res.name;
          this.recipePhoto = res.photo;
          this.ingredientsRecipe = res.ingredients;
          this.preparationRecipe = res.preparation;

        },
        err =>{
          console.log(err);
        }
    );
  }

}
