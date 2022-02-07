import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemons/pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons/pokemons.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  providers: [PokemonsService],
})

export class ListPokemonComponent implements OnInit {
  pokemons!: Pokemon[];

  constructor(private router: Router, private pokemonsService: PokemonsService) {
  }

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }
}
