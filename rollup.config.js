import commonjs from '@rollup/plugin-commonjs';
import htmlPlugin from "./htmlPlugin";

export default () => ({
  input: 'src/index.js',
  output: {
    file: 'docs/js/main.js',
    format: 'iife',
  },
  plugins: [
    commonjs(),
    htmlPlugin({
      targets: [{
        src: './src/index.html',
        dest: './docs/index.html'
      }],
      replacements: {
        title: 'People Sabotaging Professionalism',
        description: 'A series of unfortunate events which took place on Earth, a few years ago...',
        site: 'https://bozdoz.github.io/people-sabotaging-professionalism',
      }
    })
  ],
})
