import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Backdrop from "./Components/Backdrop";
import SideDrawer from "./Components/SideDrawer";
import Episodes from "./Screens/Episodes";
import Blog from "./Screens/Blog";
import About from "./Screens/About";
import Detail from "./Screens/Detail";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <div className='container mt-3'>
        <Switch>
          <Route exact path="/" component={Episodes} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/episode/:id" component={Detail} />
        </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
