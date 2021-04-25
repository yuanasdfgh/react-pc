import React, { memo } from "react";

import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function AppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="https://www.baudu.com" className="logo sprite_01"></a>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
        <NavLink to="/">发现音乐</NavLink>
        <NavLink to="/friend">我的朋友</NavLink>
        <NavLink to="/mine">我的音乐</NavLink>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
