import Element from './Objects/Element';

export function init(_options) {
    // Error handling
    if(_options === undefined)
        throw Error('You should pass an Option object to init function call.');
    else if(typeof _options !== 'object')
        throw Error('Unvalid Option object passed to init function call.');
    else if(_options.el === undefined)
        throw Error('Option object should have a (el) property.');

    const _hostElement = _options.el;
}