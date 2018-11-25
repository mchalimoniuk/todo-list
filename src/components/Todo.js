import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import checkboxEmpty from '../assets/checkbox-empty.svg';
import checkboxChecked from '../assets/checkbox-checked.svg';

const Todo = props => {
  const TodoContainer = styled.div`
    display: flex;
    margin-bottom: 22px;
  `;
  const CheckboxEmpty = styled.img`
    align-self: center;
    margin-right: 30px;
  `;
  const TodoTile = styled.span`
    align-self: center;
  `;
  return (
    <TodoContainer>
      <CheckboxEmpty src={checkboxEmpty} alt="checkbox-empty" />
      <TodoTile>Kupić mleko</TodoTile>
    </TodoContainer>
  );
};

Todo.propTypes = {

};

export default Todo;