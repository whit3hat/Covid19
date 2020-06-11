import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = (props) => {
    // const [DropdownOpen, setDropdownOpen] = useState(false);

    // const toggle = () => setDropdownOpen(!DropdownOpen);

    return (
        <div>
            <p><h1>Covid-19 Tracker</h1></p>
            <Nav tabs>
                <NavItem>
                    <NavLink href='#'>US States View</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#'>Countries</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#'>FAQ'S & Updates</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navbar;