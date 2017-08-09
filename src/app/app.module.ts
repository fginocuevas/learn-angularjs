import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { PipesComponent } from './tools-pipes.component';

import { CrisisListComponent } from './routing/crisis-list.component';
import { PageNotFoundComponent } from './routing/page-not-found.component';
import { AppRoutingModule } from './routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//For HTTP
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
//import { InMemoryDataService }  from './services/in-memory-data.service';

//IRL
import { JsonToObjectComponent } from './real-life-application/json-to-object.component';

//Star Wars
import { StarWarsListComponent } from './star-wars-application/star-wars-list.component';
import { StarWarsService } from './services/star-wars.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    PipesComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    JsonToObjectComponent,
    StarWarsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    // Rather than require a real API server, this example simulates communication with the
    // remote server by adding the InMemoryWebApiModule to the module imports, effectively replacing
    // the Http client's XHR backend service with an in-memory alternative.
    // The forRoot() configuration method takes an InMemoryDataService class
    // that primes the in-memory database. Add the file in-memory-data.service.ts in app with the following content:
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    HeroService,
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//FIXES

//app/main.ts(5,51): error TS2307: Cannot find module 'angular2-in-memory-web-api'.
// SOLUTION: npm install angular-in-memory-web-api --save
//  import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
