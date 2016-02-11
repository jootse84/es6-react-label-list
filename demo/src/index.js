import React, { Component, PropTypes } from 'react'
import LabelList from 'es6-react-label-list/lib/label-list.js'

import { render } from 'react-dom'

const printMyList = (list) => {
    console.log(list.join(', '))
}
render(
    <LabelList listUpdated={printMyList} />,
    document.getElementById('root')
)
