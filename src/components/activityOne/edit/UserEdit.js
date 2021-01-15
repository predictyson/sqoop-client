import React from 'react';
import styled from 'styled-components';

const ActivityOneUserData = props => {
  const { text, onChange, question, index } = props;
  return (
    <StyledUserData className="UserData">
      <>
        <StyledQuestionData>
          {index}. {question}
        </StyledQuestionData>
        <StyledAnswerData
          className="AnswerData"
          value={text}
          onChange={onChange}
        />
      </>
    </StyledUserData>
  );
};

const StyledUserData = styled.div`
  width: 41.6vw;
  margin-top: 1vw;
`;

const StyledQuestionData = styled.div`
  margin-bottom: 0.9vw;
  margin-left: 1.9vw;
  font-size: 1vw;
  font-weight: 700 !important;
  line-height: 150%;
`;

const StyledAnswerData = styled.textarea`
  width: 39.1vw;
  margin-left: 2.5vw;
  font-size: 0.8vw;
  font-weight: 400 !important;
  line-height: 150%;
  border: none;
  outline: none;
  height: 'scrollheight';

  :hover {
    background-color: #eeeeee;
  }
`;

export default ActivityOneUserData;
