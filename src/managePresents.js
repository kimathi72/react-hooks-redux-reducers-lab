const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  // your code here
  switch (action.type) {
    case "presents/increase":
      state = { numberOfPresents: state.numberOfPresents + 1}
      return state
  
    default:
      return state;
  }
}
