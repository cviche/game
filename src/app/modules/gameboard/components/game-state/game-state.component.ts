import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { container } from '../../animations/animations.animation';
import { GameState } from '../../interfaces/game-state.interface';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss'],
  animations: container
})
export class GameStateComponent implements OnInit, OnChanges {
  @Input() gameState!: GameState;
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      const {currentTurn, cards} = changes.gameState.currentValue;
      if(cards.length === 0) {
        setTimeout(() => this.boardService.endGame(), 0);
        
      }
      else if(currentTurn === "Bot") {
        this.letBotChooseCard(cards);
      }
  }

  letBotChooseCard(cards: number[]) : void{
    setTimeout(() => {
          const botChoice = Math.floor(Math.random()*cards.length);
          console.log(botChoice);
          this.boardService.removeCard(cards[botChoice]);
    }, 500)
  }

}
