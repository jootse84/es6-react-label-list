#React label/tag list component
[![npm](https://img.shields.io/npm/v/es6-react-label-list.svg?style=flat-square)](https://www.npmjs.com/package/es6-react-label-list)

![Screencast](./images/demo.gif)


## Dependencies

[React](http://facebook.github.io/react/)
[Less](http://lesscss.org/)

## Installation

```
$ npm install es6-react-label-list
```

## Usage

```js
import React from 'react';
import LabelList from 'es6-react-label-list/lib/label-list.js'

const MyAwesomeReactComponent = () => (
  <LabelList />
);

export default MyAwesomeReactComponent;
```

## Customization

So far there are only these optional parameters for the component customization: *color*, to set the font color of the label; *background* , to set the background color of the label; *listUpdated*, a function is called any time there is an update of the label/tag list; and *placeholder* as the initial input text.

```js
const printMyList = (list) => {
    console.log(list.join(', '))
}
const MyAwesomeReactComponent = () => (
  <LabelList color="black" background="green" listUpdated={printMyList}/>
);
```


