import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyPageHeader from '../../components/myPage/MyPageHeader';
import MainHeader from '../../components/common/MainHeader';
import Styled from 'styled-components';
import ChangePassword from '../../containers/myPage/settings/ChangePassword.container';
import AccountConfirm from '../../containers/myPage/settings/AccountConfirm.container';
import Marketing from '../../containers/myPage/settings/Marketing.container';
import Privacy from '../../components/myPage/settings/Privacy';
import Terms from '../../components/myPage/settings/Terms';
import { setStatus } from '../../store/modules/settings/status';
const SettingsWrap = Styled.div`
  background: green;
  padding-left: 25.463vw;
  height: 560px;
  top: 0;
  .footer {
    width: 730px;
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .logout {
    margin-top: 300px;
   margin-bottom: 12px;
  }

`;
const MaterialBox = Styled.div`
top: 0;
background: skyblue;
  width: 120px;
  height: 244px;
`;
const OneDiv = Styled.div`
  background: pink;
  background: none;
  border: none;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  color: ${props => props.color};
`;
const NavbarWrap = Styled.div`
  background: yellow;
  float: left;
  display: inline-block;
  width: 130px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
const MaterialWrap = Styled.div`
  background: ivory;
  width: 603px;
  margin-left: 150px;
`;
const ScrollWrapper = Styled.div`
  background: blue;
  width: 603px;
  margin-left: 
  display: flex;
  
`;

const Settings = ({ history }) => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.status.status);
  const saveStatus = data => dispatch(setStatus(data));
  const onClick = evt => {
    saveStatus(evt.target.innerHTML);
  };
  const onClickDelete = evt => {
    saveStatus(evt.target.innerHTML);
    history.push('/mypage/settings/delete');
  };
  return (
    <>
      <MainHeader />
      <MyPageHeader settingsColor={'black'} />
      <SettingsWrap>
        <NavbarWrap>
          <OneDiv
            color={'계정 정보 확인' === status ? 'black' : '#a5a5a5'}
            onClick={onClick}
          >
            계정 정보 확인
          </OneDiv>
          <OneDiv
            color={'비밀번호 변경' === status ? 'black' : '#a5a5a5'}
            onClick={onClick}
          >
            비밀번호 변경
          </OneDiv>
          <OneDiv
            color={'마케팅 수신 설정' === status ? 'black' : '#a5a5a5'}
            onClick={onClick}
          >
            마케팅 수신 설정
          </OneDiv>
          <OneDiv
            color={'개인정보처리방침' === status ? 'black' : '#a5a5a5'}
            onClick={onClick}
          >
            개인정보처리방침
          </OneDiv>
          <OneDiv
            color={'이용약관' === status ? 'black' : '#a5a5a5'}
            onClick={onClick}
          >
            이용약관
          </OneDiv>
          <OneDiv
            color={'계정 삭제' === status ? 'black' : '#a5a5a5'}
            onClick={onClickDelete}
          >
            계정 삭제
          </OneDiv>
        </NavbarWrap>
        <ScrollWrapper>
          <MaterialWrap>
            {status === '계정 정보 확인' ? <AccountConfirm /> : <></>}
            {status === '비밀번호 변경' ? <ChangePassword /> : <></>}
            {status === '마케팅 수신 설정' ? <Marketing /> : <></>}
            {status === '개인정보처리방침' ? <Privacy /> : <></>}
            {status === '이용약관' ? <Terms /> : <></>}
          </MaterialWrap>
        </ScrollWrapper>

        <div className="footer">
          <div className="logout">로그아웃</div>
        </div>
      </SettingsWrap>
    </>
  );
};

export default Settings;
