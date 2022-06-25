import {Map} from "../Map";
import {Page} from "./Page";
import './Contact.css'

export function Contact() {
    return (
        <Page className={'page w-75 mx-auto pt-4'}>
            <div className={'row'}>
                <h1 className={'display-6 pb-4'}>Kontakt</h1>
            </div>
            <div className={'border border-2 border-red mt-3 row rounded-2'}>

                <div className={'col-md-4 p-0'}>
                    <div className={'p-4 p-md-5 text-md-start text-center'}>
                        <nobr>
                            Lenka Hájková<br/>
                            lkijovska@gmail.com<br/>
                            +420 608 292 491<br/>
                            IČO 11367920<br/>
                            <br/>
                            Plzeňská 61,<br/>
                            Konstantinovy Lázně,<br/>
                            349 52<br/>
                        </nobr>
                    </div>

                </div>
                <div className={'row-cols-md-1 col-md-8 p-0'}>
                    <Map className={'w-100 h-100'}/>
                </div>

            </div>

        </Page>
    )
}