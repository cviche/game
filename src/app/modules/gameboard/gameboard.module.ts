import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { StartGameButtonComponent } from './components/start-game-button/start-game-button.component';
import { GameboardRoutingModule } from './gameboard-routing.module';

@NgModule({
  declarations: [
    BoardComponent,
    StartGameButtonComponent,
  ],
  imports: [
    GameboardRoutingModule,
    CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class GameboardModule { }
