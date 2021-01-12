// 리덕스 적용완료
import React from 'react';
import SaveButton from './SaveButton';
import Styled from 'styled-components';
import { useEffect } from 'react';
import SaveIconOn from '../../assets/icons/SaveIconOn.svg';
import SaveIconOnHover from '../../assets/icons/SaveIconOnHover.svg';
import SaveConfirm from './SaveConfirm';
import './font.css';

const CurrentCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 358px;
    height: 496px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;

    &--question {
      font-size: 16.5px;
      font-weight: bold;
      line-height: 150%;
      word-break: keep-all;
      margin: 12px;
    }

    &--hr {
      margin: 0 auto;
      width: 326px;
      border: none;
      border-top: 1px solid #A5A5A5;
    }

    &--text {
      margin: 12px;
      width: 326px;
      flex: 1;
      box-sizing: border-box;
      border: none;
      word-break: normal;
      white-space: normal;
      font-size: 14px;
      line-height: 150%;
      resize: none;
    }

    &--textLimit {
      font-size: 10px;
      color: #A5A5A5;
      margin-right: 12px;
      text-align: right;
    }
  }

  .rightToLeft {
    animation-name: right-to-left;
    animation-duration: 1s;
  }

  @keyframes right-to-left {
    from {
      transform: translateX(278px) scale(0.743, 0.716);
      /* transform: ${props =>
        props.display === 'none' ? `scale(0.7)` : `scale(1,1)`}; */
    }
    to {
      transform: translateX(0px) scale(1, 1);
    }
  }

  textarea:focus {
    outline: none;
  }
  textarea::placeholder {
    color: #A5A5A5;
    word-break: keep-all;
  }
`;

const CurrentCard = ({
  index,
  question,
  answer,
  textValue,
  saveTextValue,
  saved,
  saveSaved,
  saveNotSaved,
  textLimit,
  saveTextLimit,
  guide,
  onClickFunc,
}) => {
  useEffect(() => {
    saveTextValue(answer);
    saveNotSaved(false);
    saveTextLimit(answer.length);
  }, [answer]);

  const onChangeFunc = event => {
    const text = event.target.value;
    const lastChar = text[text.length - 1];
    const lastText = textValue[textValue.length - 1];

    if (lastChar === lastText && (lastChar === ' ' || lastChar === '\n')) {
    } else {
      saveTextLimit(text.length);
      if (textLimit > 1000) {
        alert('글자수 제한을 초과했습니다');
        saveTextValue(text.slice(0, 1000));
      } else {
        saveTextValue(text);
      }
    }

    if (answer !== textValue) {
      saveNotSaved(true);
    } else {
      saveNotSaved(false);
    }
  };

  const hovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconOnHover);
    event.target.style.cssText = `
      border: 1px solid #195BFF; 
      background-color: white; 
      color: #195BFF;
      cursor: pointer;
    `;
  };

  const unhovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconOn);
    event.target.style.cssText = `
      border: none;
      background-color: #195BFF;
      color: white;
      cursor: default;
    `;
  };

  return (
    <CurrentCardWrap>
      <div className="card rightToLeft">
        <div className="card--question">
          <span className="card--question__number">
            sqoop {index + 1}.<br />
          </span>
          {question}
        </div>
        <hr className="card--hr" />
        <textarea
          className="card--text"
          placeholder={guide}
          value={textValue}
          onChange={onChangeFunc}
        />
        <div className="card--textLimit">{textLimit}/1000</div>
        {textValue ? (
          <SaveButton
            backgroundColor="#195BFF"
            onClick={onClickFunc}
            onMouseEnter={hovered}
            onMouseLeave={unhovered}
            text={'스쿱 저장'}
          />
        ) : (
          <SaveButton
            backgroundColor="#A5A5A5"
            color="white"
            border="none"
            text={'스쿱 저장'}
          />
        )}
        {saved && <SaveConfirm setSaved={saveSaved} />}
      </div>
    </CurrentCardWrap>
  );
};

export default CurrentCard;
