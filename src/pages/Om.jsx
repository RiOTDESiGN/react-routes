import { Page } from './Page'

export function Om() {
  return (
    <Page title="Om" icon="./src/assets/images/about_icon.webp">
        <h3>HVEM er jeg//</h3>
        <p>Mitt navn er Erik, og jeg er en nysgjerrig og målrettet mann som for tiden lærer front-end utvikling i regi av KodeHode. Jeg trives veldig godt innen IT, og synes design og funksjonalitet er spennende. Privat så er jeg en såkalt Jack of All Trades, og driver med mye forskjellig. Musikk, fotografi, gaming, hundehold, og mekanisk arbeid på bil bl.a.
        </p>
        <br />
        <h3>HVA kan jeg	//</h3>
        <p>Mine kunnskaper er fordelt over mange felt, men i hovedsak har jeg arbeidet mest med HTML, CSS, Photoshop og web design. Jeg har også drevet en del med Wordpress.
        </p>
        <br />
        <h3>HVOR vil jeg //</h3>
        <p>I fremtiden ser jeg for meg å arbeide med design og funksjonalitet, i forbindelse med nettsider eller applikasjon produksjon. Jeg ønsker også å utvikle mine back-end kunnskaper med intensjon om å bli en fullstack utvikler.
        </p>
        <br />
        <div className="sectionRight">
            <img src="./src/assets/images/CSS3_and_HTML5.webp" alt="CSS3 and HTML5" />
            <img src="./src/assets/images/Javascript.webp" alt="Javascript" />
            <img src="./src/assets/images/React.webp" alt="React" />
            <img src="./src/assets/images/Figma.webp" alt="React" />
            <img src="./src/assets/images/Ps.webp" alt="React" />
            <img src="./src/assets/images/ChatGPT.webp" alt="React" />
            <img src="./src/assets/images/GitHUB.webp" alt="React" />
        </div>
    </Page>
  );
}