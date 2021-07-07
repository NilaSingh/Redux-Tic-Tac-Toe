import React from 'react'
import Board from './Board'
import {calculateWinner} from "../helper"
import { useDispatch, useSelector } from 'react-redux';

let steps=0
let hist=[Array(9).fill(null)]
let newGame=true

const Game = () =>{
    const dispatch = useDispatch()
    const gameBoard = useSelector(state => state.gameBoard)
    steps=steps++
    const xIsNext = useSelector(state => state.xIsNext)
    const xO = xIsNext ? "X" : "O"  //decides if an x or o goes in a square
    let winner = calculateWinner(hist[steps])//history is array of all steps that have been taken this checks if theres a winner
    winner = calculateWinner(hist[steps])
    if(winner){
        dispatch({
        type:'WINNER',
        payload:winner
        })
      }
    if(newGame===true){
        dispatch({
            type: "UPDATE_HISTORY",
            payload:hist
            
        })
        newGame=false
    }
    const handleClick = (i) =>{  //if we click on square pass index of it in 
        const historyPoint = hist.slice(0,steps + 1)//gets data from start to whatever point in history we are at;
        const curr= historyPoint[steps]
        const historyCopy = [...curr] //copy of current history
        if(historyCopy[i]) {
            return
        }  //if there has been a winner or square already has a value in in then itll return nothing because game is over or square is taken
        //if no winner and valid square selected
        let totalHist=[...historyPoint, historyCopy]
        hist.push(totalHist[totalHist.length-1])

        if(!winner&&!historyCopy[i]){
        historyCopy[i] = xO  //this value will either be an x or O
        dispatch({
            type: "UPDATE_HISTORY",
            payload:hist
            
        })

        steps=historyPoint.length
        dispatch({
            type:"MADE_MOVE",
            payload:!xIsNext,
        })

    }
    }

    const resetGame = () => {
        steps=0
        hist=[Array(9).fill(null)]
        newGame=true
        dispatch({
            type:"RESET",
            payload:{
                winner:'',
                gameBoard:hist,
        }})
    }
    
    return (
        <>
        <h1>Tic Tac Toe</h1>
        <Board squares={hist[steps]} onClick={handleClick}/>
        <div className='info-wrapper'>
            <div>
            <h3>History</h3>
            <button onClick={resetGame}>Begin New Game</button>
            </div>
            <h3>{winner ? "Winner: "+winner : "Next Player : "+ xO}</h3> 
            {/* if winner is not null then output winner if false output next player */}
        </div>
        </>
    )
}

export default Game