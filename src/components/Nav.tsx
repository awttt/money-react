import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
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
      } > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;      
          height: 24px;
        }
         &.selected{
      color: red;
      .icon{
      fill:red;
      }
      }
  }
}
`
const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tag" activeClassName="selected">
          <Icon name='tag'/>
          标签</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
         <Icon name='money'/>
         记账</NavLink>
        </li>
        <li>
          <NavLink to="/statistic" activeClassName="selected">
          <Icon name='chart'/>
          统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav