function toDOM(contentStr) {
    return document.createRange().createContextualFragment(contentStr);
}

function contentToHTMLElement(content) {
    console.log('::: content => ', content)
    if(content instanceof HTMLElement || content instanceof DocumentFragment) {
        return content;
    }
    if(typeof(content) === 'string') {
        return toDOM(content);
    }
    throw Error('Content must be a string or an HTMLElement.')
}

export async function html(content) {
    if(!content) {
        return undefined;
    }
    let actualContent = content instanceof Promise ? await content : content;
    return contentToHTMLElement(actualContent);
}

export async function template(templateURI) {
    const resp = await fetch(templateURI);
    const templateContent = await resp.text();
    return toDOM(templateContent);
}