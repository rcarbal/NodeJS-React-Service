import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    // must use 'form' to work with redux-form
    form: formReducer
});