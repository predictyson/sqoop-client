import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Complete } from '../../assets/icons/complete.svg';
import { ReactComponent as StarFill } from '../../assets/icons/starFill.svg';

const ActivityOneButton = () => {
  // 즐겨찾기를 클릭하면 component를 변경하기 위한 state
  const [favoritesClick, setFavoritesClick] = useState('BasicIcon');
  const favoritesStatus = favoritesClick === 'BasicIcon' ? true : false;

  // 편집하기와 완료하기를 클릭하면 component를 변경하기 위한 state
  const [editClick, setEditClick] = useState('EditIcon');
  const editStatus = editClick === 'EditIcon' ? true : false;

  // 즐겨찾기를 클릭하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const FavoritesClick = () => {
    setFavoritesClick('FillIcon');
  };

  // 즐겨찾기를 해제하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const FillFavoritesClick = () => {
    setFavoritesClick('BasicIcon');
  };

  // 편집하기를 클릭하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const EditClick = () => {
    setEditClick('CompleteIcon');
  };

  // 완료하기를 클릭하면 아이콘이 바뀌는 함수 추후 서버 연결 예정
  const CompleteClick = () => {
    setEditClick('EditIcon');
  };

  return (
    <StyledActivityOneButton>
      {favoritesStatus ? (
        <StyledActivityFavoritesButton onClick={FavoritesClick}>
          <Star />
        </StyledActivityFavoritesButton>
      ) : (
        <StyledActivityFavoritesButton onClick={FillFavoritesClick}>
          <StarFill />
        </StyledActivityFavoritesButton>
      )}
      {editStatus ? (
        <StyledActivityOneEdit onClick={EditClick}>
          <Edit />
        </StyledActivityOneEdit>
      ) : (
        <StyledActivityOneEdit onClick={CompleteClick}>
          <Complete />
        </StyledActivityOneEdit>
      )}
    </StyledActivityOneButton>
  );
};

const StyledActivityOneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.315rem;

  @media screen and (max-width: 680px) {
    margin-top: 1rem;
  }
`;

const StyledActivityFavoritesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledActivityOneEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.784rem;
`;

export default ActivityOneButton;
