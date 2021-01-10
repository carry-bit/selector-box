import Element from '../Objects/Element';
import * as c from '../Constants';

export function getHost(_hostId) {
    const _hostElement = document.getElementById(_hostId);

    if (_hostElement === null)
        throw Error(`Unable to find any element with '${_hostId}' id.`);
    else
        return _hostElement;
}

export function validateOptions(_options) {
    if (_options === undefined)
        throw Error('You should pass an Option object to init function call.');
    else if (typeof _options !== 'object')
        throw Error('Unvalid Option object passed to init function call.');
    else if (_options.el === undefined)
        throw Error('Option object should contain a (el) property.');
    else if (_options.ref === undefined)
        throw Error('Option object should contain a (ref) property. ref is reference array of key values that should be rendered in the DOM.');
    else if (!Array.isArray(_options.ref))
        throw Error('(ref) property in options should be an array of key-value objects');
}

export function addChildren(_parentElement, _childTagName, _reference, _keyContainerAttributeName = c.defaultKeyContainerAttributeName) {
    // clear parent children at first
    _parentElement.removeChildren();

    const _referenceCount = _reference.length;
    let _childrenElements = [];
    let _childTemp;
    let index;

    for (index = 0; index < _referenceCount; ++index) {
        _childTemp = new Element(_childTagName);

        // add key and value to option elements
        _childTemp.addAttribute(_keyContainerAttributeName, _reference[index].key);
        _childTemp.text(_reference[index].value);

        _childrenElements[index] = _childTemp;
        _parentElement.addChild(_childTemp);
    }

    return _childrenElements;
}