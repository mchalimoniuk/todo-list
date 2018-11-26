import { TODOS_CREATE_START, TODOS_NEW_TODO_TITLE_CHANGE } from '../constants/ActionTypes';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
const NewTodoInput = styled.input`
  align-self: center;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-size: 20px;
  color: #edf2f4;
`;

class TodoAdd extends Component {
  onNewTodoSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.props.newTodoTitle);
  }

  onNewTodoTitleChange(e) {
    this.props.onNewTodoTitleChange(e.target.value);
  }

  render() {
    return (
      <AddTodoContainer>
        <CheckboxEmpty src={add} alt="add" />
        <NewTodoForm onSubmit={this.onNewTodoSubmit.bind(this)}>
          <NewTodoInput
            placeholder="Dodaj zadanie"
            value={this.props.newTodoTitle}
            onChange={this.onNewTodoTitleChange.bind(this)}
          />
        </NewTodoForm>
      </AddTodoContainer>
    );
  }
}

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