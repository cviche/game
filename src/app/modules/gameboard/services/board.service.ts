import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardState : Subject<string> = new Subject<string>();
  constructor() {}

   startGame() : void {
      this.boardState.next("in-progress");
   }

   startRules() : void{
     this.boardState.next("rules");
   }

}
