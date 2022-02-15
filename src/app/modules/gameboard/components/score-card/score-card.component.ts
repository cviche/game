import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  totalScore: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
