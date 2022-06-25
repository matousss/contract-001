import './Gallery.css'
import {GalleryCard, Break} from "./GalleryCard";
import {SlideShow} from "./SlideShow";
import {Page} from "../Page";





const _512 = 'https://via.placeholder.com/512x256'

const _1090 = 'https://via.placeholder.com/1920x1080'
const IMAGES = [
    'https://cdn.pixabay.com/photo/2022/06/20/05/36/landscape-7273091_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/06/23/09/46/mountain-7279430_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/06/21/08/14/scenery-7275367_1280.jpg',
]

export function Gallery() {
    return (
        <Page className={'page w-75 mx-auto'}>
            <div className={'row w-75'}>
                <h1 className={'display-6 py-4'}>Galerie</h1>
            </div>
            <div className={'gallery row'}>

                <GalleryCard img={_1090} title={'Title'}/>
                <GalleryCard img={_1090} title={'Title'}/>

                <Break/>
                <GalleryCard img={IMAGES[0]} title={'Title'}/>
                <GalleryCard img={IMAGES[1]} title={'Title'}/>
                <GalleryCard img={IMAGES[2]} title={'Title'}/>
                <Break/>
                <GalleryCard img={_512}/>
                <GalleryCard img={_512}/>
                <GalleryCard img={_512}/>
                <GalleryCard img={_512}/>


            </div>
            <div className={'col'}>
                <SlideShow images={IMAGES}/>

            </div>
        </Page>
    )
}