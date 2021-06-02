
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import { LoginContainer } from './login/containers/LoginContainer';
import { RegisterContainer } from './register/container/RegisterContainer';
import { MainPageContainer } from './main-page/container/MainPageContainer';
import { NavBar } from './core/components/NavBar';
import {KanbanView} from './kanban/components/KanbanView'


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
              <div>
                <NavBar />
                <Route path="/mainPage" component={MainPageContainer} />
                <Route path="/kanban" component={KanbanView}/>
              </div>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
