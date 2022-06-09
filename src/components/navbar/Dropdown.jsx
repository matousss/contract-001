import {NavDropdown, Nav} from "react-bootstrap";
import {Dropdown as BSD} from "react-bootstrap" ;
import {useState} from "react";
import {NavLink} from "react-router-dom";

export function Dropdown({children, title, to}) {
    const [show, setShow] = useState(false);

    return (

        <BSD show={show} as={Nav.Item} expand={'left'}>
            <div onMouseEnter={() => setShow(true)}
                 onMouseLeave={() => {
                     setShow(false)
                 }}>

                <BSD.Toggle as={NavLink} to={to} className={'nav-link'}>{title}</BSD.Toggle>

                <BSD.Menu>
                    {children}
                </BSD.Menu>
            </div>
        </BSD>

    )
}