import React, {useState} from 'react'
import Board from './Board'
import {calculateWinner} from "../helper"
import { useDispatch, useSelector } from 'react-redux';

const Game = () =>{
    const dispatch = useDispatch()
    const gameBoard = useSelector(state => state.gameBoard)
    const [history, setHistory] = useState([Array(9).fill(null)])//creating board array elements of 9 and setting each value to null to keep track of game history
    let stepNum = [0]
    const xIsNext = useSelector(state => state.xIsNext)
    const xO = xIsNext ? "X" : "O"  //decides if an x or o goes in a square
    let winner = calculateWinner(history[stepNum])//history is array of all steps that have been taken this checks if theres a winner
    winner = calculateWinner(history[stepNum])
    if(winner){
        dispatch({
        type:'WINNER',
        payload:winner
        })
      }
    const handleClick = (i) =>{  //if we click on square pass index of it in 
        const historyPoint = history.slice(0,stepNum + 1)//gets data from start to whatever point in history we are at;
        const curr= historyPoint[stepNum]
        const historyCopy = [...curr] //copy of current history

        if(historyCopy[i]) {
            return
        }  //if there has been a winner or square already has a value in in then itll return nothing because game is over or square is taken
        //if no winner and valid square selected
        if(!winner&&!historyCopy[i]){
        historyCopy[i] = xO  //this value will either be an x or O
        dispatch({
            type: "UPDATE_HISTORY",
            payload:[...historyPoint,historyCopy]
            
        })
        setHistory([...historyPoint, historyCopy]) //sets history to all the squares before + current square clicked
        stepNum=historyPoint.length
        dispatch({
            type:"MADE_MOVE",
            payload:!xIsNext,
        })

    }
    }
    console.log(gameBoard[stepNum])

    const resetGame = () => {
        stepNum=0
        dispatch({
            type:"RESET",
            payload:{
                winner:'',
                gameBoard:Array(9).fill(null),
        }})
    }
    
    return (
        <>
        <h1>Tic Tac Toe</h1>
        <Board squares={history[stepNum]} onClick={handleClick}/>
        <div className='info-wrapper'>
            <div>
            <h3>History</h3>
            <button onClick={resetGame}>Restart Game</button>
            </div>
            <h3>{winner ? "Winner: "+winner : "Next Player : "+ xO}</h3> 
            {/* if winner is not null then output winner if false output next player */}
        </div>
        </>
    )
}

export default Game