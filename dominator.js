const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
	const treeArray = flattenTreeToArray(root);
	const elId = _.filter(treeArray, node => node.id === id);
	return elId[0];
};

const getElementsByClassName = function(root, className) {
  const treeArray = flattenTreeToArray(root);
	const elClass = _.filter(treeArray, node => {
		let classArray = [];
		if(node.className !== undefined) {
			classArray = node.className.split(' ');
		}
		const classExists = classArray.indexOf(className);
		return classExists !== -1;
	});
	return elClass;
};

const getElementsByTagName = function(root, tagName) {
  const treeArray = flattenTreeToArray(root);
	const elId = _.filter(treeArray, node => node.tagName === tagName);
	return elId;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
