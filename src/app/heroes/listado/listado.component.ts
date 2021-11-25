import { Component } from "@angular/core";


@Component({
    selector: 'app-listado-heores',
    templateUrl: './listado.component.html'
})

export class ListadoHeroesComponent {

    heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor']
    heroeBorrado: string = '';
    borrarHeroe() {
     
    
     this.heroeBorrado = this.heroes.shift() || ''; // borra los los herores de uno en uno
    
    }

}