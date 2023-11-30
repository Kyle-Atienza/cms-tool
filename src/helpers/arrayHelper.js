const flattenObjectArrayRecursive = (arr) => {
  let flatArray = []

  arr.forEach((obj) => {
    flatArray.push(obj) // Include the current object in the flattened array

    if (Array.isArray(obj.subFields) && obj.subFields.length > 0) {
      const childrenFlat = flattenObjectArrayRecursive(obj.subFields)
      flatArray = flatArray.concat(childrenFlat)
    }
  })

  return flatArray
}

export { flattenObjectArrayRecursive }
