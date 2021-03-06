# rci-sidebar
---

### Note: this repository is no longer maintained. Use [react-component/drawer](https://github.com/react-component/drawer) instead.

React RcSidebar Component


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[npm-image]: http://img.shields.io/npm/v/rci-sidebar.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rci-sidebar
[travis-image]: https://img.shields.io/travis/react-component/rc-sidebar.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/rc-sidebar
[coveralls-image]: https://img.shields.io/coveralls/react-component/rc-sidebar.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/rc-sidebar?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/rc-sidebar.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/rc-sidebar
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rci-sidebar.svg?style=flat-square
[download-url]: https://npmjs.org/package/rci-sidebar


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 8+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

## Screenshots

<img src="https://os.alipayobjects.com/rmsportal/gqhazYYGIaUmunx.png" width="288"/>


## Development

```
npm install
npm start
```

## Example

http://localhost:8009/examples/

online example: http://react-component.github.io/rc-sidebar/


## install

[![rci-sidebar](https://nodei.co/npm/rci-sidebar.png)](https://npmjs.org/package/rci-sidebar)


## Usage

```js
var RcSidebar = require('rci-sidebar');
var React = require('react');
React.render(<RcSidebar />, container);
```

## API

### props

| Property name | Type | Default | Description |
|---------------|------|---------|-------------|
| className | String | '' | additional css class of root dom node |
| prefixCls | String | 'rci-sidebar' | prefix class |
| children | Anything React can render | n/a | The main content |
| sidebarStyle | object | {} | Inline styles. |
| contentStyle | object | {} | Inline styles. |
| overlayStyle | object | {} | Inline styles. |
| dragHandleStyle | object | {} | Inline styles. |
| sidebar | Anything React can render | n/a | The sidebar content |
| onSetOpen | function | n/a | Callback called when the sidebar wants to change the open prop. Happens after sliding the sidebar and when the overlay is clicked when the sidebar is open. |
| docked | boolean | false | If the sidebar should be always visible |
| open | boolean | false | If the sidebar should be open |
| transitions | boolean | true | If transitions should be enabled |
| touch | boolean | true | If touch gestures should be enabled |
| touchHandleWidth | number | 20 | Width in pixels you can start dragging from the edge when the sidebar is closed. |
| dragToggleDistance | number | 30 | Distance the sidebar has to be dragged before it will open/close after it is released. |
| pullRight | boolean | false | Place the sidebar on the right |

> change from [https://github.com/balloob/react-sidebar](https://github.com/balloob/react-sidebar)

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rci-sidebar is released under the MIT license.
