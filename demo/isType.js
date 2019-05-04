function isType(type) {
  return function (obj) {
    return Object.prototype.toString.call(obj).includes(type)
  }
}

let types = ['String', 'Object', 'Array', 'Null', 'Undefined', 'Boolean']

let fns = {}
types.forEach(type => {
  fns['is' + type] = isType(type)
})

fns.isArray([])
