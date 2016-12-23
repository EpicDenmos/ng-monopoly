import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { GameComponent }  from './game/game.component';
import { BoardComponent }  from './game/board/board.component';
import { TileComponent }  from './game/board/tile/tile.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    GameComponent,
    BoardComponent,
    TileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
