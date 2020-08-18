<template>
  <v-btn :color="color" :class="{'float-right': right}" x-small fab @click="click">
    <v-icon dark>
      mdi-pencil
    </v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#b58a5d'
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
