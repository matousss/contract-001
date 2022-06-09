import {Nav} from 'react-bootstrap'
import { NavLink} from "react-router-dom";

export function NavbarLink({children, to}) {
    return (
        <Nav.Item>
            <NavLink to={to} className={'nav-link'}>
                {children}
            </NavLink>
        </Nav.Item>
    )
}

