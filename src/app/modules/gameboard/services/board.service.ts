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

   startGame(playerName: string) : void {
      const oldBoardMaster = this.boardMaster.getValue();

      // Creates an array from 1 to maxCards
      const newCards = new Array(oldBoardMaster.maxCards).fill(0).map((value, idx) => idx+1);

      this.boardMaster.next({...oldBoardMaster, 
        state: "in-progress",
        currentTurn: "You",
        cards: newCards,
        playerName,
        playerScore: 0,
        botScore: 0
      });
   }

   endGame() : void {
      const oldBoardMaster: BoardMaster = this.boardMaster.getValue();
      const {playerScore, botScore, playerName} = oldBoardMaster;
      const [playerWon, rule]: [boolean, string] = this.playerWins(playerScore, botScore);
      const winner: string = playerWon ? playerName : "Bot";
      this.boardMaster.next({...oldBoardMaster, state: "end", winner, rule});
   }

   playerWins(playerScore: number, botScore: number): [boolean, string] {
      let rules = Math.floor(Math.random()*2);
      const ruleStringSmall = "The smaller number wins!";
      const ruleStringLarge = "The larger number wins!";
      if(rules === 0) {
        return playerScore > botScore ? [true, ruleStringLarge] : [false, ruleStringLarge];
      }
      else {
        return playerScore > botScore ? [false, ruleStringSmall] : [true, ruleStringSmall];

      }
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
        botScore: 0,
        playerName: "",
        winner: "",
        rule: ""
      }
    }
}
