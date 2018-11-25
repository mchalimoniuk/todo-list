import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoLeftCounter = props => {
  const TodoLeftCounterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
  `;
  const TodoLeftTitle = styled.div`
    font-size: 15px;
  `;

  return (
    <TodoLeftCounterContainer>
      <TodoLeftTitle>1 nieukończone zadanie</TodoLeftTitle>
    </TodoLeftCounterContainer>
  );
};

TodoLeftCounter.propTypes = {

};

export default TodoLeftCounter;