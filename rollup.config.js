//  默认导出一个对象，作为打包的配置文件
import babel from 'rollup-plugin-babel'
export default {
  input: "./src/index.js", // 入口
  output: {
    file: "./dist/vue.js", // 打包生成文件(出口)
    name: "Vue", // 全局增加变量 Vue
    format: "umd", // esm es6模块  commonjs模块  iife自执行函数  umd(兼容 commonjs amd)
    sourcemap: true, // 生成源码映射文件，方便调试
  },
  // .babelrc 文件是babel的配置文件
  plugins: [
    babel({
      exclude: 'node_modules/**' // 排除 node_modules 依赖包文件
    })
  ]
};


// vue2 只支持ie9以上  Object.defineProperty 不支持低版本浏览器上的 js 环境
// vue3 使用的 proxy 是 es6 的 js 特性也没有替代方案