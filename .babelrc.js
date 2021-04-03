module.exports = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  plugins: ['inline-react-svg','babel-plugin-macros', ['styled-components', { ssr: true }]],
}