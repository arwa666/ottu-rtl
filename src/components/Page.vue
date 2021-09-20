<template>
 <div>
           <v-navigation-drawer value="true" v-model="drawer" fixed left app>
        <v-list>
          <v-img
            lazy-src="https://delta.ottu.com/media/config/Ottu_1LH3qD1.png"
            max-height="150"
            max-width="250"
            src="https://delta.ottu.com/media/config/Ottu_1LH3qD1.png"
            class="ml-auto mr-auto"
          ></v-img>
          <h3 class="text-xs-center">Ottu</h3>
          <p class="text-xs-center">Online Payment Solution</p>
          <v-list-tile class="re-orange-color">
            <v-icon class="mr-1 re-orange">dashboard</v-icon>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile>
          <v-list-group prepend-icon="payment" value="false" class="grey1">
            <template v-slot:activator>
              <v-list-tile  >
                <v-list-tile-title>Payment Request</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>

          <v-list-group prepend-icon="update" value="false" class="grey1">
            <template v-slot:activator>
              <v-list-tile >
                <v-list-tile-title>Bulk</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
          <v-list-group prepend-icon="account_balance_wallet" value="false" class="grey1">
            <template v-slot:activator>
              <v-list-tile >
                <v-list-tile-title>Customer Payment</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
          <v-list-group prepend-icon="store" value="false" class="grey1">
            <template v-slot:activator>
              <v-list-tile >
                <v-list-tile-title>Catalogue</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
          <v-list-group prepend-icon="local_grocery_store" value="false" class="grey1">
            <template v-slot:activator>
              <v-list-tile >
                <v-list-tile-title>E-commerce</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
          <v-list-group prepend-icon="local_grocery_store" value="false" class="grey1">
            <template v-slot:activator>
              <v-list-tile >
                <v-list-tile-title>Shopify</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
          <v-list-group prepend-icon="store" value="false" class="grey1">
            <template v-slot:activator>
              <v-list-tile class="grey1">
                <v-list-tile-title>Events</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group >
          <v-list-tile >
            <v-list-tile-action>
              <v-icon>contact_support</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title >Help/Support</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="#212121" dark fixed app class="re-tool">
        <v-spacer></v-spacer>
        <v-toolbar-title></v-toolbar-title>
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        ></v-toolbar-side-icon>
        <v-img
          lazy-src="images/ottu-logo.png"
          max-height="70"
          max-width="120"
          src="images/ottu-logo.png"
          class="re-ma"
        ></v-img>
      </v-toolbar>
      <v-content>

          <TerminateContract/>
          <router-view/>
      </v-content>
 </div>
</template>

<script>

import TerminateContract from "./TerminateContract.vue"
export default {
  name: 'Page',
  components: {

   TerminateContract
  },
    data: () => ({
          drawer: null,
          pagination: {},
          menu: false,
          dialog:false,  
        }),
  props: {
    source: String,
    msg: String
  }
}
</script>


