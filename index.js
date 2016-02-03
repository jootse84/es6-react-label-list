import React, { Component, PropTypes } from 'react'
import LabelList from './components/LabelList'
import 'babel-core/polyfill'
import { render } from 'react-dom'

render(
  <LabelList></LabelList>,
  document.getElementById('root')
)
