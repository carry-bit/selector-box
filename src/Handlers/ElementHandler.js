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

    removeChild(_child) {
        const _childElement = _child.render();
        this._element.removeChild(_childElement);
    }

    addAttribute(_attributeName, _attributeValue) {
        this._element.setAttribute(_attributeName, _attributeValue);
    }

    removeAttribute(_attributeName) {
        this._element.removeAttribute(_attributeName);
    }

    render() {
        return this._element;
    }
}

export default ElementHandler;