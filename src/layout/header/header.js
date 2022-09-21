class mainHeader extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
        <header class="header">
        </header>
        `
    }
}
window.customElements.define('main-header', mainHeader);