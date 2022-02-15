import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardState : Subject<string> = new Subject<string>();
  totalCards: number[] = [];
  maxCards: number = 6;

  constructor() {}

   startGame() : void {
      for(let i = 0; i < this.maxCards; i++) {
        this.totalCards.push(i+1);
      }
      this.boardState.next("in-progress");
   }

   startRules() : void {
     this.boardState.next("rules");
   }

   exitRules() : void {
    this.boardState.next("initial");
   }

}
