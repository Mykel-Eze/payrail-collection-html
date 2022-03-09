import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
// import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthView from './layouts/AuthView';
import DashboardView from './layouts/DashboardView';

import './css/styles.css';
import './css/fonts.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/*---==== Contents Sections  ====---*/}
          <Switch>
              <Route exact path="/">
                  <AuthView />
              </Route>
              <Route exact path="/dashboard">
                  <DashboardView />
              </Route>
          </Switch>
        {/*---==== end of Contents Sections  ====---*/}
      </div>
    </Router>
  );
}

export default App;
