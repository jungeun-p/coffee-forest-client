import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProfilePage from '../../../Pages/Setting/EditProfilePage';

const EditProfile = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    userName: '',
    password: '',
    phone: '',
    address: ''
  });

  const SaveProfile = () => {
    if (
      (profile.userName &&
        profile.password &&
        profile.phone &&
        profile.address) !== ''
    ) {
      console.log('ok');
    }
  };

  const onChange = e => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  return (
    <EditProfilePage
      profile={profile}
      onChange={onChange}
      SaveProfile={SaveProfile}
    />
  );
};

export default EditProfile;
