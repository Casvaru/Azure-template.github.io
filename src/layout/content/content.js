class mainContent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
        <div class="content">
            
        </div>
        `
    }
}
window.customElements.define('main-content', mainContent);