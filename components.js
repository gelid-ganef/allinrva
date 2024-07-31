fetch()
class TopBanner extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        for (let a of this.getElementsByTagName("a")) {
            if (a.getAttribute("href") == window.location.pathname) {
                a.setAttribute("class", "currentPage");
            }
        }
    }
}
customElements.define("top-banner", MyAutonomousElement);
