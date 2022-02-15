import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardState : Subject<string> = new Subject<string>();
  boardCards: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  maxCards: number = 6;
  playersTurn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {}

   startGame() : void {
     const newCards = [];
      for(let i = 0; i < this.maxCards; i++) {
        newCards.push(i+1);
      }
      this.boardCards.next(newCards);
      this.boardState.next("in-progress");
      this.playersTurn.next(true);
   }

   endGame() : void {
    //  this.totalCards = [];
    //  this.boardCards.next([])
   }

   startRules() : void {
     this.boardState.next("rules");
   }

   exitRules() : void {
    this.boardState.next("initial");
   }

   removeCard(cardValue: number) {
     if(this.playersTurn.getValue()) {
      const newBoardCards = this.boardCards.getValue().filter((currentCardValue : number) => currentCardValue !== cardValue);
      this.playersTurn.next(false);
      this.boardCards.next(newBoardCards);
     }
    }
}
