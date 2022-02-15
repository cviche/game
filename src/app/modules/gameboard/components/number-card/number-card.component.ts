import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnInit {
  @Input() value!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
