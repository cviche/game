import { Component, OnDestroy, OnInit } from '@angular/core';
import { container } from '../../animations/fadeInOut.animation';
import { BoardService } from '../../services/board.service';


@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: container
})
export class BoardComponent implements OnInit {
  state: string = "initial";
  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
    console.log("The board is being initialized...")
    this.boardService.boardState.subscribe((state) => {
      this.state = state;
    })
  }
}
