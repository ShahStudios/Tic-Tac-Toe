import React from 'react'

import Square from '../components/Square'

function Board({squares, onClick}) {
    return (
        <div className="board-layout">
            { squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            )) }
        </div>
    )
}

export default Board