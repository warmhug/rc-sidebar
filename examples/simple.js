// use jsx to render html, do not modify simple.html

import 'rci-sidebar/assets/index.less';
import './simple.less';
import RcSidebar from 'rci-sidebar';
import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  getInitialState() {
    return {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    };
  },
  renderPropCheckbox(prop) {
    const toggleMethod = (ev) => {
      const newState = {};
      newState[prop] = ev.target.checked;
      this.setState(newState);
    };

    return (
      <p key={prop}>
        <input type="checkbox" onChange={toggleMethod} checked={this.state[prop]} id={prop} />
        <label htmlFor={prop}> {prop}</label>
      </p>);
  },
  onSetOpen(open) {
    this.setState({open: open});
  },
  render() {

    const sidebar = (<div>
      <h3>sidebar</h3>
      <p>this is content!</p>
      <p>this is content!</p>
    </div>);

    const sidebarProps = {
      docked: this.state.docked,
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen,
    };
    return (<div style={{height: '600px'}}>
      <RcSidebar sidebar={sidebar} {...sidebarProps}>
        <div>
          <p>React Sidebar is a sidebar component for React.</p>
          <p>this is content!</p>
          <button onClick={() => {this.setState({open: !this.state.open});}}>展开/收起</button>
          {['open', 'docked', 'transitions', 'touch', 'shadow', 'pullRight'].map(this.renderPropCheckbox)}
        </div>
      </RcSidebar>
    </div>);
  }
});

ReactDOM.render(<App />, document.getElementById('__react-content'));
