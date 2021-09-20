<template>
  <div class="terminate-contract">
              <v-layout class="pt-5">
          <v-flex grow pa-1 xs6>
            <h2 class="display-2 pl-4">Property</h2>
          </v-flex>
          <v-flex shrink pa-1 xs6 text-xs-right>
            <v-btn  dark class="mt-4 r-m-end">← BACK</v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex class="flex-wrap" xs12 pa-1>
            <v-breadcrumbs :items="items" class="pl-4">
              <template v-slot:divider>
                <v-icon>fiber_manual_record</v-icon>
              </template>
            </v-breadcrumbs>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm12 lg9>
              <v-card>
                <v-card-title>
                  <h3>Terminate Contract Transaction</h3>
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Property Name" reverse></v-text-field>

                    <v-select label="Unit Number"></v-select>

                    <v-select label="Unit Type"></v-select>
                    <!-- <v-text-field
                            label="Unit Type"
                            required
                          ></v-text-field> -->

                    <v-text-field label="Tenant Name" required reverse></v-text-field>

                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="date"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date"
                          label="Old Contract Start Date"
                          prepend-icon="event"
                          readonly
                          reverse
                          v-on="on"
                          class="re-datepicker"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          flat
                          color="primary"
                          @click="$refs.menu.save(date)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>

                    <v-menu
                      ref="menu1"
                      v-model="menu1"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="date1"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date1"
                          label="Old Contract End Date"
                          prepend-icon="event"
                          readonly
                          reverse
                          v-on="on"
                          class="re-datepicker"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date1" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu1 = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          flat
                          color="primary"
                          @click="$refs.menu1.save(date1)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>

                    <v-menu
                      ref="menu2"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="date2"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date2"
                          label="Terminate Date"
                          prepend-icon="event"
                          readonly
                          reverse
                          v-on="on"
                          class="re-datepicker"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date2" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu2 = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          flat
                          color="primary"
                          @click="$refs.menu2.save(date2)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                    <v-menu
                    ref="menu3"
                    v-model="menu3"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="date3"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date3"
                        label="Actual Leave Date"
                        prepend-icon="event"
                        readonly
                        reverse
                        v-on="on"
                        class="re-datepicker"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date3" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="menu3 = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        flat
                        color="primary"
                        @click="$refs.menu3.save(date3)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                  <v-menu
                  ref="menu4"
                  v-model="menu4"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="date4"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date4"
                      label="Leave Notice  Date"
                      prepend-icon="event"
                      readonly
                     reverse
                      v-on="on"
                      class="re-datepicker"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date4" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu4 = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      flat
                      color="primary"
                      @click="$refs.menu4.save(date4)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
        <div class="text-xs-center mt-4">
          <v-btn dark class="re-orangtbtn" to = "/terminate_list" >SAVE</v-btn>
          <v-btn  dark to = "/new_contract">CANCEL</v-btn>
        </div>
  </div>
</template>

<script>

export default {
  name: 'TerminateContract',

 data: () => ({
          drawer: null,
          date:"",
          date1:"",
          date2:"", 
          date3:"",
          date4:"",
          menu:false,
          menu1:false,
          menu2:false,
          menu3:false,
          menu4:false,
          items: [
            {
              text: "Dashboard",
              disabled: false,
              href: "#",
            },
            {
              text: "Property Management",
              disabled: true,
              href: "#",
            },
            {
              text: "Terminate Contract Transaction",
              disabled: true,
              href: "#",
            },
          ],
        }),

        props: {
          source: String,
        },
}
</script>


