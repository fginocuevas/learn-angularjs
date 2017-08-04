import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  message= "No Messages";
  notSure: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    //private location: Location
    private router: Router
  ) {}

  ngOnInit(): void{
    this.route.paramMap.switchMap((param: ParamMap) => this.heroService.getHero(+param.get('id')))
    .subscribe(hero => this.hero = hero);
    //this.message= "Route: " + this.route.toString() + " ParamMap: ";
    //this.notSure= this.route.paramMap.switchMap((param: ParamMap) => this.heroService.getHero(+param.get('id')));
    //console.log("Not Sure: " + JSON.stringify(this.notSure, ['hero']));
  }

  goBack(){
    //this.location.back();

     let heroId = this.hero ? this.hero.id : null;
      // Pass along the hero id if available
      // so that the HeroList component can select that hero.
      // Include a junk 'foo' property for fun.
      this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
