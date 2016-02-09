#[es6-react-label-list]

React label list component
![Screencast](./images/demo.gif)

## Prerequisites

[React](http://facebook.github.io/react/)
[Less](http://lesscss.org/)

## Installation

React label list component is available as an [npm package](https://www.npmjs.com/package/es6-react-label-list).

## Usage

Include es6-react-label-list in your project, you can use the component this way:

```js
import React from 'react';
import LabelList from 'es6-react-label-list/lib/label-list.js'

const MyAwesomeReactComponent = () => (
  <LabelList />
);

export default MyAwesomeReactComponent;
```

## Customization

So far there are only two optional parameters for the component customization: *color*, to set the font color of the label, and *background* , to set the background color of the label.

```js
const MyAwesomeReactComponent = () => (
  <LabelList color="black" background="green" />
);
```


