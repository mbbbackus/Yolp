import React, { Component } from "react";
import axios from "axios";
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/Restaurant";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const IndexPage = () => { return (<br/>)};

const AboutPage = () => {
  return (
    <h3>About Page</h3>
  );
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <main className="content">
        <Router>
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/"><img src={process.env.PUBLIC_URL + "/yolp.png"} class="logo-header"/></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/restaurants">Restaurants</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <Route path="/" component={IndexPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/restaurant/:restaurantId" component={Restaurant} />
        </Router>
      </main>
    );
  }
}
export default App;