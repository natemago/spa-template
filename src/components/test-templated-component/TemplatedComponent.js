import { BaseComponent } from "../BaseComponent.js";
import { html, template } from "../html.js";

export class TemplatedComponent extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        return html(template('components/test-templated-component/template.html'))
    }
}

customElements.define('template-component', TemplatedComponent);