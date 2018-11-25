import { TODOS_FETCH_START } from '../constants/ActionTypes';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    return this.props.todos.map(todo =>
      <Todo key={todo.id} id={todo.id} title={todo.title} done={todo.completed} />
    );
  }

  render() {
    const TodosContainer = styled.div`
      font-size: 20px;
    `;

    return (
      <TodosContainer>
        {this.renderTodos.bind(this)()}
      </TodosContainer>
    );
  }
}

TodoList.propTypes = {

};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch({ type: TODOS_FETCH_START }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

