export function selectBook(book){
  // Select bookmis an ActionCreator, it needs to create an action
  // an object with a type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}
