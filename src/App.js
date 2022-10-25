import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './About.js';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes
          class="route">
            <Route 
            path='/'
            element={<BestBooks />}
            ></Route>

            <Route
              /* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */
             path="/about"
             element={<About />}
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;


// TODO: Use React Router to add ability for user to navigate between Home and About "pages".

// TODO: Add an About page at path `/about` that displays the project developer's information.