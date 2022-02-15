import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'players-turn',
  templateUrl: './players-turn.component.html',
  styleUrls: ['./players-turn.component.scss']
})
export class PlayersTurnComponent implements OnInit {
  @Input() currentPlayerName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
