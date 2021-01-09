import ElementProvider from './Providers/ElementProvider';
import {
    validateOptions,
    getHost
} from './Helpers/Helpers';

export function init(_options) {
    // Error handling
    validateOptions(_options);

    // get host element for selectbox
    const _hostElementId = _options.el;
    const _hostElement = getHost(_hostElementId);

    // get reference
    const _references = _options.ref;


    const _elementProvider = new ElementProvider(_hostElement, _references);
}