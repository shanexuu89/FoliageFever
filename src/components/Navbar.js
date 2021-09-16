import React, { useState } from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';


const Nav = styled.nav`
  height: 60px;
  display: felx;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: #fff;
  opacity: 0.9;
`;


const NavLink = css`
  color: #35503F;
  display: felx;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  
`;



const Logo = styled(Link)`
  ${NavLink}
  
  font-style: italic;
  font-size: 20px;
  font-weight: bold;
`;

const MenuBars = styled(FaBars)`
  display: none;
  color: #35503F;

  @media screen and (max-width: 768px){
    display: block;


  }
`;

const NavMenu = styled.div`
  display: felx;
  align-items: center;
  margin-right: -48px;
  
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}

  &:hover {
    color: #161F19;
    transition: all 0.2s ease-in-out;
  }
`;

const NavBtn = styled.div`
  display: felx;
  align-items: center;
  margin-right: 2px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const Navbar = ({ toggle }) => {


const [navbar, setNavbar] = useState(false);


const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);
    return (
        <Nav>
           <Logo to="/">FoliageFever</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to ={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/singnin' primary='true'>SIGN IN</Button>
            </NavBtn>
          
        </Nav>
    )
}

export default Navbar
