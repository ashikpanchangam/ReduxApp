import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from './../actions/index';
import { bindActionCreators } from 'redux';
import { Image, List } from 'semantic-ui-react';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        // <li key={book.title}
        //   onClick={() => this.props.selectBook(book)}
        //   className="list-group-item">
        //   {book.title}
        // </li>
          <List.Item key={book.title}
            onClick={() => this.props.selectBook(book)}>
              <List.Content>
                <List.Header as='a'>{book.title}</List.Header>
              </List.Content>
          </List.Item>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return{
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the book list container
function mapDispatchToProps(dispatch){
  // Whenever a selec is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promomote BookList from a component to a container - it needs to
// know about this new dispath method, selectBook. Make it
// available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
