import { Component } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: `app/game/board/tile/tile.template.html`
})
export class TileComponent  {
    name: string;
    color: string;
    owner: string;
    
    image: string;
    rentPrice: number;
    housePrice: number;
    hotelPrice: number;
}