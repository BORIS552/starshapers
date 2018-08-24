import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Offers from './Offers';
import Contact from './Contact';
import OneToOne from './OneToOne';
import Corporate from './Corporate';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/offers' component={Offers} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/offers/onetoone' component={OneToOne} />
                  <Route exact path='/offers/corporate' component={Corporate} />
               </Switch>
            </div>
         </Router>
    );
  }
}

export default App;
