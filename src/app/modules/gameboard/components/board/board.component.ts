import { Component, OnDestroy, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  state: string = "initial";
  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
    console.log("The board is being initialized...")
    this.boardService.boardState.subscribe((state) => {
      console.log(state);
      this.state = state;
    })
  }
  ngOnDestroy(): void {
      console.log("The board is being destroyed...")
  }

  startBoard(): void {
    this.boardService.startGame();
  }

}
