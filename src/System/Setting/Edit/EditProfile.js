import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProfilePage from '../../../Pages/Setting/EditProfilePage';
import { actions as userActions } from '../../../Store/user';

const EditProfile = () => {
  const dispatch = useDispatch();
  const { userData, userProfile } = useSelector(state => state.user);
  const [profile, setProfile] = useState({
    name: userData?.name,
    password: '',
    phone: userData?.phone,
    address: userData?.address
  });

  const SaveProfile = () => {
    if (
      (profile.name && profile.password && profile.phone && profile.address) !==
      ''
    ) {
      const profileData = {
        userIndex: userData.userIndex,
        name: profile.name,
        password: profile.password,
        phone: profile.phone,
        address: profile.address
      };
      dispatch(userActions.editProfile(profileData));
      if (userProfile) {
        alert('업데이트 성공');
      }
    }
  };

  const onChange = e => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // useEffect(() => {
  //   console.log(userProfile, userData);
  // }, [userProfile]);

  return (
    <EditProfilePage
      profile={profile}
      onChange={onChange}
      SaveProfile={SaveProfile}
    />
  );
};

export default EditProfile;
