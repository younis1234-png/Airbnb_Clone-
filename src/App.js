import './App.css';
import React from "react"
import Home from "./Home"
import Header from "./Header";
import Footer from "./Footer"
import SearchPage from "./SearchPage"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (

    <div className="App">
      <Router>

      <Header />

      <Switch>

        {/* our search page */}
          <Route path="/search">
            <SearchPage />
          </Route>

          {/* our home page always at the bottom */}
          <Route path="/">
            <Home />
          </Route>

      </Switch>
      

      <Footer />

      </Router>
      

{/* // Home**** */}
    {/* // header */}

    {/* // Banner(search) */}

    {/* // Cards */}

    {/* // Fotter  */}
{/* // Homeend*** */}

{/* // searchPage */}
  {/* header */}
    </div>
    
 
  );
}

export default App;
