import {LinkContainer} from 'react-router-bootstrap'
import {Nav} from 'react-bootstrap'

export function NavbarLink({children, to}) {
    return (
        <Nav.Item>
            <LinkContainer to={to}>
                <Nav.Link>
                    {children}
                </Nav.Link>
            </LinkContainer>
        </Nav.Item>
    )
}

