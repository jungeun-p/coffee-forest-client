import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainLogo from '../../assets/Img/profile/basicProfile.png';
import { signOut } from '../../Hooks/auth';
import { actions } from '../../Store/user';

const ProfilePage = ({ date }) => {
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const Logout = () => {
    signOut();
    const logout = localStorage.getItem('logout');
    dispatch(actions.logoutSuccess(logout));
  };

  return (
    <>
      {date && (
        <MainProfile>
          <Cateogry to="/mypage/manage/profileImg">
            <ProfileImage src={`${date.profileImage}` ?? mainLogo} />
          </Cateogry>
          <div className="name">{date.userName}</div>
          <div className="infos">
            <div className="office">{userData.companyName}</div>
            <div className="info">{userData.email}</div>
            <div className="info">
              {userData.position === 'ADMIN' ? '관리자' : '직원'}
            </div>
            <div className="logout" onClick={Logout}>
              🔓 로그아웃
            </div>
          </div>
          <DivideLine />
        </MainProfile>
      )}
    </>
  );
};

const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  .name {
    color: #1ca953;
    font-weight: 700;
    font-size: 30px;
    margin: 20px 0 10px 0;
  }
  .infos {
    color: #232323;
    margin-top: 5px;
    .info {
      font-weight: 400;
      font-size: 12px;
    }
    .office {
      font-weight: 700;
      font-size: 14px;
    }
    .logout {
      border: none;
      text-decoration: none;
      font-size: 15px;
      font-weight: 700;
      line-height: 20px;
      margin-top: 15px;
      cursor: pointer;
    }
  }
`;

const Cateogry = styled(Link)``;
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const DivideLine = styled.div`
  border: 2px solid #1ca953;
  margin-top: 35px;
`;

export default ProfilePage;
