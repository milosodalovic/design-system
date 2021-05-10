<!--suppress CssUnknownTarget -->
<template>
    <transition
        name="expand-transition"
        @after-enter="itemAfterEnter"
        @enter="itemEnter"
        @leave="itemLeave"
    >
      <slot />
    </transition>
</template>

<script>
export default {
  name: 'BaseTransitionExpand',
  methods: {
    itemEnter (element) {
      element.style.width = getComputedStyle(element).width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const height = getComputedStyle(element).height

      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height

      // Trigger the animation.
      // We use `setTimeout` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      setTimeout(() => {
        element.style.height = height
      })
    },
    itemAfterEnter (element) {
      element.style.height = 'auto'
    },
    itemLeave (element) {
      element.style.height = getComputedStyle(element).height

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height

      setTimeout(() => {
        element.style.height = 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>

// // Transition Smoothness
// * {
//   will-change: height;
//   backface-visibility: hidden;
// }

// .expand-transition {
//   &-enter-active,
//   &-leave-active {
//     transition: all .3s ease-in-out;
//     overflow: hidden;
//   }

//   &-enter,
//   &-leave-to {
//     opacity: 0;
//     height: 0;
//   }
// }
</style>
