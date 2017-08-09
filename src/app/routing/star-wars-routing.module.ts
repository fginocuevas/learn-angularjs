import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { StarWarsListComponent } from '../star-wars-application/star-wars-list.component';

const starWarsRoutes: Routes = [
  {path: 'starWarsList', component: StarWarsListComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(starWarsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class StarWarsRoutingModule{

}

