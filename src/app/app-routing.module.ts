import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./cocinero/pages/home/home.component";
import {FastfoodtableComponent} from "./cocinero/components/fastfoodtable/fastfoodtable.component";
import { RecetasComponent } from "./cliente/pages/recetas/recetas.component";
const routes: Routes = [

  {path: 'home',  component: HomeComponent},
  {path: 'table', component: FastfoodtableComponent},
  {path: 'recetas', component: RecetasComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
