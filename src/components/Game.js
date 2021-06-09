import React, { useState } from 'react'

import Board from '../components/Board'
import { calculateWinner } from '../helpers'

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = i => {
        const boardClone = [...board];

        // If user click an square or if game is won, return
        if (winner || boardClone[i]) return;

        // Put an X or an O in the clicked square
        boardClone[i] = xIsNext ? 'X' : 'O';
        setBoard(boardClone);
        setXIsNext(!xIsNext);
    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start New Game
        </button>
    )

    return (
        <>
            <h1 className='recap'>Tic-Tac-Toe Game</h1>
            <Board squares={board} onClick={handleClick} />
            <div className="recap">
                <p>
                    {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
                </p>
                {renderMoves()}
                <p>Github: ShahStudios</p>
            </div>
        </>
    )
}

export default Game