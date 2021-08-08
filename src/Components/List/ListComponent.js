import React from 'react';
import styled from 'styled-components';
import profileBasic from '../../assets/Img/profile/basicProfile.png';
import { ButtonCommonS } from '../Button';
import { InputCommon, InputTitleS } from '../Input';

const ListArticle = ({ onClick, acceptance, name, phone, email }) => {
  return (
    <ListWrap
    // onClick={onClick}
    >
      <InformationWrap
        acceptance={acceptance}
        name={name}
        phone={phone}
        email={email}
        onClick={onClick}
      />
    </ListWrap>
  );
};

const ListWrap = styled.div`
  background: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
`;

const InformationWrap = ({ onClick, acceptance, name, phone, email }) => {
  return (
    <InformationBox>
      <Information>
        <ProfileImg src={profileBasic} />
        <div className="profiledetail">
          <div className="name">{name}</div>
          <div className="info">
            <div className="detail">{phone}</div>
            <div className="detail">{email}</div>
          </div>
        </div>
      </Information>
      <ButtonWrap acceptance={acceptance === 'allow' ? true : false}>
        <ButtonCommonS title="승인" onClick={onClick} />
      </ButtonWrap>
    </InformationBox>
  );
};

const InformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ButtonWrap = styled.div`
  display: ${props => (props.acceptance ? 'inline' : 'none')};
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

const ListDetail = ({
  onClick,
  acceptance,
  name,
  phone,
  email,
  businessNumber,
  companyName,
  address
}) => {
  return (
    <DetailWrap>
      <div className="info">
        <InformationWrap
          onClick={onClick}
          name={name}
          phone={phone}
          email={email}
          acceptance={acceptance}
        />
      </div>
      <InputTitleS title="상세정보" />
      <InputCommon placeholder="사업자 번호" value={businessNumber} />
      <InputCommon placeholder="회사명" value={companyName} />
      <InputCommon placeholder="주소" value={address} />
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  .info {
    margin-bottom: 25px;
  }
`;

export { ListArticle, ListDetail };
