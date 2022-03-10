
async function loadAsset(asset) {
    if (!asset) {
        return '';
    }
    if(typeof(asset) === 'string') {
        return asset;
    }
    if(asset instanceof HTMLElement) {
        return asset;
    }
    if(asset instanceof Promise) {
        return await asset;
    }
    throw Error('Asset must be string, HTMLElement or Promise.')
}

export class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.doUpdateComponent();
    }

    async doUpdateComponent() {
        const css = await loadAsset(this.css());
        const content = await loadAsset(this.render());

        if (css) {
            let styleElement = undefined;
            if(css instanceof HTMLElement) {
                if (css.nodeName.toLowerCase() !== 'style') {
                    throw Error('The component style must be a <style> element.')
                }
                styleElement = css;
            } else {
                styleElement = document.createElement('style');
                styleElement.textContent = css;
            }
            // attach to the shadow root.
            this.shadowRoot.appendChild(styleElement);
        }

        if(content instanceof HTMLElement || content instanceof DocumentFragment) {
            this.shadowRoot.appendChild(content);
        } else {
            const tmpDiv = document.createElement('div');
            tmpDiv.innerHTML = content;
            this.shadowRoot.appendChild(tmpDiv);
        }
        this.updated();
    }

    async update() {
        this.shadowRoot.innerHTML = '';
        return this.doUpdateComponent();
    }

    updated() {

    }

    render() {
        return '';
    }

    css() {
        return '';
    }
}
