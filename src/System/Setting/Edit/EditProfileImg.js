import React, { useState } from 'react';
import EditProfileImgPage from '../../../Pages/Setting/EditProfileImgPage';

const EditProfileImg = () => {
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
  return <EditProfileImgPage img={img} onChange={onChange} />;
};

export default EditProfileImg;
