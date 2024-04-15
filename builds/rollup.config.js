// rollup配置
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import { getPackagesSync } from '@lerna/project';
import vue from 'rollup-plugin-vue';

// 获取package.json，找到名字，以@z-ui开头的
const inputs = getPackagesSync().map(pkg => pkg.name).filter(name => name.includes('@z-ui'));
export default inputs.map(name => {
  const pckName = name.split('@z-ui')[1]; //button icon
  return {
    input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
    output: {
      format: 'es',
      file: `lib/${pckName}/index.js`
    },
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser'
      }),
      typescript({  //默认调用tsconfig.json，帮忙生成声明文件
        tsconfigOverride: {
          compilerOptions: {  //打包单个组件的时候不生成ts声明文件
            declaration: false
          },
          exclude: [
            'node_modules'
          ]
        }
      })
    ],
    external(id) {  //排除vue本身
      return /^vue/.test(id) || /^@z-ui/.test(id);
    }
  }
}) 