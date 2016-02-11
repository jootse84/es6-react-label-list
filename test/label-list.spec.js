import React from 'react'
import ReactDOM from 'react-dom'
import should from 'should'
import TestUtils from 'react-addons-test-utils'
import LabelList from '../src/label-list'

describe('LabelList', () => {
    var render = TestUtils.renderIntoDocument(
        <LabelList color="blue" background="grey" />
    );
    it('displays the list of labels once enter key down', () => {
        render.refs.labels.value = 'giraffe, frog';
        TestUtils.Simulate.change(render.refs.labels);
        TestUtils.Simulate.keyDown(render.refs.labels, {key: "Enter", keyCode: 13, which: 13});
        should(render.state.labels.length).be.equal(2);
        should(TestUtils.findRenderedDOMComponentWithClass(render, 'label-list').children.length).be.equal(2);
    })
    it('do not insert repeated or empty labels', () => {
        render.refs.labels.value = 'giraffe, giraffe, ';
        TestUtils.Simulate.change(render.refs.labels);
        TestUtils.Simulate.keyDown(render.refs.labels, {key: "Enter", keyCode: 13, which: 13});
        should(render.state.labels.length).be.equal(2);
        should(TestUtils.findRenderedDOMComponentWithClass(render, 'label-list').children.length).be.equal(2);
    })
    it('remove one label has effect', () => {
        TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(render, 'a')[0])
        should(render.state.labels.length).be.equal(1);
        should(TestUtils.findRenderedDOMComponentWithClass(render, 'label-list').children.length).be.equal(1);
    })
})
