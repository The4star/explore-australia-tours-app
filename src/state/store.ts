import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import generalReducer, { getInitialLanguage, IGeneralState } from './general.state';


export interface ICombinedStates {
  general: IGeneralState
}

const rootReducer = combineReducers({
  general: generalReducer
})

const stateStore = createStore(rootReducer, applyMiddleware(ReduxThunk));
stateStore.dispatch(getInitialLanguage() as any)
export default stateStore;