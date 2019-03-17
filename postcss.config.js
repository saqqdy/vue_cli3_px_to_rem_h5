module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-plugin-px2rem": {
      "rootValue": { "px": 37.5, "rpx": 100 },
      "unitPrecision": 5,
      "propWhiteList": [],
      "propBlackList": [],
      "selectorBlackList": [".ignore", ".hairlines", ".ig-"],
      "ignoreIdentifier": false,
      "replace": true,
      "mediaQuery": false,
      "minPixelValue": 1.01
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
