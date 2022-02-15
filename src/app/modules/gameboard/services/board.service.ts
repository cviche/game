import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { BoardMaster } from '../interfaces/board-master.interface';
import { CardChosen } from '../interfaces/card-chosen.interface';

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
      const oldBoardMaster : BoardMaster = this.boardMaster.getValue();
      const updatedData: CardChosen = {};
      const newBoardCards : number[] = oldBoardMaster.cards.filter((currentCardValue : number) => currentCardValue !== cardValue);
      updatedData.cards = newBoardCards;
      if(oldBoardMaster.currentTurn === "You") {
        updatedData.currentTurn = "Bot";
        updatedData.playerScore = oldBoardMaster.playerScore + cardValue;
      }
      else {
        updatedData.currentTurn = "You";
        updatedData.botScore = oldBoardMaster.botScore + cardValue;
      }
      this.boardMaster.next({...oldBoardMaster, 
        ...updatedData
      });
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
