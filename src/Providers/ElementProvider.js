import Element from '../Objects/Element';
import * as c from '../Constants';
import * as hlp from '../Helpers/Helpers';

class ElementProvider {
    constructor(_hostElement, _reference, _navigatorText, _searchBoxText) {
        this._hostElement = _hostElement;
        this._reference = _reference;
        this._navigatorText = _navigatorText;
        this._searchBoxText = _searchBoxText;

        // create select-box
        const _selectBoxObject = this.getSelectBox();
        this._selectBox = _selectBoxObject.selectBoxParent;
        this._selectBoxChildren = _selectBoxObject.selectBoxChildren;

        // create select-list
        const _selectListObject = this.getSelectList();
        this._selectList = _selectListObject.selectListParent;
        this._selectListChildren = _selectListObject.selectListChildren;

        // create navigator
        this._navigator = this.getNavigator();

        // create container
        this._container = this.getContainer();

        // create search box input
        const _searchBox = this.getSearchBox();
        this._searchBoxContainer = _searchBox.searchBoxContainer;
        this._searchBox = _searchBox.searchBoxInput;
    }


    // create and return select-box with children
    getSelectBox() {
        const _selectBoxParent = new Element('select');
        const _selectBoxChildrenElements = hlp.addChildren(_selectBoxParent, 'option', this._reference);

        // add attributes
        _selectBoxParent.addClass(c.cssHided);


        return {
            selectBoxParent: _selectBoxParent,
            selectBoxChildren: _selectBoxChildrenElements
        };
    }   

    // create and return ul(selectable list) and list-items(li)
    getSelectList() {
        const _selectListParent = new Element('ul');
        const _selectListChildrenElements = hlp.addChildren(_selectListParent, 'li', this._reference, 'data-key');

        // add attributes
        _selectListParent.addClass(c.cssSelectList);
        _selectListParent.addClass(c.cssHided);


        return {
            selectListParent: _selectListParent,
            selectListChildren: _selectListChildrenElements
        };
    }

    // navigator providing
    getNavigator() {
        const _navigator = new Element('div');

        _navigator.addClass(c.cssNavigator);

        _navigator.text(this._navigatorText);

        return _navigator;
    }

    // create package container
    getContainer() {
        const _container = new Element('div');

        _container.addClass(c.cssContainer);

        return _container;
    }

    // create search box
    getSearchBox() {
        const _searchBoxContainer = new Element('li');
        const _searchBox = new Element('input');

        _searchBoxContainer.addClass(c.cssSearchBoxContainer);

        _searchBox.addAttribute('placeholder', this._searchBoxText);

        _searchBoxContainer.addChild(_searchBox);

        return {
            searchBoxContainer: _searchBoxContainer,
            searchBoxInput: _searchBox
        };
    }

    // render to host element
    renderToHost() {
        if (this._selectBox === undefined)
            throw Error('Could not render elements to host: (selectBox) is undefined');
        else if (this._selectList === undefined)
            throw Error('Could not render elements to host: (selectList) is undefined');
        else if (this._navigator === undefined)
            throw Error('Could not render elements to host: (navigator) is undefined');
        else if (this._container === undefined)
            throw Error('Could not render elements to host: (container) is undefined')

        this._container.addChild(this._selectBox);
        this._container.addChild(this._navigator);
        this._selectList.addChildFirst(this._searchBoxContainer);
        this._container.addChild(this._selectList);

        // clear other childs of host element
        this._hostElement.innerHTML = '';

        this._hostElement.appendChild(this._container.render());

        return true;
    }
}


export default ElementProvider;