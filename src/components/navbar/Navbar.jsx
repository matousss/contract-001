import {Container, Nav, Navbar as NB} from "react-bootstrap";

import {NavbarLink} from "./NavbarLink";
import {Dropdown} from "./Dropdown";
import {DropdownItem} from "./DropdownItem";

import './Navbar.css';

export function Navbar() {
    let expand = 'md';
    return (
        <NB className={'justify-content-md-center justify-content-end p-0 sticky-top bg-white border-bottom border-1 border-dark'} expand={'sm'}>
            <NB.Toggle/>
           <Container fluid className={'w-10 p-0'}>
               <NB.Collapse className={'justify-content-center'}>
                   <Nav className={'w-10'}>
                       <NavbarLink to={'/'}>Domů</NavbarLink>
                       <Dropdown title={'Nabídka služeb'} to={'/jobs'}>
                           <DropdownItem to="/jobs#job1">POKRÝVAČSKÉ A KLEMPÍŘSKÉ PRÁCE</DropdownItem>
                           <DropdownItem to="/jobs#job2">TESAŘSKÉ PRÁCE</DropdownItem>
                           <DropdownItem to="/jobs#job3">ZEDNICKÉ PRÁCE</DropdownItem>
                           <DropdownItem to="/jobs#job4">ZATEPLENÍ STŘECHY</DropdownItem>
                       </Dropdown>
                       <NavbarLink to={'/gallery'}>Galerie</NavbarLink>
                       <NavbarLink to={'/about'}><nobr>O Nás</nobr></NavbarLink>
                       <NavbarLink to={'/contact'}>Kontakt</NavbarLink>
                   </Nav>
               </NB.Collapse>
           </Container>

        </NB>
    )
}