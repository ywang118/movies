const defaultState= {
  allMovies: [],
  index:0
}

export default (state=defaultState, action)=> {
  const newState = {...state}
  switch (action.type) {
    case "UPDATE_ALL_MOVIES":
      newState.allMovies = action.allMovies
      return newState
    case "GO_BACK":
       newState.index = newState.index - 9
       return newState
    case "GO_FORWARD":
       newState.index = newState.index + 9
       return newState
      default:
        return state
    }
  }
