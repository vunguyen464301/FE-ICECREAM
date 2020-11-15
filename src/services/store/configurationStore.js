import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../../api/sagas'

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;