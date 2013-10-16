
/**
 * Return true if the value is contained
 * in the array.
 * 
 * @param {Array} arr 
 * @param {any} val 
 * @return {Boolean} 
 * @api public
 */

module.exports = function(arr, val) {
	return !!~arr.indexOf(val);
};