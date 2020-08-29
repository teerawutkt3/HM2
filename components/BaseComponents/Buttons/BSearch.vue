<template>
  <v-btn :color="color" @click="click">
    <!-- :class="{'float-right': right}" small -->
    {{ text }}
  </v-btn>
</template>
<script>
export default {

  props: {
    color: {
      type: String,
      default: 'warning'
    },
    text: {
      type: String,
      default: 'Mano'
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
