const initialState = {
    winState:'', //works
    xIsNext:true,    //works
    gameBoard:Array(9).fill(null)
}
const reducer = (state=initialState,action) =>{
    console.log(action)
    switch(action.type){
        case 'WINNER':
            return {
                ...state,
                winState:action.payload
            }
        case "MADE_MOVE":
            return {
                ...state,
                xIsNext:action.payload
            }
        case "UPDATE_HISTORY":
            return{
                ...state,
                gameBoard:action.payload
            }
        case "RESET":
            return{
                ...state,
                winState:action.payload.winner,
                gameBoard:action.payload.gameBoard
            }
        default:
            return state
    }

}
export default reducer