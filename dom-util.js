
const visitAllNodes = function(node, callback) {
  callback(node);
  const nodeChildren = node.childNodes;
  if(nodeChildren === null) {
  	return;
  } else {
    nodeChildren.forEach((node) => visitAllNodes(node, callback));
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  const treeArray = [];
  visitAllNodes(node, (el)=> {
    treeArray.push(el);
  });
  return treeArray;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};