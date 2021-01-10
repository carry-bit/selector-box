import * as c from '../Constants';
import Element from '../Objects/Element';
import * as hlp from '../Helpers/Helpers';

class EventProvider {
    constructor(_navigatorElement, _searchBoxElementInput, _selectListElement, _selectBoxElement, _searchBoxContainer, _reference) {
        if (_navigatorElement === undefined)
            throw Error('Could not provide events. navigator is undefined.');
        else if (_searchBoxElementInput === undefined)
            throw Error('Could not provide events. searchBox is undefined.');
        else if (_selectListElement === undefined)
            throw Error('Could not provide events. selectList is undefined.');
        else if (_selectBoxElement === undefined)
            throw Error('Could not provide events. selectBox is undefined.');


        this._navigator = _navigatorElement;
        this._searchBox = _searchBoxElementInput;
        this._selectList = _selectListElement;
        this._selectBox = _selectBoxElement;
        this._searchBoxContainer = _searchBoxContainer;
        this._reference = _reference;

        // bind this keyword to the event handlers
        this.navigatorClickHandler = this.navigatorClickHandler.bind(this);
        this.searchBoxChangeHandler = this.searchBoxChangeHandler.bind(this);
        this.selectListClickHandler = this.selectListClickHandler.bind(this);

        this.addEventListeners();

        this._lastSelected = null;
    }

    addEventListeners() {
        this._navigator.render().addEventListener('click', this.navigatorClickHandler);
        this._searchBox.render().addEventListener('keyup', this.searchBoxChangeHandler);
        this._selectList.render().addEventListener('click', this.selectListClickHandler);
    }

    navigatorClickHandler() {
        this._navigator.toggleClass(c.cssExpandList);
        this._selectList.toggleClass(c.cssHided);

        this._selectList.render().scrollTo(0, 0);
    }

    searchBoxChangeHandler(event) {
        const _searchFilterValue = event.target.value;


        let _arr = [];

        this._reference.find((element) => {
            if (element.value.indexOf(_searchFilterValue) == -1)
                return false;

            _arr.push(element);
        });

        hlp.addChildren(this._selectList, 'li', _arr, 'data-key');
        this._selectList.addChildFirst(this._searchBoxContainer);
        this._searchBox.render().focus();
    }

    selectListClickHandler(event) {
        const _selectListItem = event.target;
        const _selectedKey = _selectListItem.getAttribute('data-key');

        if (_selectedKey === null)
            return false;

        if (this._lastSelected !== null) {
            this._lastSelected.className = '';
            this._lastSelected.removeAttribute('class')
        }

        this._selectBox.render().value = _selectedKey;

        if (this._selectBox.render().value === '')
            return false;

        this._navigator.text(_selectListItem.innerText);

        _selectListItem.className = c.cssSelectedItem;

        this._selectList.toggleClass(c.cssHided);
        this._navigator.toggleClass(c.cssExpandList);

        this._lastSelected = _selectListItem;
    }

}

export default EventProvider;