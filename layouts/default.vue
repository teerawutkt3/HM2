<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <!-- optional shaped, nav, rounded -->
      <v-list
        :shaped="true"
        :nav="false"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="#9C27B0"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          color="#9C27B0"
          prepend-icon="mdi-apps"
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-title>Ums</v-list-item-title>
          </template>

          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            link
            :to="admin[2]"
            router
          >
            <v-list-item-action>
              <v-icon>{{ admin[1] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="admin[0]" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!-- <v-list-group prepend-icon="mdi-apps" value="true" color="#b58a5d">
          <template v-slot:activator>
            <v-list-item-title>Level1</v-list-item-title>
          </template>

          <v-list-group
            no-action
            sub-group
            value="true"
            color="#b58a5d"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Level2</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(admin, i) in admins"
              :key="i"
              link
            >
              <v-list-item-title v-text="admin[0]" />
              <v-list-item-icon>
                <v-icon v-text="admin[1]" />
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      admins: [
        ['Users', 'mdi-checkbox-blank-circle', '/ums/user'],
        ['Roles', 'mdi-checkbox-blank-circle', '/ums/role']
        // ['Role Prvilate', 'mdi-checkbox-blank-circle', '/ums/user']
      ],

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-ballot',
          title: 'Bill',
          to: '/bill'
        },
        {
          icon: 'mdi-arrow-left-bold-circle',
          title: 'Sign Out',
          to: '/login'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Home Management'
    }
  }
}
</script>
