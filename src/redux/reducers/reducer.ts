import { combineReducers } from 'redux';
import languageReducer, { LanguageState } from './languageReducer';

export interface RootState {
  language: LanguageState;
}

const rootReducer = combineReducers<RootState>({
  language: languageReducer,
});

export default rootReducer;
