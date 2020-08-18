<template>
  <v-btn :color="color" :class="{'float-right': right}" small>
    แก้ไข
  </v-btn>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'orange'
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
