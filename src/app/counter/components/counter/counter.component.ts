
import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:  `

  <h1>Hola counterss</h1>

  <h3> {{counter}} </h3>


<button (click)="increaseBy(+1)">+1</button>

<button (click)="resetCounter( counter )">Reset</button> <style>button{margin-right: 8px;}</style>

<button (click)="increaseBy(-1)">-1</button>

`
})

export class CounterComponent {
  public counter = 10;

  increaseBy( value:number ){   /*Aumenta y decrementa el counter*/
    this.counter = this.counter +-1;
  }

  resetCounter( value:number){

    this.counter = 10;

  }


}

