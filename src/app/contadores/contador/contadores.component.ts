import { Component } from "@angular/core";


@Component({
    selector: 'contadaor-app',
    template: `
    
    <h1>hola mundo</h1>

<button (click)="contador(base)">+ 1</button>

<span> {{numero}} </span>

<button (click)="contador(- base)">- 1</button>

    `
})


export class ContadorComponent {
    title = 'bases';

    numero: number = 0;
    base: number = 5;

    contador(base: number) {
        // var base:number
        this.numero += base;

    }

}