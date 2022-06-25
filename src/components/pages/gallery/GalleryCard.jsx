import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export const GalleryCard = ({img, title, to = ''}) =>
    <Card as={Link} to={to} className={'col p-0 m-2 border-dark'}>
        <Card.Img src={img}/>
        {title ? <Card.Title>{title}</Card.Title> : ''}
    </Card>

export const Break = () => <div className={'w-100'}/>