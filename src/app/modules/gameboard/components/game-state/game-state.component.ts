import { Component, OnInit, OnDestroy } from '@angular/core';
import { container } from '../../animations/animations.animation';
import { BoardMaster } from '../../interfaces/board-master.interface';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss'],
  animations: container
})
export class GameStateComponent implements OnInit, OnDestroy {
  cards!: number[];
  playerScore!: number;
  botScore!: number;
  currentTurn!: string;
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.boardMaster.subscribe((boardMaster : BoardMaster) => {
      this.cards = boardMaster.cards;
      this.playerScore = boardMaster.playerScore;
      this.botScore = boardMaster.botScore;
      this.currentTurn = boardMaster.currentTurn;
      if(boardMaster.currentTurn === "Bot") {
        this.letBotChooseCard();
      } 
    })
  }

  ngOnDestroy() : void {
    this.boardService.endGame();
  }

  letBotChooseCard() : void{
    setTimeout(() => {
          const botChoice = Math.floor(Math.random()*this.cards.length);
          console.log(botChoice);
          this.boardService.removeCard(this.cards[botChoice]);
    }, 500)
  }

}
