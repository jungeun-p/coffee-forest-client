import React from 'react';

const EditProfile = ({ profile }) => {
  return profile.map(it => <div>{it.name}</div>);
};

export default EditProfile;
