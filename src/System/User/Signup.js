import React, { useState } from "react";
import Signform from "../../Pages/Signup/Signform";

const Signup = () => {
  const [ceo, setCeo] = useState({
    email: "",
    pw: "",
    name: "",
    phone: "",
    address: "",
    position: "",
    companyName: "",
    companyAddress: "",
    businessNumber: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCeo((state) => ({ ...state, [name]: value }));
  };

  const onClick = () => {
    alert(ceo.position);
  };
  return <Signform ceo={ceo} onChange={onChange} onClick={onClick} />;
};

export default Signup;
