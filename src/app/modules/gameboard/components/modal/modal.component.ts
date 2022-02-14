import { Component } from '@angular/core';
import { BoardService } from '../../services/board.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('openClose', [
      state('void', style({opacity: 0})),
      state('*', style({opacity: 1})),
      transition(':enter', [animate('250ms')]),
      transition(':leave', [animate('250ms')])
    ])
  ]
})
export class ModalComponent {
  constructor(private boardService : BoardService) { }

  exitRules() {
    this.boardService.exitRules();
  }

}
