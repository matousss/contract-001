import {Page} from "./Page";
import image from '../../assets/tower-5475850.jpg';

export function Home() {
    return (
        <Page>
            <div className={'container-fluid'}>
                <div className={'row'} style={{position: "relative"}}>
                    <img src={image} className={'img-fluid p-0'} alt={'intro image'}/>
                    <div className={'text-center position-absolute text-white'} style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}>
                        <h1 className={'display-2'}>Černá vila</h1>
                    </div>
                </div>
            </div>


        </Page>
    )
}