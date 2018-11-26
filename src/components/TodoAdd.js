import { TODOS_CREATE_START, TODOS_NEW_TODO_TITLE_CHANGE } from '../constants/ActionTypes';

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import add from '../assets/plus.svg';

const AddTodoContainer = styled.div`
  display: flex;
  font-size: 20px;
  opacity: 0.75;
  margin-bottom: 22px;
`;
const CheckboxEmpty = styled.img`
  align-self: center;
  margin-right: 40px;
  width: 25px;
`;
const NewTodoForm = styled.form`
  width: 100%;
`;
const NewTotoGroup = styled.div``;
const NewTodoInput = styled.input`
  align-self: center;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-size: 20px;
  color: #edf2f4;
`;
const NewTodoError = styled.div`
  color: #f47382;
  font-size: 14px;
`;

const maxTotoCountError = 'Maksymalna liczba zadań, usuń coś, żeby móc dodać nowe.';

const TodoAdd = props => {
  const onNewTodoSubmit = e => {
    e.preventDefault();
    const todosCount = props.todos.length;
    if(todosCount < 10) {
      props.createTodo(props.newTodoTitle);
    } else {
      toast.error(maxTotoCountError, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  }

  const onNewTodoTitleChange = e => {
    props.onNewTodoTitleChange(e.target.value);
  }

  return (
    <AddTodoContainer>
      <CheckboxEmpty src={add} alt="add" />
      <NewTodoForm onSubmit={onNewTodoSubmit}>
        <NewTotoGroup>
          <NewTodoInput
            placeholder="Dodaj zadanie"
            value={props.newTodoTitle}
            onChange={onNewTodoTitleChange}
          />
          { props.todos.length >= 10 && <NewTodoError>{maxTotoCountError}</NewTodoError>}
        </NewTotoGroup>
      </NewTodoForm>
    </AddTodoContainer>
  );
};

TodoAdd.propTypes = {};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
    newTodoTitle: state.todo.newTodoTitle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTodo: newTaskTitle => dispatch({ type: TODOS_CREATE_START, payload: newTaskTitle }),
    onNewTodoTitleChange: newTodoTitle => dispatch({ type: TODOS_NEW_TODO_TITLE_CHANGE, payload: newTodoTitle }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);
