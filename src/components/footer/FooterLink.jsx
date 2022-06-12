import {Link} from "react-router-dom";

export function FooterLink({to, label}) {
    return (
            <Link to={to} className="footer-link row">
                <nobr>
                    {label}
                </nobr>
            </Link>

    );
}