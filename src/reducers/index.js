import {combineReducers} from 'redux';
import VocabReducer from './VocabReducer';

export default combineReducers({
  vocabularies: VocabReducer,
});
