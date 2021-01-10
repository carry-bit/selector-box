class ElementHandler {
    constructor() {
    }

    createElement() {
        if(this._tagName == undefined)
            return false;
        const _element = document.createElement(this._tagName);
        return _element;
    }

    addClass(_className) {
        this._element.classList.add(_className);
    }

    toggleClass(_className) {
        this._element.classList.toggle(_className);
    }

    removeClass(_className) {
        this._element.classList.remove(_className);
    }

    removeAllClass() {
        this._element.className = '';
        this._element.removeAttribute("class");
    }

    addChild(_child) {
        const _childElement = _child.render();
        this._element.appendChild(_childElement);
    }

    addChildFirst(_child) {
        const _childElement = _child.render();
        this._element.insertBefore(_childElement, this._element.firstChild);
    }

    removeChild(_child) {
        const _childElement = _child.render();
        this._element.removeChild(_childElement);
    }

    removeChildren() {
        this._element.innerHTML = '';
    }

    addAttribute(_attributeName, _attributeValue) {
        this._element.setAttribute(_attributeName, _attributeValue);
    }

    getAttribute(_attributeName) {
        const _attributeValue = this._element.getAttribute(_attributeName);

        if (_attributeValue === null)
            return false;
        else
            return _attributeValue;
    }

    removeAttribute(_attributeName) {
        this._element.removeAttribute(_attributeName);
    }

    text(_text) {
        this._element.innerText = _text;
    }

    render() {
        return this._element;
    }
}

export default ElementHandler;