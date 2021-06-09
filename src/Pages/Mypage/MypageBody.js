import React from "react";
import { NavLink } from "react-router-dom";

const MypageBody = () => {
  return (
    <div>
      <NavLink to="/mypage">주간 일정 / </NavLink>
      <NavLink to="/monthly">월간 일정 / </NavLink>
      <NavLink to="/manageemployee">사원 관리</NavLink>
    </div>
  );
};

export default MypageBody;
