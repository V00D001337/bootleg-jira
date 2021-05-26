
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import { LoginContainer } from './login/containers/LoginContainer';
import { RegisterContainer } from './register/container/RegisterContainer';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">

            <Switch>
              <Redirect path="/" exact={true} to="/login" />
              <Route path="/login" component={LoginContainer} />
              <Route path="/register" component={RegisterContainer} />
              <Route path="*" render={() => <h1>Page Not Found</h1>} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
