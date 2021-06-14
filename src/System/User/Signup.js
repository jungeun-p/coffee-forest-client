import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import SignBody from "../../Pages/Signup/SignBody";
import { actions } from "../../Store/user";
import { API_HOST } from "../../Lib/constant";

const Signup = () => {
  const [user, setUser] = useState({
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
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => ({ ...state, [name]: value }));
  };

  // redux-saga로 dispatch(action, data) 전달
  // const onClick = async () => {
  const onClick = () => {
    let user = {
      userSaveRequest: {
        email: user.email,
        password: user.password,
        position: "ADMIN",
        name: user.name,
        phone: user.phone,
        address: user.address,
      },
      companySaveRequest: {
        name: user.companyName,
        address: user.companyAddress,
        businessNumber: user.businessNumber,
      },
    };
    dispatch(actions.signRequest, user);
    //setLoading(false);
    // const res = await fetch(`http://192.168.60.103:80/users`, {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     userSaveRequest: {
    //       email: user.email,
    //       password: user.password,
    //       position: "ADMIN",
    //       name: user.name,
    //       phone: user.phone,
    //       address: user.address,
    //     },
    //     companySaveRequest: {
    //       name: user.companyName,
    //       address: user.companyAddress,
    //       businessNumber: user.businessNumber,
    //     },
    //   }),
    // });
    // const data = await res.json();
    // console.log(data);
    axios
      .post(`${API_HOST}users`, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    //setLoading(true);
  };

  return <SignBody user={user} onChange={onChange} onClick={onClick} />;
};

export default Signup;
