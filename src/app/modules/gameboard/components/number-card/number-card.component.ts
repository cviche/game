import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnInit {
  @Input() value!: number;
  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
  }

  removeCard(): void {
    this.boardService.removeCard(this.value);
  }

}
