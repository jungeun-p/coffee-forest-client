import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileImgPage from '../../../Pages/Setting/EditProfileImgPage';
import { actions as userActions } from '../../../Store/user';

const EditProfileImg = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const profileImage = userData.profileImage;
  const [img, setImg] = useState({
    file: '',
    previewURL: ''
  });
  console.log(profileImage, `image:${img.file}`);

  const onChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImg({
        file: file,
        previewURL: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const UploadImg = () => {
    const formData = new FormData();
    const request = {
      userIndex: userData.userIndex,
      deleteIndexList: [1]
    };
    formData.append('profileImageUpdateRequest', JSON.stringify(request));
    formData.append('profileImages', img.file);
    dispatch(userActions.editProfileImg(formData));
  };
  return (
    <EditProfileImgPage
      profileImage={profileImage}
      img={img}
      onChange={onChange}
      UploadImg={UploadImg}
    />
  );
};

export default EditProfileImg;
