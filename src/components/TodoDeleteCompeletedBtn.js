import { TODOS_DELETE_START } from '../constants/ActionTypes';


import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class TodoDeleteCompeletedBtn extends Component {
  dispatchDeleteAllCompletedTodos() {
    this.props.todos.forEach(todo => {
      if (todo.completed)
        this.props.deleteTodo(todo.id);
    });
  }

  render() {
    return (
      <DeleteCompletedBtn onClick={this.dispatchDeleteAllCompletedTodos.bind(this)}>Usuń zakończone zadania</DeleteCompletedBtn>
    );
  }
}

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