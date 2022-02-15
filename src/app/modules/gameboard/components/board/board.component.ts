import { Component, OnDestroy, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import {
  trigger,
  transition,
  query,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [trigger('container', [
		transition(':enter, :leave', [
			query('@*', animateChild()),
		]),
	])]
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
