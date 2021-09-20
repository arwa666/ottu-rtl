<template>
  <div class="new-contract">
              <v-layout class="pt-5">
          <v-flex grow pa-1 xs6>
            <h2 class="display-2 pl-4">Property</h2>
          </v-flex>
          <v-flex shrink pa-1 xs6 text-xs-right>
            <v-btn  dark class="mt-4 r-m-end">← BACK</v-btn>
          </v-flex>
        </v-layout>
        <v-layout class= "re-mm-24px">
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
                        <h3>New Contract</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-form
                        >
                             <v-text-field 
                                label="Tenant Name"
                                reverse
                              ></v-text-field>

                              <v-text-field 
                              label="Property Name"
                              reverse
                            ></v-text-field>

                            <v-select
                            label="Unit Type"
                            required
                          ></v-select>

                          <v-select
                            label="Unit Number"
                            required
                          ></v-select>

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
                              label="Contract Start Date"
                              prepend-icon="event"
                              readonly
                              reverse
                              v-on="on" 
                            class="re-datepicker re-pos-absolute "
                            
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
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
                              label="Payment Start Date"
                              prepend-icon="event"
                              readonly
                              reverse
                              v-on="on" 
                            class="re-datepicker"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date1" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
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
                          label="Contract End Date"
                          prepend-icon="event"
                          readonly
                          reverse
                          v-on="on" 
                        class="re-datepicker"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date3" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu3 = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu3.save(date3)">OK</v-btn>
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
                              label="Leave Notice Date"
                              prepend-icon="event"
                              readonly
                              reverse
                              v-on="on" 
                              class="re-datepicker"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date2" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
                          </v-date-picker>
                        </v-menu>
                        <v-menu
                        ref="menu5"
                        v-model="menu5"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="date5"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="date5"
                            label="Actual Leave Date"
                            prepend-icon="event"
                            readonly
                            reverse
                            v-on="on" 
                            class="re-datepicker"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date5" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="menu5 = false">Cancel</v-btn>
                          <v-btn flat color="primary" @click="$refs.menu2.save(date5)">OK</v-btn>
                        </v-date-picker>
                      </v-menu>
                        <v-text-field
                        label="Amount"
                        required
                        reverse
                      ></v-text-field>
                         
                         </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
          </v-layout>
        </v-layout>

        <div class="text-xs-center mt-4">
          <v-btn  dark class="re-orangtbtn" to="/new_contract_list">SAVE</v-btn>
          <v-btn  dark class="/renew_contract">CANCEL</v-btn>
        </div>
  </div>
</template>

<script>
export default {
  name: 'NewContract',
          computed: {
          pages() {
            if (
              this.pagination.rowsPerPage == null ||
              this.pagination.totalItems == null
            )
              return 0;

            return Math.ceil(
              this.pagination.totalItems / this.pagination.rowsPerPage
            );
          },
        },
        data: () => ({
          drawer: null,
          date:"",
          date1:"",
          date2:"",
          date3:"",
          date4:"",
          date5:"",
          menu:false,
          menu1:false,
          menu2:false,
          menu3:false,
          menu4:false,
          menu5:false,
          discount1: "percentage",
          dialog: false,
          items3: ["All", "Rent", "Lease", "Buy"],
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
              text: "New Contract",
              disabled: true,
              href: "#",
            },
          ],
          edititems: [{ title: "Edit" }],
          headers: [
            {
              text: "ID",
              align: "center",
              sortable: false,
            },
            { text: "UNIT NUMBER", align: "center", sortable: false },
            { text: "FLOOR", align: "center", sortable: false },
            { text: "PRICE", align: "center", sortable: false },
            { text: "DISCOUNT", align: "center", sortable: false },
            { text: "INVOICE AMOUNT", align: "center", sortable: false },
          ],
          units: [
            {
              id: "123",
              unitNumber: "1A",
              floor: "G",
              price: "300 KWD",
              discount: "10",
              invoiceAmount: 300,
            },
            {
              id: "123",
              unitNumber: "1A",
              floor: "G",
              price: "300 KWD",
              discount: "10",
              invoiceAmount: 300,
            },
            {
              id: "123",
              unitNumber: "1A",
              floor: "G",
              price: "300 KWD",
              discount: "10",
              invoiceAmount: 300,
            },
          ],
        }),

        props: {
          source: String,
        },
}
</script>