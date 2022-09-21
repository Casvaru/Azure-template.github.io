import "../src/layout/nav/nav.js"
import "../src/layout/header/header.js"
import "../src/layout/content/content.js"
import "../src/layout/aside/aside.js"
import "../src/layout/footer/footer.js"

class mainIndex extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
        <div class="welcome" style="position: absolute; width: 31.25rem; height: 12.5rem;
            left: 0; right: 0; top: 0; bottom: 0; margin: auto; margin-top: 12.5rem; font-size: 20px;">
            
        <img decoding="async" loading="lazy" class="welcome__logo" style="width: 9.375rem;
            height: 9.375rem; margin-left: 10.9375rem; background: white; border-radius:50%;
            box-shadow: 0 5px 10px 0px rgba(0,0,0, .3);" src="global/logo.png" alt="Logo Asvar">
            
            <div class="welcome__wrap">
                <h4 style="position: relative; text-align: center; font-size: 1.5em; padding: 1.25rem;">Welcome to AzureTemplate</h4>
                <p class="welcome__text" style="text-align: center; padding: 0.625rem; font-size: 1rem;">more info in "README.md", to edit go to <a href="#">public/index.js</a></p>
                <h6 class="welcome__github" style="text-align: center;">Repository <a target="_blank" href="https://github.com/Casvaru/Azure-Template.git">GitHub</a></h6>
                <h6 style="text-align: center; color: darkgray;">v 1.0.3</h6>
            </div>
        </div>
        `
    }
}
window.customElements.define('main-index', mainIndex);