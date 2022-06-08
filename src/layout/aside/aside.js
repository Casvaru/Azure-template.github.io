class mainAside extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
        <aside class="aside">
            
        </aside>
        `
    }
}
window.customElements.define('main-aside', mainAside);