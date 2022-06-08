import {Dropdown as BSD} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

export function DropdownItem({children, to}) {
    return (
        <LinkContainer to={to}>
            <BSD.Item>
                {children}
            </BSD.Item>
        </LinkContainer>
    )
}