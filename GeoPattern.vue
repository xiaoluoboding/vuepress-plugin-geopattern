<template>
  <div class="geo-pattern" :style="style">
    <slot />
  </div>
</template>

<script>
import gp from 'geopattern'

export default {
  name: 'GeoPattern',
  props: {
    // Given array elements is hexadecimal color value [0-F]
    colorHexs: { type: Array, default: () => ['3', '9', 'C'] },
    // Controls the relative background color of the generated image.
    baseColor: { type: String, default: '#933c3c' }
  },
  computed: {
    // Will be used as the seed for generation
    seed () {
      return this.$page && this.$page.title + new Date().toString()
    },
    style () {
      return {
        'background-image': this.getPattern()
      }
    }
  },
  methods: {
    getPattern () {
      return gp.generate(this.seed, {
        color: this.getRandomColor(this.colorHexs),
        baseColor: this.baseColor
      }).toDataUrl()
    },
    getRandomColor (hexs) {
      const shuffle = ([...arr]) => {
        let m = arr.length
        while (m) {
          let temp = null
          const i = Math.floor(Math.random() * m--)
          temp = arr[m]
          arr[m] = arr[i]
          arr[i] = temp
        }
        return arr
      }
      return shuffle(hexs).join('')
    }
  }
}
</script>

<style scoped>
.geo-pattern {
  transition: all 0.5s ease-in-out;
}
</style>
