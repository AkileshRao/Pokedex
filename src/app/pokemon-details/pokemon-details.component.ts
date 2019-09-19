import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

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
        this.currentPokemon = res;
        console.log(this.currentPokemon);
      })
    })
  }

}
