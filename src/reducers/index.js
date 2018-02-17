import { combineReducers } from 'redux';
import LibraryReducer from './reducer_libraries';
import ActiveLibrary from './reducer_active_library';

const rootReducer = combineReducers({
  libraries: LibraryReducer,
  activeLibrary: ActiveLibrary
});

export default rootReducer;
