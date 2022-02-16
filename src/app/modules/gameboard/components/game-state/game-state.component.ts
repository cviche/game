import { Component, Input, OnInit } from '@angular/core';
import { container } from '../../animations/animations.animation';
import { GameState } from '../../interfaces/game-state.interface';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss'],
  animations: container
})
export class GameStateComponent implements OnInit {
  @Input() gameState!: GameState;
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  // letBotChooseCard() : void{
  //   setTimeout(() => {
  //         const botChoice = Math.floor(Math.random()*this.cards.length);
  //         console.log(botChoice);
  //         this.boardService.removeCard(this.cards[botChoice]);
  //   }, 500)
  // }

}
