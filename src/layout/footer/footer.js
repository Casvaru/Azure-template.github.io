class mainFooter extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
        <footer class="footer">
            
        </footer>
        `
    }
}
window.customElements.define('main-footer', mainFooter);