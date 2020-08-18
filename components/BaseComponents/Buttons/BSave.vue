<template>
  <v-btn :color="color" :class="{'float-right': right}" small>
    เพิ่มข้อมูล
  </v-btn>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'teal'
    },
    right: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {}
    },
    small: {
      type: String,
      default: 'small'
    }
  }
}
</script>
