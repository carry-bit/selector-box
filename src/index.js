import * as c from './Constants';
import ElementProvider from './Providers/ElementProvider';
import EventProvider from './Providers/EventProvider';
import {
    validateOptions,
    getHost
} from './Helpers/Helpers';
import './index.css';

export function init(_options) {
    // Error handling
    validateOptions(_options);

    // get host element for selectbox
    const _hostElementId = _options.el;
    const _hostElement = getHost(_hostElementId);

    // get reference
    const _references = _options.ref;

    // get navigator text
    const _navigatorText = _options.navTxt !== undefined ? _options.navTxt : c.navigatorDefaultText;

    // get search box text
    const _searchBoxText = _options.searchTxt !== undefined ? _options.searchTxt : c.searchBoxDefaultText;

    const _elementProvider = new ElementProvider(_hostElement, _references, _navigatorText, _searchBoxText);

    _elementProvider.renderToHost();

    // event provider
    const _eventProvider = new EventProvider(_elementProvider._navigator, _elementProvider._searchBox, _elementProvider._selectList, _elementProvider._selectBox, _elementProvider._searchBoxContainer, _references);

}