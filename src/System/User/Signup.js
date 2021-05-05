import React, { useState } from "react";
import Signform from "../../Pages/Signup/Signform";

const Signup = () => {
  const [ceo, setCeo] = useState({
    companyName: "",
    address: "",
    businessNumber: "",
    email: "",
    pw: "",
    name: "",
    phone: "",
    position: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCeo((state) => ({ ...state, [name]: value }));
  };

  const onClick = () => {
    alert(ceo.position);
  };
  return <Signform ceo={ceo} onChanges={onChange} onClick={onClick} />;
};

export default Signup;
