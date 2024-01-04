import { Component } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo ';
  public counter = 10;

  increaseBy( value:number ){   /*Aumenta y decrementa el counter*/
    this.counter = this.counter +-1;
  }

  resetCounter( value:number){

    this.counter = 10;

  }


}
