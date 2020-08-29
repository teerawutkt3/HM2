<template>
  <v-btn class="css-pay" :class="{'float-right': right}" small @click="click">
    Pay
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
    },
    small: {
      type: String,
      default: 'small'
    }
  }
}
</script>
<style>
.css-pay {
  color: #ffffff !important;
  background:linear-gradient(to right, #9C27B0, #E040FB);
}
</style>
