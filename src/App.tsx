import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
border: 1px solid red;
min-height: 100vh;
display: flex;
flex-direction: column;

`

const Main = styled.div`
border: 1px solid green;
flex-grow: 1;
overflow: auto;
`

const Nav = styled.div`
border: 1px solid blue;
  > ul{
   display: flex;
    
    > li{
     width: 33.3%;
     text-align: center;
     padding: 16px;
  }
}

`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
        <Switch>
          <Route path="/tag">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistic">
            <Statistic />
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        </Main>
        <Nav>
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
        </Nav>
      </Wrapper>
    </Router>

  );
}

function NoMatch() {
    return(
      <div>页面不存在</div>
    )
}

function Statistic() {
  return <h2>Statistic</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

export default App;
