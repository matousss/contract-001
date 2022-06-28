import {Article} from "./Article";

export function About() {
    return (
        <Article title={'O Mně'}>
            <img className="text-start" src="https://via.placeholder.com/720x960" alt="profilová fotka" style={{
                float:'right',
                margin: '1rem',
                width: '15rem',
            }}/>
            <p>

                Narodila jsem se 27.10.1969 v Plzni a dětství strávila v Tachově.
                Vždy jsem inklinovala k humanitním oborům a umění. Od maminky a babičky jsem okoukala hodně o
                bylinkách, jejich využití a pomoci v běžném životě.
            </p>
            <p>
                Pak následovalo studium maturitního oboru Kosmetička, vizážistka v Hradci Králové, práce
                Kosmetičky v Praze, tříletý pobyt v Kanadě, kde jsem získala praxi. Také se mi narodil můj první syn.
                Potřeba rozšířit vědomosti v celostním smyslu mě přivedla ke škole aromaterapie, kde jsem se
                seznámila s energetickými systémy v těle, základy akupresury, různými druhy masáží a naučila se
                vyrobit prakticky všechny kosmetické přípravky a léčivé tinktury. S tím šlo ruku v ruce studium
                psychologie, zdravého stravování a cvičení, hlavně při problémech s páteří. Absolvovala jsem dva
                stupně Reiki. Díky znalosti angličtiny jsem měla možnost čerpat i z cizí literatury. Po narození druhého
                syna jsem absolvovala kurz osobního rozvoje u Stars edge international a získala zde certifikát mistra
                výuky.
            </p>
            <p>
                Vlastní praxi jsem provozovala v Tachově a zanedlouho přibyla i výuka angličtiny a po narození dcery
                studium pedagogiky ve Svatém Janu pod Skalou. K tomu jsem ve svém volnu aktivně zpívala a
                vyráběla keramiku. Ta mě oslovila natolik, že další kurz byla rekvalifikace v oboru Umělecký hrnčíř,
                točíř a objevení arteterapie.
                Děti už jsou z domu a život mě přivedl na vysněné místo, do Konstantinových Lázní. Tady, v krásné
                přírodě mohu sbírat bylinky, získávat železo pro dekoraci keramiky a provozovat vše, co mě baví a
                miluji.
            </p>
        </Article>
    );
}