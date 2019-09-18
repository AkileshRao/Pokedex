import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public POKELIST_API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=965';
  public POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
  constructor(
    private http: HttpClient,
  ) {
    this.getPokemon();
  }

  public getPokemon() {
    if (!localStorage.getItem('pokemon')) {
      return this.http.get(this.POKELIST_API_URL).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem("pokemon", JSON.stringify(res.results));
      });
    }
    return localStorage.getItem('pokemon');
  }

  public fetchAPokemon(index: string) {
    return this.http.get(`${this.POKEMON_API_URL}/${index}`);
  }
}
