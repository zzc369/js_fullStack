// virtual DOM
import { setAttr, Element } from './element';

const ATTRS = 'ATTRS';
const TEXT = 'TEXT';
const REMOVE = 'REMOVE';
const REPLACE = 'REPLACE';

function diff(oldTree, newTree) {
  let patches = {}; // 序号， 在这个结点上的修改
  let index = 0; //第几个节点的改变
  //递归遍历树
  walk(oldTree, newTree, index, patches);
  return patches;
}
function walk (oldNode, newNode, index, patches) {
  // props, children 
  let current = []; //当前结点的被丁

  if (!newNode) {
    current.push({ type: REMOVE, index});
  } else if (isString(oldNode) && isString(newNode)) {
    if (oldNode !== newNode) {
      current.push({ type: TEXT, text: newNode})
    }
  } else if (oldNode.type === newNode.type) {
    let attrs = diffAttr(oldNode.props, newNode.props);
    if (Object.keys(attrs).length > 0) {
      current.push({ type: ATTRS, attrs });
    }
    diffChildren(oldNode.children, newNode.children, patches);
  } else {
    current.push({type: REPLACE, newNode})
  }

  if(!oldNode) {
    current.push({type: REPLACE, newNode});
  }
  if (current.length) {
    patches[index] = current; 
  }
}

function isString(obj) {
  return typeof obj === 'string';
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {};
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];
    }
  }
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key];
    }
  }
  return patch;
}
let num = 0;
function diffChildren(oldChildren, newChildren, patches) {
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patches)
  })
}
// 某个结点打补丁 
function doPatch(node, patches) {
  patches.forEach(patch => {
    switch(patch.type) {
      case 'ATTR':
          for (let key in patch.attr) {
            //属性
            let value = patch.attr[key];
            if (value) {
              setAttr(node, key, value);
            } else {
              node.removeAttribute(key);
            }
          }
          break;
        case 'TEXT':
          node.textContent = patch.text;
          break;
        case 'REPLACE':
          let newNode = patch.newNode;
          newNode = (newNode instanceof Element)?render(newNode):document.createTextNode(newNode);
          node.parentNode.replaceChild(newNode, node);
          break;
        case 'REMOVE':
          node.parentNode.removeChild(node);
          break;
        default:
          break;
    }
  })
}

export default diff;