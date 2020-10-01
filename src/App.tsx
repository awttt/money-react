import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';
import Layout from './components/Layout';

const Wrapper = styled.div`

min-height: 100vh;
display: flex;
flex-direction: column;


`

const Main = styled.div`

flex-grow: 1;
overflow: auto;

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
        <Nav/>
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
  return (
    <Layout>
      <h2>Statistic</h2>
    </Layout>
  )
}

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  )

}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>
    </Layout>
  )

}

export default App;
