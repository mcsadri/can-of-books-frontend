import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './AuthButtons';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" p="10px">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <NavItem><Link to="/About" className="nav-link">About</Link></NavItem>
        {this.props.auth0.isAuthenticated &&
          <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>}
        <AuthButtons />
      </Navbar>
    )
  }
}

export default withAuth0(Header);
