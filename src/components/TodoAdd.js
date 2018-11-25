import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import add from '../assets/plus.svg';

const TodoAdd = props => {
  const AddTodoContainer = styled.div`
    display: flex;
    font-size: 20px;
    opacity: 0.75;
  `;
  const CheckboxEmpty = styled.img`
    align-self: center;
    margin-right: 30px;
    width: 25px;
  `;
  const AddTile = styled.span`
    align-self: center;
  `;

  return (
    <AddTodoContainer>
      <CheckboxEmpty src={add} alt="add" />
      <AddTile>Dodaj zadanie</AddTile>
    </AddTodoContainer>
  );
};

TodoAdd.propTypes = {

};

export default TodoAdd;