<template>
  <v-card color="#385F73">
    <v-card-text>
      <div>{{ title }}</div>
      <h2>{{ type }}</h2>
      <p>{{ cost }}</p>
      <v-btn color="#b58a5d" small @click="click">
        Pay
      </v-btn>
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
