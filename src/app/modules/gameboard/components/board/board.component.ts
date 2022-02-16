import { Component, OnInit } from '@angular/core';
import { container } from '../../animations/animations.animation';
import { BoardMaster } from '../../interfaces/board-master.interface';
import { GameState } from '../../interfaces/game-state.interface';
import { BoardService } from '../../services/board.service';


@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: container
})
export class BoardComponent implements OnInit {
  state!: string;
  winner!: string;
  gameState!: GameState;
  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
    this.boardService.boardMaster.subscribe((boardMaster : BoardMaster) => {
      const {cards, playerScore, botScore, currentTurn, playerName, winner, state} = boardMaster;
      this.state = state;
      this.winner = winner;
      this.gameState = {
        cards,
        playerScore,
        botScore,
        currentTurn,
        playerName
      }
    })
  }
}
