import React from 'react'
import Square from './Square'

const Board = ({squares, onClick}) =>(
    <div className="board">
        {squares.map((square,i)=>(
            <Square key={i} value={square} onClick={() =>onClick(i)}/>
        ))}
    </div>
)
//maps over each square then passing it into the square component with its index
export default Board

