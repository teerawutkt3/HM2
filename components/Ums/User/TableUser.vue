<template>
  <div>
    <span>User Table {{ name }}</span>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'mano'
    }
  }
}
</script>
