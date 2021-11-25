import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';

  numero: number = 0;
  base: number =5;

  contador(base:number){
    // var base:number
    this.numero += base;

  }
  

   
}

