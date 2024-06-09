import React from 'react'
import Home from './components/crud/Home';
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import UserEdit from './components/crud/UserEdit';
import UserDetails from './components/crud/UserDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<UserEdit />} />
          <Route path="/detail/:id" element={<UserDetails />} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App