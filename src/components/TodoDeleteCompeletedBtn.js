import { TODOS_DELETE_START } from '../constants/ActionTypes';


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TodoDeleteCompeletedBtn extends Component {
  dispatchDeleteAllCompletedTodos() {
    this.props.todos.forEach(todo => {
      if (todo.completed)
        this.props.deleteTodo(todo.id);
    });
  }

  render() {
    return (
      <button onClick={this.dispatchDeleteAllCompletedTodos.bind(this)}>Usuń zakończone zadania</button>
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