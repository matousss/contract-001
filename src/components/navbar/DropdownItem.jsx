import {Dropdown as BSD} from "react-bootstrap";
import {HashLink} from "react-router-hash-link";

export function DropdownItem({children, to}) {
    return (
        <BSD.Item as={HashLink} to={to}>
            {children}
        </BSD.Item>
    )
}