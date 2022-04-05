import Navbar from "./PortfolioContainer/Navbar/navbar";
import Home from "./PortfolioContainer/Home/home";
import Footer from "./PortfolioContainer/Footer/footer";
import About from "./PortfolioContainer/About/about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Resume from "./PortfolioContainer/Resume/resume";
import Interest from "./PortfolioContainer/interest/interest";
import Contact from "./PortfolioContainer/Contact/contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home/>  */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/interest">
            <Interest />
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
