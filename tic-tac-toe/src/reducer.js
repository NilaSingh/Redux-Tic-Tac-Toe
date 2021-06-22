const initialState = {
    winState:'',
    nextPlayer:true
}
const reducer = (state=initialState,action) =>{
    console.log(action)
    switch(action.type){
        case 'WINNER':
            return {
                ...state,
                winState:action.payload
            }
        default:
            return state
    }

}
export default reducer