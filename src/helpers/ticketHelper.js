const getCommentFromFields = (data, depth = 0) => {
  let result = ''
  const tab = '\t'.repeat(depth)

  data.forEach((obj) => {
    const restId = obj.value.find((valueObj) => valueObj.name === 'Rest ID')?.value || ''
    const dl = obj.value.find((valueObj) => valueObj.name === 'Direct Link')?.value || ''
    const finalUrl = obj.value.find((valueObj) => valueObj.name === 'Final URL')?.value || ''
    const id = obj.value.find((valueObj) => valueObj.name === 'ID')?.value || ''

    if (obj.selected !== false) {
      result += `${tab}<li>${obj.name}: `

      if (obj.value) {
        // console.log()

        if (restId) {
          // for rest id
          result += `${restId} - <a href="${dl}">DL</a>`
        } else if (obj.name === 'PAT' || obj.name === 'EDS') {
          // eds and pat
          result = result.substring(0, result.length - 2) // remove colon (': ')
          result += ` (${id}): <a href="${dl}">${dl}</a>`
        } else {
          if (obj.value.length > 1) {
            result += '<ul>'
            obj.value.forEach((objValue) => {
              result += `<li>${objValue.name}: <a href="${objValue.value}">${objValue.value}</a></li>`
            })
            result += '</ul>'
          } else {
            result += `<a href="${dl}">${dl}</a>`
          }
        }
      }

      result += `</li>\n`

      /* if (finalUrl) {
        result += `<li>${obj.name} Final URL: <a href="${finalUrl}">${finalUrl}</a></li>\n`
      } */

      //subfields
      if (obj.subFields) {
        console.log(obj.subFields)

        result += getCommentFromFields(obj.subFields, depth + 1)
      }
    }
  })

  return `<ul>${result}</ul>`
}

export { getCommentFromFields }
