import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemon: any[];
  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.pokemon = JSON.parse(localStorage.getItem('pokemon'));
  }

  public openPokemon(index: string) {
    this.pokeService.fetchAPokemon(index).subscribe(res => console.log(res));
  }
}
