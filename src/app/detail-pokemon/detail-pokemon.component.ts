import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../pokemons/pokemon';
import { PokemonsService } from '../pokemons/pokemons.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {

    pokemon!: Pokemon | void;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {

    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id']
        this.pokemon = this.pokemonsService.getPokemon(id);
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

}