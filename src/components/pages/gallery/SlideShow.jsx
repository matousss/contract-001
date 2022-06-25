import {useState} from "react";
import {Carousel} from "react-bootstrap";

export function SlideShow({images = []}) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className={'w-100 w-md-75 mx-auto'}
                  style={{maxHeight: '384'}}
                  interval={null}
                  nextLabel={'Další'}
                  prevLabel={'Předchozí'}
        >
            {images.map(
                image =>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={'Obrázek galerie'}
                        />
                    </Carousel.Item>
            )}
        </Carousel>
    );
}
