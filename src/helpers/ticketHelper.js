const getCommentFromFields = (data, depth = 0) => {
  let result = ''
  const tab = '\t'.repeat(depth)

  data.forEach((obj) => {
    const urlFields = ['Direct Link', 'Game Test URL']

    const restId = obj.value.find((valueObj) => valueObj.name === 'Rest ID')?.value || ''
    const patId = obj.value.find((valueObj) => valueObj.name === 'PAT ID')?.value || ''
    const edsId = obj.value.find((valueObj) => valueObj.name === 'EDS ID')?.value || ''
    const url = obj.value.find((valueObj) => urlFields.includes(valueObj.name))?.value || ''

    if (obj.selected !== false) {
      result += `${tab}<li>${obj.name}: `
      const isPatEds = obj.name === 'PAT' || obj.name === 'EDS'

      if (obj.value) {
        if (restId) {
          result += `${restId} - <a href="${url}">DL</a>`
        } else if (patId) {
          result = result.substring(0, result.length - 2) // remove colon (': ')
          result += ` (${patId}): <a href="${url}">${url}</a>`
        } else if (edsId) {
          result = result.substring(0, result.length - 2) // remove colon (': ')
          result += ` (${edsId}): <a href="${url}">${url}</a>`
        } else if (obj.name === 'Banners') {
          const url = obj.value.find((valueObj) => valueObj.name === 'Image URL')?.value
          const bigBanner = obj.value.find(
            (valueObj) => valueObj.name === 'Big Banner Image'
          )?.value
          const exitBanner = obj.value.find(
            (valueObj) => valueObj.name === 'Exit Banner Image'
          )?.value
          const exitBannerCta = obj.value.find(
            (valueObj) => valueObj.name === 'Exit Banner w/ CTA Image'
          )?.value
          const bannerEl = `
          <ul>
          <li>Big Banner
          </br>
          &lt;a href="${url}" target="_blank"&gt; <br/>
          &emsp;&lt;img src="${bigBanner}" border="0" /&gt; <br/>
          &lt;/a&gt;
          </li>
          <li>Exit Banner
          </br>
          &lt;a href="${url}" target="_blank"&gt; <br/>
          &emsp;&lt;img src="${exitBanner}" border="0" /&gt; <br/>
          &lt;/a&gt;
          </li>
          <li>Exit Banner w/ CTA
          </br>
          &lt;a href="${url}" target="_blank"&gt; <br/>
          &emsp;&lt;img src="${exitBannerCta}" border="0" /&gt; <br/>
          &lt;/a&gt;
          </li>
          </ul>
          `
          result += bannerEl
        } else {
          if (obj.value.length > 1) {
            console.log('this')
            result += '<ul>'
            obj.value.forEach((objValue) => {
              result += objValue.value
                ? `<li>${objValue.name}: <a href="${objValue.value}">${objValue.value}</a></li>`
                : ''
            })
            result += '</ul>'
          } else {
            result += `<a href="${url}">${url}</a>`
          }
        }
      }

      result += `</li>\n`

      if (obj.subFields) {
        result += getCommentFromFields(obj.subFields, depth + 1)
      }
    }
  })

  return `<ul>${result}</ul>`
}

export { getCommentFromFields }
