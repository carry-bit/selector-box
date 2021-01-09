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

}