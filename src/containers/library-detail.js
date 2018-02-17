import React, {Component} from 'react';
import {connect} from 'react-redux';

class LibraryDetail extends Component{

  render(){
    if(!this.props.library){
      return(
        <div>
          Select a library to get started!
        </div>
      );
    }

    return(
      <div>
        <h3>Details for:</h3>
        <div>
          <b>Library</b>: {this.props.library.name}
        </div>
        <div style={{textAlign:"justify"}}>
          <b>Definition</b>: {this.props.library.definition}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    library: state.activeLibrary
  };
}

export default connect(mapStateToProps)(LibraryDetail);
