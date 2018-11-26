import { TODOS_DELETE_START } from '../constants/ActionTypes';


import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DeleteCompletedBtn = styled.button`
  width: 100%;
  background: none;
  color: #f47382;
  border-color: #f47382;
  font-size: 20px;
  padding: 10px;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const TodoDeleteCompeletedBtn = props => {
  const dispatchDeleteAllCompletedTodos = () => {
    props.todos.forEach(todo => {
      if (todo.completed) {
        props.deleteTodo({ id: todo.id, title: todo.title });
      }
    });
  }

  return (
    <DeleteCompletedBtn onClick={dispatchDeleteAllCompletedTodos}>Usuń zakończone zadania</DeleteCompletedBtn>
  );
};

TodoDeleteCompeletedBtn.propTypes = {

};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch({ type: TODOS_DELETE_START, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoDeleteCompeletedBtn);
