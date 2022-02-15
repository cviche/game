export interface BoardMaster {
    state: string,
    cards: number[],
    maxCards: number,
    currentTurn: string,
    playerScore: number,
    botScore: number
}