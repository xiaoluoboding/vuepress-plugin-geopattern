# Vuepress Plugin GeoPattern

Register a global `<GeoPattern />` component for VuePress.

This component generate a beautiful random  geometric pattern & random color images from a string you given.

> This plugin is a adaptor of [geopattern](https://github.com/btmills/geopattern)

## See Demo on CodeSandbox

[![Edit vuepress-plugin-geopattern](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/fast-pine-42vz4?fontsize=14&hidenavigation=1&theme=dark)

## Installation

```bash
yarn add vuepress-plugin-geopattern -S
or
npm i vuepress-plugin-disqus -S
```

## Register the plugin

```js
...
module.exports = {
  ...,
  plugins: {
    ['geopattern']
  },
  ...
}
...
```

## Usage

> Only background image, you must give the height of the element

```vue
<GeoPattern style="height: 80px;" />
```

> With the custom slot, in the case, you can let the slot element control the pattern's height

```vue
<GeoPattern>
  <div class="posts-header">
    All Posts
  </div>
</GeoPattern>
```

## API

> colorHexs is a new props for this component, I believe that three hexadecimal color value[0-F] can generate beautiful colors in random way.

| Props | Description | Type | Default |
| :---: | :---------: | :--: | :-----: |
| colorHexs | Given array elements is hexadecimal color value [0-F] | Array | `['3', '9' 'C' ]` |
| baseColor | Controls the relative background color of the generated image. | String | `933c3c` |

## Slot

`<GeoPattern />` component provide a custom slot, you can write some element on the generated pattern.

## License

MIT
