import {Page} from "./Page";
import background from './../../assets/mainBackground.jpg'

export function Home() {
    return (
        <Page>
            <div className={'m-0 p-0'}>
                <div className={'row w-100 vh-100 m-0'} style={{
                    position: "relative",
                    background: 'no-repeat center center ',
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover'
                }}>

                    <div className={'text-center position-absolute text-white'} style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}>
                        <h1 className={'display-2'}>Lorem ipsum</h1>
                    </div>
                </div>
                <div className={'row'}>

                </div>
            </div>
        </Page>
)
}