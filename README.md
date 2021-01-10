# Selector Box

A library for creating select boxes with item search capabilities.

## Installation
‍‍‍‍Just add the ‍‍‍‍‍‍‍‍```dist/selector-box.js``` file to your project file.


## Usage

```
...
<div id="selectorBoxHost"></div>

<script src="selector-box.js"></script>
<script>

const refArray = [
  {
    key: '0',
    value: 'Sample Item'
  }
];

SelectorBox.init({
  el: "selectorBoxHost",
  ref: refArray,
  navTxt: "Select an item",
  searchTxt: "Search item...",
  selected: {
    key: '0',
    value: 'Sample Item'
  },
  selectBoxAttributes: {
    name: 'selector_box',
    id: 'selectorBox'
  }
});
</script>
...
```

## Contributing
Pull requests are welcome.

## Last word
Many thanks to those who participate in this project or those who use it :)
