<template>
  <v-btn :color="color" :class="{'float-right': right}" x-small fab @click="click">
    <v-icon dark>
      mdi-delete
    </v-icon>
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
