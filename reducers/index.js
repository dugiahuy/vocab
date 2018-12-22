import { combineReducers } from 'redux';
import VocabListReducer from './VocabListReducer';

export default combineReducers({
  vocabularies: VocabListReducer,
});
