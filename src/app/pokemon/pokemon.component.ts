import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() poke_name: string;
  @Input() poke_index: number;
  @Input() poke_primary_type: string;
  @Input() poke_secondary_type: string;
  constructor() { 
  }

  ngOnInit() {
    
  }

}
