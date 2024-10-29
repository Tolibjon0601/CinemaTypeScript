type LanguageAction =
  | { type: 'SET_LANGUAGE'; payload: 'uz' | 'ru' | 'en' };

export interface LanguageState {
  language: 'uz' | 'ru' | 'en';
}

const initialState: LanguageState = {
  language: 'uz',
};

const languageReducer = (
  state: LanguageState = initialState,
  action: LanguageAction
): LanguageState => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
