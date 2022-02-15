import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss']
})
export class GameStateComponent implements OnInit, OnDestroy {
  cards!: number[];
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.boardCards.subscribe((cards : number[]) => {
      this.cards = cards;
    })
  }

  ngOnDestroy() : void {
    this.boardService.endGame();
  }

}
