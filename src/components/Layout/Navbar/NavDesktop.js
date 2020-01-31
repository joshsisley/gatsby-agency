import React from 'react';
import logo from 'src/static/logo_full.svg';

import Link from "gatsby-link"
import { Link as SLink } from 'react-scroll';

import {
  NavItems,
  NavItem,
} from './Navbar.style';

import NavLinks from './NavLinks';
import ToggleSwitch from '#common/ToggleSwitch';


const NavDesktop = () => {
  return (
    <>
      <SLink className="logo" smooth offset={-100} hashSpy={true} to="home">
        <img src={logo} alt="Joshua Sisley" />
      </SLink>

      <nav>
        <NavItems>
          <NavLinks NavItem={NavItem} />

          <NavItem><Link to="/blog">blog</Link></NavItem>
          {/* <NavItem>
            <ToggleSwitch />
          </NavItem> */}
        </NavItems>
      </nav>
    </>
  )
}

export default NavDesktop;