import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'start-game-button',
  templateUrl: './start-game-button.component.html',
  styleUrls: ['./start-game-button.component.scss']
})
export class StartGameButtonComponent implements OnInit {

  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
  }

  startGame() {
    this.boardService.startGame();
  }

}
