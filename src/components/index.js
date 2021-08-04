const requireComponents = require.context('./commonComponents', true, /\.vue/);
let installList = {}
requireComponents.keys().forEach(fileName => {
  // 组件实例
  const reqCom = requireComponents(fileName)
  // 截取路径作为组件名
  const reqComName = fileName.split('/')[1].replace('.vue', '')
  installList[reqComName] = reqCom.default || reqCom
})
const install = (Vue) => {
  for (let key in installList) {
    Vue.component(key, installList[key])
  }
}
export default {
  install
}