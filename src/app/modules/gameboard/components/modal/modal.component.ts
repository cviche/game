import { Component } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { fadeInOut } from '../../animations/animations.animation';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: fadeInOut
})
export class ModalComponent {
  constructor(private boardService : BoardService) { }

  exitRules() {
    this.boardService.exitRules();
  }

}
