import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "./components/board/board.component";

const gameboardRoutes: Routes = [
{path: '', component: BoardComponent}
]

@NgModule({
imports: [RouterModule.forChild(gameboardRoutes)],
exports: [RouterModule]
})
export class GameboardRoutingModule {}