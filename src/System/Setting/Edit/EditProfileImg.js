import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileImgPage from '../../../Pages/Setting/EditProfileImgPage';

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
    const imgData = {
      profileImageUpdateRequest: {
        userIndex: userData.userIndex,
        deleteIndexList: [1] // 삭제할 이미지가 있을 경우
      },
      profileImages: {
        // MultiPartFile 리스트
      }
    };
  };
  return (
    <EditProfileImgPage img={img} onChange={onChange} UploadImg={UploadImg} />
  );
};

export default EditProfileImg;
