import page from 'https://unpkg.com/page/page.mjs';
import { html, render } from 'https://unpkg.com/lit-html?module';
import { signUp } from './views/signup.js'
import { showAbout } from './views/about.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js'

function decorateContext(ctx, next) {
    ctx.render = function(content) {
        render(content, document.querySelector('main'));
    };
    next();
}

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/aboutus', showAbout);
page('/signup', signUp);
// page('*', notFound)




page.start();





let form = document.querySelector('form')
form.addEventListener('submit', onsubmit)

function onsubmit(e) {
    e.preventDefault()
    const formData = new FormData(form);

    const email = formData.get('email')
    const pass = formData.get('psw')
    const repass = formData.get('psw-repeat')


    let body = {
        email,
        pass,
        repass
    }


}