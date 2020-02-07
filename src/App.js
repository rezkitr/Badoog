import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/Home'
import CityPage from './pages/City'
import RestaurantPage from './pages/Restaurant'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact strict component={HomePage} />
            <Route path="/city/:city_id" exact strict component={CityPage} />
            <Route path="/restaurant/:restaurant_id" exact strict component={RestaurantPage} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
