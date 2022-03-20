import React from 'react';
import accountIcon from '../../media/account.png';
import bagIcon from '../../media/bag.png';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		
        {/* 
        <Bars /
         */}
         <NavMenu>
         <NavLink to='/' activeStyle>
         <h1>TMNYC</h1>
         </NavLink>
        </NavMenu>
         
		<NavMenu>		
		<NavLink to='/shop' activeStyle>
        <img src={bagIcon} title="bag icons" width="40px"></img>
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
        <img src={accountIcon} title="user icons" width="40px"></img>
		</NavLink>
		</NavMenu>
		
	</Nav>
    
	</>
);
};

export default Navbar;
