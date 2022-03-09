import { BaseComponent } from "../BaseComponent.js";

export default class TestComponent extends BaseComponent {
    constructor() {
        super();
        this.theFood = this.getAttribute('the-food');
        this.addEventListener('click', () => {
            this.theFood = this.theFood === 'onion' ? 'pepers' : 'onion';
            this.update();
        })
    }

    css() {
        return `
        .gourmet {
            color: ${this.theFood === 'pepers' ? 'red' : 'green'}
        }
        `
    }

    render() {
        return `
        <div class="gourmet">
            This is some gourmet food: ${this.theFood}
        </div>`
    }
}

customElements.define('test-component', TestComponent);