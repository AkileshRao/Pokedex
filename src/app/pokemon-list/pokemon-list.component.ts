import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { POKEMON } from '../dataset/primary-types.dataset';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemon: any[];
  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.pokemon = POKEMON;
  }

  public openPokemon(index: number) {
    this.pokeService.fetchAPokemon(index).subscribe(res => console.log(res));
  }
}
