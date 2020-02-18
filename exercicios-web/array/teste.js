console.log([1].concat([[2], [3]]))
console.log(Array.prototype.concat.apply([1], [[2], [3]]))

console.log("String teste".concat([[2], [3]]))
console.log(Array.prototype.concat.apply("String teste", [[2], [3]]))

console.log([1].concat([2],[3]))
console.log([1].concat([[2],[3]]))