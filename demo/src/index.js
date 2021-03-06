import React, { Component, PropTypes } from 'react'
import LabelList from 'es6-react-label-list/lib/label-list.js'

import { render } from 'react-dom'

const printMyList = (list) => {
    console.log(list.join(', '))
}
const printLabel = (label) => {
    console.log(label)
}
render(
    <LabelList 
      labelClicked={printLabel}
      listUpdated={printMyList} 
      background="white" 
      color="#990000" />,
    document.getElementById('root')
)
