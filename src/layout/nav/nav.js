class mainNav extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
        <nav class="menu">
            
        </nav>
        `
    }
}
window.customElements.define('main-nav', mainNav);
