import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import {fadeInOut} from "../../animations/animations.animation";
import { BoardMaster } from '../../interfaces/board-master.interface';
@Component({
  selector: 'number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss'],
  animations: fadeInOut
})
export class NumberCardComponent implements OnInit {
  @Input() value!: number;
  currentTurn!: string;
  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
    this.boardService.boardMaster.subscribe((boardMaster : BoardMaster) => {
      this.currentTurn = boardMaster.currentTurn;
    })
  }

  removeCard(): void {
    if(this.currentTurn === "You") {
      this.boardService.removeCard(this.value);
    }
  }

}
