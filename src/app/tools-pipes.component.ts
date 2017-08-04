import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  template: `

    <h2>TOOLS: Pipes</h2>

    <div>
      <h3>Using DatePipes</h3>
      <p>The hero's birthday is {{ birthday | date:format }}</p>
      <p>Current format is : {{format}}</p>
      <p>Counter: {{counter}}</p>
      <button (click)="toggleFormat()">Toggle Format</button>
    </div>
  `,
})


export class PipesComponent{

    //birthday = new Date(1987, 05, 30);
    birthday = Date.now();
    counter= 0;

    options = [
      'medium',
      'short',
      'fullDate',
      'longDate',
      'mediumDate',
      'shortDate',
      'mediumTime',
      'shortTime'
    ]

    currentFormat= this.options[this.counter];

    toggleFormat() {
      if(this.counter < this.options.length - 1){
        this.counter++;
      } else {
        this.counter= 0;
      }
      this.currentFormat= this.options[this.counter];
    }

    get format() { return this.currentFormat}


}
