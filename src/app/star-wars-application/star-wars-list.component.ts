import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Character } from '../character';
import { StarWarsService } from '../services/star-wars.service';


@Component({
  selector: 'star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['../app.component.css'],
})

export class StarWarsListComponent implements OnInit {

   characters: Character[] = [];

     constructor(
      private starWarsService: StarWarsService,
      private route: ActivatedRoute) {}

     ngOnInit() {
       this.starWarsService
           .getAll()
           .subscribe(characters => this.characters = characters);
     }

}
