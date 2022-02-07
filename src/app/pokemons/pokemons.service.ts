import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonsService {

    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Pokemon | void {
        let pokemons = this.getPokemons();

        for (let i = 0; i < pokemons.length; i++) {
            if (id === pokemons[i].id) {
                return pokemons[i];
            }
        }
    }
}