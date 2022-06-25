import {Article} from "./Article";
import {Map} from "../Map";

export function Location() {
    return (
        <div className={'multi-article'}>
            <Article title={'Vila'}>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis pulvinar. In laoreet, magna id viverra
                    tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Phasellus et lorem id
                    felis nonummy placerat. Aenean placerat. Integer rutrum, orci vestibulum ullamcorper ultricies,
                    lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Fusce consectetuer risus a nunc.
                    Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Integer tempor. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Aliquam ornare wisi eu metus. Fusce suscipit libero eget elit. Maecenas lorem. Nam quis nulla.</p>

                <p>Aliquam ante. Duis pulvinar. Aliquam erat volutpat. Nullam at arcu a est sollicitudin euismod. Duis
                    bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus.
                    Phasellus rhoncus. Mauris tincidunt sem sed arcu. Praesent in mauris eu tortor porttitor accumsan.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? Maecenas fermentum, sem in pharetra pellentesque, velit turpis
                    volutpat ante, in pharetra metus odio a lectus. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Maecenas lorem. Quisque porta. In sem justo, commodo ut, suscipit at, pharetra vitae,
                    orci.</p>

                <p>Aenean id metus id velit ullamcorper pulvinar. Donec quis nibh at felis congue commodo. Phasellus
                    enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sit amet magna in magna gravida
                    vehicula. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. In rutrum. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Praesent
                    dapibus. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem
                    purus in lacus. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio,
                    vitae placerat pede sem sit amet enim.</p>
                <div className="ratio ratio-16x9 mt-5 mb-5">
                    <Map/>
                </div>
            </Article>
            <Article id={'koupani'} title={'Koupání'}>
                <p>
                    Hradištský vrch je sopečného původu. Jedná se o tzv. sopečnou - čedičovou kupu.
                </p>
                <p>
                    Čedič je vyvřelina (láva), která rychlým vychladnutím vykrystalizovala do šestibokých sloupců. Zde
                    se vytvořily čedičové pecky od 2
                    cm až po 2 metry velké valouny. Místní čedič je bohatý na olivíny, augity i amfiboly a místy se
                    objevují
                    i sopečné tufy.
                </p>
                <p>
                    Na vrchu se nachází sopečná propadlina o velikosti více než 100 ha, na které se
                    nacházelo slovanské a keltské osídlení s více než 5000 lidmi. Obvodové opevnění měřilo 3,7 km a v té
                    době
                    bylo sídliště jedno z nejrozsáhlejších na našem území. Po několik století byl vrch i významnou
                    těžební
                    lokalitou. V roce 1891 měl již 100 dělníků a teprve roku 1995 byla devastující těžba v třípatrovém
                    lomu
                    ukončena.
                </p>
                <p>
                    V nejnižším patře lomu se v současné době nachází jezero o hloubce 13 metrů a velikosti cca 12 000
                    m². Jezero zásobují vodou tři silné prameny a v podstatě se jedná o spodní hladinu tohoto vrchu.
                    Průzračnost vody je do 4 m.
                </p>
                <img className="img-fluid" src="https://via.placeholder.com/1920x1080" alt="Jezero"></img>
            </Article>
            <Article id={'kone'} title={'Koně'}>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ac dolor sit amet purus malesuada
                    congue. Nulla pulvinar eleifend sem. Integer imperdiet lectus quis justo. Donec ipsum massa,
                    ullamcorper in, auctor et, scelerisque sed, est. Phasellus rhoncus. Aliquam erat volutpat. Duis
                    sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Temporibus autem quibusdam et
                    aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                    molestiae non recusandae. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Mauris
                    dictum facilisis augue. Integer pellentesque quam vel velit. Vivamus ac leo pretium faucibus.
                    Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Morbi scelerisque luctus
                    velit.</p>

                <p>Mauris dictum facilisis augue. Aliquam erat volutpat. Cras elementum. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Itaque earum rerum hic tenetur a sapiente
                    delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
                    asperiores repellat. Vivamus ac leo pretium faucibus. Duis pulvinar. Aenean placerat. Pellentesque
                    pretium lectus id turpis. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                    Praesent id justo in neque elementum ultrices. Nam libero tempore, cum soluta nobis est eligendi
                    optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                    assumenda est, omnis dolor repellendus.</p>
            </Article>
        </div>
    );
}