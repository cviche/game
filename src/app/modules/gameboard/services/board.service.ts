import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { BoardMaster } from '../interfaces/board-master.interface';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardMaster: BehaviorSubject<BoardMaster> = new BehaviorSubject<BoardMaster>(this.initialBoardMaster());
  constructor() {}

   startGame() : void {
      const oldBoardMaster = this.boardMaster.getValue();

      // Creates an array from 1 to maxCards
      const newCards = new Array(oldBoardMaster.maxCards).fill(0).map((value, idx) => idx+1);

      this.boardMaster.next({...oldBoardMaster, 
        state: "in-progress",
        currentTurn: "You",
        cards: newCards
      });
   }

   endGame() : void {
    //  this.totalCards = [];
    //  this.boardCards.next([])
   }

   startRules() : void {
     const oldBoardMaster = this.boardMaster.getValue();
     this.boardMaster.next({...oldBoardMaster, state: "rules"});
   }

   exitRules() : void {
    const oldBoardMaster = this.boardMaster.getValue();
    this.boardMaster.next({...oldBoardMaster, state: "initial"});
   }

   removeCard(cardValue: number) {
      const oldBoardMaster = this.boardMaster.getValue();
     if(oldBoardMaster.currentTurn === "You") {
      const newBoardCards = oldBoardMaster.cards.filter((currentCardValue : number) => currentCardValue !== cardValue);
      this.boardMaster.next({...oldBoardMaster, 
      currentTurn: "Bot",
      cards: newBoardCards
      });
     }
    }

    initialBoardMaster() : BoardMaster {
      return {
        state: "initial",
        cards: [],
        maxCards: 6,
        currentTurn: "You",
        playerScore: 0,
        botScore: 0
      }
    }
}
