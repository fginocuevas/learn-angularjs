
import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
       <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
       <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
       <a routerLink="/tools/pipes" routerLinkActive="active">Pipes</a>
     </nav>
     <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}

