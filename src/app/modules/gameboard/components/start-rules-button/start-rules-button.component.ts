import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'start-rules-button',
  templateUrl: './start-rules-button.component.html',
  styleUrls: ['./start-rules-button.component.scss']
})
export class StartRulesButtonComponent implements OnInit {

  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
  }

  startRules(): void {
    this.boardService.startRules();
  }

}
