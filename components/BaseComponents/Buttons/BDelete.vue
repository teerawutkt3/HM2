<template>
  <v-btn :color="color" :class="{'float-right': right}" small>
    ลบ
  </v-btn>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'error'
    },
    right: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
