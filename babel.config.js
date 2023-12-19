module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ["@babel/preset-react",{runtime:"automatic"}] //this helps to converts jsx code to html
    ],
  };