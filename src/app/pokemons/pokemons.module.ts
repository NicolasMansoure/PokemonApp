import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule,
        
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        EditPokemonComponent,
        PokemonFormComponent,
    ],
    providers: [PokemonsService,]
})
export class PokemonsModule {
    
 }