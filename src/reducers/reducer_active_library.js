// state arguement is not application state, only the
// state this reducer is reponsible for
export default function(state = null, action){
  switch(action.type){
    case 'LIBRARY_SELECTED':
      return action.payload;
  }

  return state;
}
