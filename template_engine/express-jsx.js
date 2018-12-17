const fs = require('fs')

function getKeysFromOptions (options) {
  const { settings, _locals, ...objectKeys} = options
//  console.log('objectKeys: ', objectKeys)
  return Object.keys(objectKeys)
}

function getRenderedContent (content, options) {
  const keys = getKeysFromOptions(options)
  let contentString = content.toString()

  for (let key of keys) {
    contentString = contentString.replace(new RegExp(`\{${key}\}`, 'gi'), options[key])
  }

//  console.log('contentString: ', contentString)
  return contentString
}

function expressJsx(filePath, options, callback) {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)

    const rendered = getRenderedContent(content, options)
    return callback(null, rendered)
  })
}

module.exports = expressJsx
