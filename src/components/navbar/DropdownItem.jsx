import {Dropdown as BSD} from "react-bootstrap";
import {Link} from "react-router-dom";

export function DropdownItem({children, to}) {
    return (
        <BSD.Item as={Link} to={to}>
            {children}
        </BSD.Item>
    )
}