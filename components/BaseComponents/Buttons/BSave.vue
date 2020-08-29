<template>
  <v-btn class="css-save" :class="{'float-right': right}" small>
    เพิ่มข้อมูล
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
.css-save {
  color: #ffffff !important;
  background:linear-gradient(to right, #9C27B0, #E040FB);
}
</style>
