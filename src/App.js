import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './screens/home';
import { LoginPage } from './screens/login';
import { PrivateRoute } from './components/privateRoute';
import { NewDragon } from './screens/newDragon';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path="/new-dragon" component={NewDragon} />
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
