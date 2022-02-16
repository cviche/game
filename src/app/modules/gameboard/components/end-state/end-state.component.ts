import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'end-state',
  templateUrl: './end-state.component.html',
  styleUrls: ['./end-state.component.scss']
})
export class EndStateComponent implements OnInit {
  @Input() oldPlayerName !: string;
  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
  }

  playAgain() : void {
    this.boardService.startGame(this.oldPlayerName);
  }

}
