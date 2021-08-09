import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import LandingPage from './LandingPage'

function App(){
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={LandingPage} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;