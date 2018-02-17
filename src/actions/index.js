export function selectLibrary(library){
  // selectLibrary is an ActionCreator, it needs to create an action
  // an object with a type property
  return{
    type: 'LIBRARY_SELECTED',
    payload: library
  }
}
