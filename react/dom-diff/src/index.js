import { createElement, render, renderDOM } from './element';
// ul.list>li.item*3
import diff from './diff';
import patch from './patch';

let virtualDOM = createElement('ul',  {
  class: 'list-group'
}, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('li', { class: 'item' }, ['c']),
])

let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));