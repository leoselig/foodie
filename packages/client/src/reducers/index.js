import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

export default function createRootReducer({ apolloClient }) {
  return combineReducers({
    form,
    apollo: apolloClient.reducer(),
  });
}
