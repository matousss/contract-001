import {Page} from "./Page";

export function Home() {
    return (
        <Page>
            <div className={'m-0 p-0'}>
                <div className={'row w-100 vh-100 m-0'} style={{
                    position: "relative",
                    background: 'url(./2.jpg) no-repeat center center ',
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