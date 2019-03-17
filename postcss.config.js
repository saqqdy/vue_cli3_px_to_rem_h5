module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines", ".ig-"],
      minPixelValue: 1,
      mediaQuery: false
    },
    cssnano: {
      preset: [
        "advanced",
        {
          discardComments: {
            removeAll: true
          },
          reduceIdents: false,
          mergeIdents: false,
          autoprefixer: false,
          "postcss-zindex": false,
          zindex: false
        }
      ],
      discardComments: {
        removeAll: true
      },
      reduceIdents: false,
      mergeIdents: false,
      autoprefixer: false,
      "postcss-zindex": false,
      zindex: false
    }
  }
};
