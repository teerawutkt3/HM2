<template>
  <v-btn class="css-icon-delete" :class="{'float-right': right}" x-small fab @click="click">
    <v-icon dark>
      mdi-delete
    </v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
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
<style>
.css-icon-delete {
  color: #ffffff !important;
  /* background:linear-gradient(to right, #ca0909, #d46767); */
  background:linear-gradient(to right, #9C27B0, #E040FB);
}
</style>
