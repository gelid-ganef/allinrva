//this class defines a consistent top banner for every site page
//import into html page using this code
/*
<script src="components.js" type="text/javascript" defer></script>
*/
const bannerTemplate = document.createElement('template');

bannerTemplate.innerHTML = `
<!--TOP-BANNER web component-->
<link rel="stylesheet" href="./components/bannerstyle.css" />
<div id=banner>
<header>
    <h1><img src="./assets/logo_lg.png" ; alt="All In!" ; height=200 />
        <slot class="sub">events in RVA</slot>
    </h1>
</header>
<div id=navbar><nav>
    <ul class="sideways">
        <li><a class="current" href="./index.html">home</a></li>
        <li><a href="./about.html">about us</a></li>
        <li><a href="./blog.html">stories</a></li>
        <li><a href="./events.html">plan an event</a></li>
        <li><a href="./volunteer.html">get involved</a></li>
    </ul>
</nav></div>
</div>`
    
class TopBanner extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(bannerTemplate.content)
    }
}
customElements.define("top-banner", TopBanner);
