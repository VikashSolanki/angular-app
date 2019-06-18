import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

import { from } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A text Recipe',"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",'https://cdn.pixabay.com/photo/2018/08/30/10/22/plum-cake-3641833_960_720.jpg'),
    new Recipe('A text Recipe','The description','https://cdn.pixabay.com/photo/2018/08/30/10/22/plum-cake-3641833_960_720.jpg'),
    new Recipe('A text Recipe','The description','https://cdn.pixabay.com/photo/2018/08/30/10/22/plum-cake-3641833_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
