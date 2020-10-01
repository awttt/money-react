import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './icon';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

const NavWrapper = styled.div`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
line-height: 24px;
  > ul{
   display: flex;
    
    > li{
     width: 33.3%;
     text-align: center;
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;      
        height: 24px;
      }
  }
}
`
const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name='tag'/>
          <Link to="/tag">标签</Link>
        </li>
        <li>
         <Icon name='money'/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name='chart'/>
          <Link to="/statistic">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav