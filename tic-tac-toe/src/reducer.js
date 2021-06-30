const initialState = {
    winState:'', //works
    xIsNext:true,    
    history:Array(9).fill(null)
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
        default:
            return state
    }

}
export default reducer