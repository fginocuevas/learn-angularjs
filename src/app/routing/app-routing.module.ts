import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HeroDetailComponent } from '../hero-detail.component';
import { HeroesComponent } from '../heroes.component';
import { DashboardComponent } from '../dashboard.component';
import { PipesComponent } from '../tools-pipes.component';

import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeroesRoutingModule } from './heroes-routing.module';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tools/pipes', component: PipesComponent},
  {path: 'crisis-center', component: CrisisListComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    HeroesRoutingModule
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {

}
