import {Page} from "./Page";

export function Article({title, children}) {
    return (
        <Page>
            <div className={'container-fluid pt-4 w-50'}>
                <div className={'row'}>
                    <div className={'col'}>
                        <h1 className={'display-6'}>{title}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </Page>
    );
}