import {NavDropdown, Nav} from "react-bootstrap";
import {Dropdown as BSD} from "react-bootstrap" ;
import {useState} from "react";
import {LinkContainer} from 'react-router-bootstrap'

export function Dropdown({children, title, to}) {
    const [show, setShow] = useState(false);

    return (

        <BSD show={show} as={Nav.Item} expand={'left'}>
            <div onMouseEnter={() => setShow(true)}
                 onMouseLeave={() => {
                     setShow(false)
                 }}>
                <LinkContainer to={to}>
                    <BSD.Toggle as={Nav.Link}>{title}</BSD.Toggle>
                </LinkContainer>
                <BSD.Menu>
                    {children}
                </BSD.Menu>
            </div>
        </BSD>

    )
}