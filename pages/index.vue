<template>
  <v-layout
    column
  >
    <v-flex>
      <notifications group="foo" />
      <nuxt-child />
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '@/components/Logo'
import VuetifyLogo from '@/components/VuetifyLogo'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Logo,
    // eslint-disable-next-line vue/no-unused-components
    VuetifyLogo
  }
}
</script>
