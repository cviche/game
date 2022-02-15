import { Component, OnDestroy, OnInit } from '@angular/core';
import { container } from '../../animations/animations.animation';
import { BoardMaster } from '../../interfaces/board-master.interface';
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
    this.boardService.boardMaster.subscribe((boardMaster : BoardMaster) => {
      this.state = boardMaster.state;
    })
  }
}
