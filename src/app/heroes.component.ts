import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  private selectedId: number;

  constructor(private router: Router, private heroService: HeroService) {
  }

  getHeroes(): void {
    // Before the use of Promises
    //this.heroes= this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes= heroes)
  }

 ngOnInit(): void {
    this.getHeroes();

  }

  /*
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  } */

  onKill(hero: Hero): void {
    //hero.name="Killed";
    this.selectedHero= hero;
  }

  gotoDetail (){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  values= '';
  getEvent(event: any): void {
    console.log(event);
    this.values += event.target + ' | ';
  }

}
