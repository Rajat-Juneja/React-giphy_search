export const Reducer = (state={},action) =>{
    if(action.type=='search'){
        state = {...state,
        'searchedData':action.payLoad
        }
        return {...state};
    }
    return state;
}