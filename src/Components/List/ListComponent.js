import React from 'react';
import styled from 'styled-components';
import profileBasic from '../../assets/Img/profile/basicProfile.png';
import { ButtonCommonS } from '../Button';
import { InputCommon, InputTitleS } from '../Input';

const ListArticle = () => {
  return (
    <ListWrap>
      <InformationWrap />
    </ListWrap>
  );
};

const ListWrap = styled.div`
  background: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 20px;
`;

const InformationWrap = () => {
  return (
    <InformationBox>
      <Information>
        <ProfileImg src={profileBasic} />
        <div className="profiledetail">
          <div className="name">김용휘</div>
          <div className="info">
            <div className="detail">010-1111-1111</div>
            <div className="detail">kyh@naver.com</div>
          </div>
        </div>
      </Information>
      <div className="button">
        <ButtonCommonS title="승인" />
      </div>
    </InformationBox>
  );
};

const InformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .button {
    display: none;
  }
`;

const ProfileImg = styled.img`
  width: 50px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  .profiledetail {
    margin-left: 25px;
    .name {
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 10px;
    }
    .info {
      font-weight: 400;
      font-size: 10px;
      color: #444444;
      .detail {
        margin-bottom: 3px;
      }
    }
  }
`;

const ListDetail = () => {
  return (
    <DetailWrap>
      <div className="info">
        <InformationWrap />
      </div>
      <InputTitleS title="상세정보" />
      <InputCommon placeholder="사업자 번호" />
      <InputCommon placeholder="사업자 번호" />
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  .info {
    margin-bottom: 25px;
  }
`;

export { ListArticle, ListDetail };
