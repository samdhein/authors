import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './views/Main';
import CreateForm from './views/CreateForm';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/authors/new">
            <CreateForm />
          </Route>
          <Route path="/authors/:id/edit">
          <Edit />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
