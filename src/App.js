import './App.css';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import Shop from '../src/pages/shoppage/Shop.component.jsx';
import {Route,Switch} from 'react-router-dom';
import Authentication from '../src/pages/authentication/Authentication.jsx';
import Header from './component/header/Header.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={Shop} />
        <Route exact path='/auth' component={Authentication} />
        
      </Switch>
    </div>
  );
}

export default App;
