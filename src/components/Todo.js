import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import checkboxEmpty from '../assets/checkbox-empty.svg';
import checkboxChecked from '../assets/checkbox-checked.svg';

const Todo = ({ title, done }) => {
  const TodoContainer = styled.div`
    display: flex;
    margin-bottom: 22px;
  `;
  const Checkbox = styled.img`
    align-self: center;
    margin-right: 30px;
  `;
  const TodoTile = styled.span`
    align-self: center;
  `;

  const renderCheckboxIcon = () => {
    return done
      ? <Checkbox src={checkboxChecked} alt="checkbox-checked" />
      : <Checkbox src={checkboxEmpty} alt="checkbox-empty" />
  }

  return (
    <TodoContainer>
      {renderCheckboxIcon()}
      <TodoTile>{title}</TodoTile>
    </TodoContainer>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Todo;