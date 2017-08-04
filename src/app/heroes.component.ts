import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Observable<Hero[]>;
  private selectedId: number;

// (A) Before implementing requesting for Observable<Hero[]>
// heroes: Hero[];

  constructor(
     private router: Router,
     private heroService: HeroService,
     private route: ActivatedRoute) {
  }

 ngOnInit(): void {
    // (A) Before implementing requesting for Observable<Hero>
    //this.getHeroes();

  this.heroes= this.route.paramMap.switchMap((params: ParamMap) => {
    this.selectedId= +params.get('id');
    return this.heroService.getHeroes();
  })

  }

  /*
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  } */

  onSelect(hero: Hero): void {
    //hero.name="Killed";
    this.selectedHero= hero;
  }

  isSelected(hero: Hero){
    return hero.id === this.selectedId
  }

  gotoDetail (){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  values= '';
  getEvent(event: any): void {
    console.log(event);
    this.values += event.target + ' | ';
  }

  // (A) Before implementing requesting for Observable<Hero[]>
  /*
    getHeroes(): void {
      // Before the use of Promises
      //this.heroes= this.heroService.getHeroes();
      this.heroService.getHeroes().then(heroes => this.heroes= heroes)
    }
  */

}
