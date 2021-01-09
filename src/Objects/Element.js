import ElementHandler from '../Handlers/ElementHandler';

class Element extends ElementHandler {
    constructor(_tagName) {
        super();

        this._tagName = _tagName;

        const _element = this.createElement();
        this._element = !_element ? null : _element;
    }
}

export default Element;