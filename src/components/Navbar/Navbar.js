import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import './style.css'

class Header extends Component {
	render() {
		// id, label, help를 제외한 값들은
		// 스프레드 연산자를 통해 ...props에 저장 
		var {collapsed, toggleNavbar, ...props} = this.props
		return (
			<div>
				<Navbar color="faded" light expand="sm">
					<NavbarBrand href="/" className="mr-auto">React CardNews Editor</NavbarBrand>
					<NavbarToggler onClick={toggleNavbar} className="mr-2" />
					<Collapse isOpen={!collapsed} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="https://github.com/Tirrilee/React-CardNews-Editor">GitHub</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)	
  	}
}

export default Header