import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
})

export class ListPokemonComponent implements OnInit {
  pokemons!: Pokemon[];

  constructor(private router: Router) {
  }

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }

}
