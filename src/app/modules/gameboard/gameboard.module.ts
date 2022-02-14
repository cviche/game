import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

import { BoardComponent } from './components/board/board.component';
import { StartGameButtonComponent } from './components/start-game-button/start-game-button.component';
import { GameboardRoutingModule } from './gameboard-routing.module';
import { InitialStateComponent } from './components/initial-state/initial-state.component';
import { GameStateComponent } from './components/game-state/game-state.component';
import { ModalComponent } from './components/modal/modal.component';
import { StartRulesButtonComponent } from './components/start-rules-button/start-rules-button.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';


@NgModule({
  declarations: [
    BoardComponent,
    StartGameButtonComponent,
    InitialStateComponent,
    GameStateComponent,
    ModalComponent,
    StartRulesButtonComponent,
    ModalFormComponent,
  ],
  imports: [
    GameboardRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class GameboardModule { }
