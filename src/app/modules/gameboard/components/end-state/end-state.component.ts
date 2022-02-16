import { Component, Input, OnInit } from '@angular/core';
import { EndState } from '../../interfaces/end-state.interface';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'end-state',
  templateUrl: './end-state.component.html',
  styleUrls: ['./end-state.component.scss']
})
export class EndStateComponent implements OnInit {
  @Input() endState !: EndState;
  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
  }

  playAgain() : void {
    this.boardService.startGame(this.endState.playerName);
  }

}
