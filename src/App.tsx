import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Tags from './views/Tags';
import Money from './views/Money';
import Statistic from './views/Statistic';
import styled from 'styled-components';
import {TagEdit} from './views/TagEdit';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
    <Router>

        <Switch>
          <Route path="/tag/:tag" exact>
            <TagEdit />
          </Route>
          <Route path="/tag" exact>
            <Tags />
          </Route>

          <Route path="/money" exact>
            <Money />
          </Route>
          <Route path="/statistic" exact>
            <Statistic />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
      </AppWrapper>
  );
}

function NoMatch() {
    return(
      <div>页面不存在</div>
    )
}







export default App;
