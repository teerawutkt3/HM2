<template>
  <v-card color="#e5dce7">
    <v-card-text>
      <div>{{ title }}</div>
      <h2>{{ type }}</h2>
      <p>{{ cost }}</p>
      <b-pay :click="click" />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    type: {
      type: String,
      default: 'type'
    },
    cost: {
      type: Number,
      default: 0
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
