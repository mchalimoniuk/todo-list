import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Todo from './Todo';

const TodoList = props => {
  const TodosContainer = styled.div`
    font-size: 20px;
  `;

  return (
    <TodosContainer>
      <Todo />
      <Todo />
      <Todo />
    </TodosContainer>
  );
};

TodoList.propTypes = {

};

export default TodoList;