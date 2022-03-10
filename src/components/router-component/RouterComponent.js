import { BaseComponent } from "../BaseComponent.js";
import { html, template } from "../html.js";

class RouterComponent extends BaseComponent {

    /** @type {Map<string,string>} */
    routes = null

    render() {
        if (this.routes === null) {
            this.createRoutes()
        }
        let url = new URL(window.location.href)
        let content = this.routes.get(url.pathname)
        return html(content)
    }

    createRoutes() {
        this.routes = new Map()
        let routesEl = document.createElement('div')
        routesEl.innerHTML = this.innerHTML
        for (let route of routesEl.children) {
            let path = route.getAttribute('path')
            this.routes.set(path, route.innerHTML)
        }
    }

}

customElements.define('router-component', RouterComponent);