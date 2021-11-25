import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoHeroesComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoHeroesComponent
    ],
    exports: [
        HeroeComponent,
        ListadoHeroesComponent
    ],
    imports: [
        CommonModule
    ]

})

export class HeroesModule {

}