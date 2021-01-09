import Element from './Objects/Element';
import {
    validateOptions,
    getHost
} from './Helpers/Helpers';

export function init(_options) {
    // Error handling
    validateOptions(_options);
    
    const _hostElementId = _options.el;
    const _hostElement = getHost(_hostElementId);
}