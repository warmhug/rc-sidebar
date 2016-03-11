// add spec here!
const expect = require('expect.js');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Simulate = TestUtils.Simulate;
const RcSidebar = require('../');
const $ = require('jquery');

describe('simple tree', () => {
  let instance;
  let div;
  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('should add css class of root dom node', () => {
    instance = ReactDOM.render(
      <RcSidebar className="forTest" touch sidebar={<p>sidebar</p>}>
        <p>React Sidebar is a sidebar component for React.</p>
      </RcSidebar>, div
    );
    expect(ReactDOM.findDOMNode(instance).className.indexOf('forTest') !== -1).to.be(true);
  });

  it('should close the sidebar', (done) => {
    function cb(info) {
      // console.log('info', info);
      expect(info).to.be(false);
      done();
    }
    instance = ReactDOM.render(
      <RcSidebar touch sidebar={<p>sidebar</p>} onSetOpen={cb} open>
        <p>React Sidebar is a sidebar component for React.</p>
      </RcSidebar>, div
    );
    Simulate.click(instance.refs.overlay);
  });

});
