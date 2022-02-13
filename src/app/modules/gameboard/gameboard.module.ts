import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { StartGameButtonComponent } from './components/start-game-button/start-game-button.component';
import { GameboardRoutingModule } from './gameboard-routing.module';
import { InitialStateComponent } from './components/initial-state/initial-state.component';
import { GameStateComponent } from './components/game-state/game-state.component';

@NgModule({
  declarations: [
    BoardComponent,
    StartGameButtonComponent,
    InitialStateComponent,
    GameStateComponent,
  ],
  imports: [
    GameboardRoutingModule,
    CommonModule
  ]
})
export class GameboardModule { }
