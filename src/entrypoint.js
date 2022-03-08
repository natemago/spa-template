import TestComponent from './components/TestComponent.js'



let webappElement = document.getElementById('webapp')

customElements.define('test-element', TestComponent, {
    extends: 'table'
})