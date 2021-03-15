// find level n parent node
function parent(element, n) {
  while (element && n) {
    element = element.parentElement
      ? element.parentElement
      : element.parentNode;
    n--;
  }
  return element;
}

function hasChildern(element) {
  const children = element.childNodes;
  const len = children.length;
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) return true;
  }
  return false;
}
