import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
// import $ from 'jquery';

import './css/styles.css';
import './css/fonts.css';

import AuthView from './layouts/AuthView';
import DashboardView from './layouts/DashboardView';

function App() {
  return (
    <div className="App">
      <AuthView />
      <DashboardView />
    </div>
  );
}

export default App;
