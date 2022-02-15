import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

import { BoardComponent } from './components/board/board.component';
import { GameboardRoutingModule } from './gameboard-routing.module';
import { InitialStateComponent } from './components/initial-state/initial-state.component';
import { GameStateComponent } from './components/game-state/game-state.component';
import { ModalComponent } from './components/modal/modal.component';
import { StartRulesButtonComponent } from './components/start-rules-button/start-rules-button.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { NumberCardComponent } from './components/number-card/number-card.component';
import { PlayersTurnComponent } from './components/players-turn/players-turn.component';
import { EndStateComponent } from './components/end-state/end-state.component';
import { GameRulesComponent } from './components/game-rules/game-rules.component';


@NgModule({
  declarations: [
    BoardComponent,
    InitialStateComponent,
    GameStateComponent,
    ModalComponent,
    StartRulesButtonComponent,
    ModalFormComponent,
    ScoreCardComponent,
    NumberCardComponent,
    PlayersTurnComponent,
    EndStateComponent,
    GameRulesComponent,
  ],
  imports: [
    GameboardRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class GameboardModule { }
