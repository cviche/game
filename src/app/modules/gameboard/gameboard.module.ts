import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { StartGameButtonComponent } from './components/start-game-button/start-game-button.component';



@NgModule({
  declarations: [
    BoardComponent,
    StartGameButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameboardModule { }
