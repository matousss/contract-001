import {Container, Nav, Navbar as NB} from "react-bootstrap";

import {NavbarLink} from "./NavbarLink";
import {Dropdown} from "./Dropdown";
import {DropdownItem} from "./DropdownItem";

import './Navbar.css';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <NB className={'p-0 sticky-top bg-white border-bottom border-1 border-dark'} expand={'sm'}>
            <NB.Brand className={'mx-4'} as={Link} to={'/'}>
                Černá vila
            </NB.Brand>
            <NB.Toggle/>
           <Container fluid className={'w-10 p-0'}>
               <NB.Collapse className={'justify-content-left'}>
                   <Nav>
                       <NavbarLink to={'/'}>Domů</NavbarLink>
                       <Dropdown title={'O lokalitě'} to={'/location'}>
                           <DropdownItem to="/location#1">Koupání</DropdownItem>
                           <DropdownItem to="/location#2">Koně</DropdownItem>
                       </Dropdown>
                       <NavbarLink to={'/gallery'}>Galerie</NavbarLink>
                       <NavbarLink to={'/about-us'}><nobr>O Nás</nobr></NavbarLink>
                       <NavbarLink to={'/contact'}>Kontakt</NavbarLink>
                   </Nav>
               </NB.Collapse>
           </Container>

        </NB>
    )
}