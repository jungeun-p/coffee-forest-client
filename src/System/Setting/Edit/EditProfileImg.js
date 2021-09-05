import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileImgPage from '../../../Pages/Setting/EditProfileImgPage';
import { actions as userActions } from '../../../Store/user';

const EditProfileImg = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const [img, setImg] = useState({
    file: '',
    previewURL: ''
  });
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
    // formData.append('profileImageUpdateRequest', '');
    // formData.append('profileImageUpdateRequest'.deleteIndexList, [0]);
    // formData.append('profileImages', img.file.name);
    formData.append('profileImageUpdateRequest', {
      userIndex: 1,
      deleteIndexList: [0]
    });
    formData.append('profileImages', img.file);
    dispatch(userActions.editProfileImg(formData));
  };
  return (
    <EditProfileImgPage img={img} onChange={onChange} UploadImg={UploadImg} />
  );
};

export default EditProfileImg;
