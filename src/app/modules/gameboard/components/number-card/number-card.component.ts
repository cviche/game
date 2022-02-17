import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import {cardRemoved} from "../../animations/animations.animation";
@Component({
  selector: 'number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss'],
    host: {
    '[@cardRemoved]': "displayCard ? 'in' : 'out'",
    '(@cardRemoved.done)': 'captureDoneEvent($event)',
  },
  animations: cardRemoved
})

export class NumberCardComponent implements OnInit {
  @Input() value!: number;
  @Input() currentTurn?: string;
  displayCard: boolean  = true
  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
  }

  // This function will trigger the animation of removing a card
  // and then remove it from the service state
  removeCard(): void {
    if(this.currentTurn === "You") {
      this.displayCard = false;
    }
  }

  captureDoneEvent(event: any) {
      if(event.toState === 'out' && this.currentTurn === "You") {
        this.boardService.removeCard(this.value);
      }
  }

}
