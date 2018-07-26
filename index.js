var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return object.Assign({}, object, {[key]: value})
}