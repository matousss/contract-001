import {Container, Nav, Navbar as NB} from "react-bootstrap";

import {NavbarLink} from "./NavbarLink";
import {Dropdown} from "./Dropdown";
import {DropdownItem} from "./DropdownItem";

import './Navbar.css';

export function Navbar() {
    let expand = 'md';
    return (
        <NB className={'justify-content-md-center justify-content-end p-0 sticky-top bg-white border-bottom border-danger'} expand={'sm'}>
            <NB.Toggle/>
           <Container fluid className={'w-10'}>
               <NB.Collapse className={'justify-content-center'}>
                   <Nav className={'w-10'}>
                       <NavbarLink to={'/'}>Domů</NavbarLink>
                       <Dropdown title={'Nabídka služeb'} to={'/jobs'}>
                           <DropdownItem to="/jobs#job1">Action</DropdownItem>
                           <DropdownItem to="/jobs#job2">Action</DropdownItem>
                           <DropdownItem to="/jobs#job3">Action</DropdownItem>
                           <DropdownItem to="/jobs#job4">Action</DropdownItem>
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