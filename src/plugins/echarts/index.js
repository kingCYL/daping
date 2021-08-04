const chartsList = []

function importAll(r) {
  r.keys().forEach(
    (key) => chartsList.push(r(key).default)
  )
}

importAll(require.context('./', true, /\.js/)); //匹配当前目录下的.js结尾的文件
const charts = {}
chartsList.forEach(item => {
  for (let key in item) {
    charts[key] = item[key]
  }
})
const install = (Vue) => {
  Vue.prototype.$chart = charts
}
export default {
  install
}