import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLibrary } from './../actions/index';
import { bindActionCreators } from 'redux';
import { Image, List } from 'semantic-ui-react';

class LibraryList extends Component {
  renderList(){
    return this.props.libraries.map((library) => {
      return (
        <li key={library.name} onClick={() => this.props.selectLibrary(library)} className="list-group-item">
          {library.name}
        </li>
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
  // inside of LibraryList
  return{
    libraries: state.libraries
  };
}

// Anything returned from this function will end up as props
// on the library list container
function mapDispatchToProps(dispatch){
  // Whenever a select is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({selectLibrary: selectLibrary}, dispatch);
}

// Promomote LibraryList from a component to a container - it needs to
// know about this new dispatch method, selectLibrary. Make it
// available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);
