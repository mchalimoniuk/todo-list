import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import styled from 'styled-components';

import reducers from '../reducers';
import rootSaga from '../sagas';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import TodoLeftCounter from './TodoLeftCounter';

import '../reset.css';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);


const App = props => {
  const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #edf2f4;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
  `;
  const MainContainer = styled.div`
    flex-basis: 600px;
    background-color: #2b2d42;
    color: #edf2f4;
    padding: 16px;
    box-shadow: 2px 0px 15px 0px rgba(0,0,0,0.75);
  `;
  const TodosContainer = styled.div`
    padding: 44px;
  `;
  const TodosHeader = styled.h1`
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.8em;
  `;

  return (
    <Provider store={store}>
      <AppContainer>
        <MainContainer>
          <TodosHeader>TODO List</TodosHeader>
          <TodoLeftCounter />
          <TodosContainer>
            <TodoList />
            <TodoAdd />
          </TodosContainer>
        </MainContainer>
      </AppContainer>
    </Provider>
  );
};

App.propTypes = {
};

export default App;