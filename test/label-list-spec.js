import React from 'react'
import TestUtils from 'react-addons-test-utils'
import LabelList from '../src/label-list'

describe('LabelList', () => {
    it('displays the list of labels once enter key down', () => {
        const render = TestUtils.renderIntoDocument(
            <LabelList color="blue" background="grey" />
        );
        const node = TestUtils.scryRenderedDOMComponentsWithTag(render, 'input')[1];
        node.value = 'giraffe, frog';
        TestUtils.Simulate.change(node);
        TestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
        expect(TestUtils.findRenderedDOMComponentWithClass(node, 'ticket').length).to.be.equal(2);
    })
})
