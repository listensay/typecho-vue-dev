const fs = require('fs')
const path = require('path')

let version = process.env.VERSION
if (!version) {
  throw new Error('Version number is required.')
}

// 指定模板文件路径
let templatePath = path.resolve(__dirname, 'public/template.html')

fs.readFile(templatePath, 'utf8', function (err, data) {
  if (err) throw err

  // 替换版本号
  let result = data.replace(/(\* @version )(\d+(\.\d+){1,2})/, `$1${version}`)

  fs.writeFile(templatePath, result, 'utf8', function (err) {
    if (err) throw err
  })
})
