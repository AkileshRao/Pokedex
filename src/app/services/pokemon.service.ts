import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
  constructor(
    private http: HttpClient,
  ) { }

  public fetchAPokemon(index: string | number) {
    return this.http.get(`${this.POKEMON_API_URL}/${typeof index === 'string' ? +index : index}`);
  }
}
