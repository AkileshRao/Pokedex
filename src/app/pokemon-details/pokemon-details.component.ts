import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { POKEMON } from '../dataset/primary-types.dataset';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  public currentPokemon: any;
  constructor(
    private pokeService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.pokeService.fetchAPokemon(res['id']).subscribe(res => {
        this.currentPokemon = {
          ...res, ...{ primary_type: POKEMON[res['id']].primary_type }
        };
        console.log(this.currentPokemon);
      })
    })
  }

}
