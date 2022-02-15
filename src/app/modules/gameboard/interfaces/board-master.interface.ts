export interface BoardMaster {
    state: string,
    cards: number[],
    maxCards: number,
    currentTurn: string,
    playerScore: number,
    playerName: string
    botScore: number
}