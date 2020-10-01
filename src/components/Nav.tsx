import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.div`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
line-height: 24px;
  > ul{
   display: flex;
    
    > li{
     width: 33.3%;
     text-align: center;
     padding: 16px;
  }
}
`
const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tag">标签</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistic">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav