import { Injectable } from '@angular/core';
import { Character } from '../character';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class StarWarsService{

  //Active Web Service (WORKING! Note: Make sure getAll() people$ uses baseUrl with '/people')
  //private baseUrl: string = 'http://swapi.co/api';

  //Local JSON File
  private baseUrl: string = '../../assets/starWars.json';

  constructor(private http: Http){
  }

  getAll(): Observable<Character[]>{
      let people$ = this.http
        .get(`${this.baseUrl}`, {headers: this.getHeaders()})
        .map(mapCharacters);
        return people$;
    }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapCharacters(response: Response): Character[]{
       // The response of the API has a results
       // property with the actual results
       return response.json().results.map(toCharacterObj)
    }

function toCharacterObj(r:any): Character{
  let character = <Character>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: Number.parseInt(r.mass),
    height: Number.parseInt(r.height),
  });
  console.log('Parsed character:', character);
  return character;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
// that's because the Starwars API doesn't have an id field
function extractId(characterData:any){
 let extractedId = characterData.url.replace('http://swapi.co/api/people/','').replace('/','');
 return parseInt(extractedId);
}

