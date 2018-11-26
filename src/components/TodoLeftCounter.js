import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const TodoLeftCounter = props => {
  const TodoLeftCounterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
  `;
  const TodoLeftTitle = styled.div`
    font-size: 15px;
  `;
  const getCountText = () => {
    const todosCount = props.todos.filter(todo => !todo.completed).length;
      if (todosCount === 0) {
        return 'Wszystkie zadania zakończone';
      } else if (todosCount === 1) {
        return '1 niezakończone zadanie';
      } else if (todosCount >= 2 && todosCount <= 4) {
        return `${todosCount} niezakończone zadania`;
      } else if (todosCount >= 5) {
        return `${todosCount} niezakończonych zadań`;
      }
      return 'Błąd';
  };
  return (
    <TodoLeftCounterContainer>
      <TodoLeftTitle>{getCountText()}</TodoLeftTitle>
    </TodoLeftCounterContainer>
  );
};

TodoLeftCounter.propTypes = {};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
  };
};

export default connect(mapStateToProps)(TodoLeftCounter);