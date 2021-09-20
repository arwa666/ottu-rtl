<template>
  <div class="rent-mangement">
              <v-layout  wrap justify-center>
          <v-layout  wrap justify-center>
            <v-flex xs12 sm12 lg10>
              <v-layout class="pt-5"  wrap>
                <v-flex grow pa-1 xs10 md8>
                  <v-layout align-start wrap>
                    <v-flex xs12 md4>
                      <h2 class="display-2">Rent Management</h2>
                    </v-flex>
                    <v-flex xs12 md8>
                      <v-select
                        :items="items3"
                        label="1"
                        solo
                        class="re-rent"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex shrink pa-1 xs2 md4 class="re-rel-pos text-xs-right">
                  <v-btn fab small outline v-on="on" class="re-abs-pos">
                    <v-icon>history</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex>
                  <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                      <v-icon>fiber_manual_record</v-icon>
                    </template>
                  </v-breadcrumbs>
                </v-flex>
              </v-layout>
              <v-layout class="mb-4">
                <v-flex md4>
                  <v-card class="pb-3">
                    <v-toolbar class="re-toolbar re-justify-center" dense>
                      <h4 class="re-green-c font-weight-medium">
                        Total Paid This Month
                      </h4>
                    </v-toolbar>
                    <!-- <v-divider></v-divider> -->
                    <v-card-text>
                      <div class="re-amount">400 KWD</div>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md4 class="ml-2">
                  <v-card class="pb-3">
                    <v-toolbar class="re-toolbar re-justify-center" dense>
                      <h4 class="re-lime-c font-weight-medium">
                        Pending Payments
                      </h4>
                    </v-toolbar>
                    <!-- <v-divider></v-divider> -->
                    <v-card-text>
                      <div class="re-amount">400 KWD</div>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md4 class="ml-2">
                  <v-card class="pb-3">
                    <v-toolbar class="re-toolbar re-justify-center" dense>
                      <h4 class="re-red-c font-weight-medium">Late Payments</h4>
                    </v-toolbar>
                    <!-- <v-divider></v-divider> -->
                    <v-card-text>
                      <div class="re-amount">400 KWD</div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-card>
                <v-toolbar class="re-toolbar re-wrap">
                  <div class="re-flex">
                    Rows Per Page
                    <v-radio-group v-model="row" class="re-radios"
                      ><v-radio label="all" value="radio-1"></v-radio>
                    </v-radio-group>
                  </div>
                  <v-spacer></v-spacer>
                  <v-text-field
                    hide-details
                    placeholder="Search"
                    single-line
                  ></v-text-field>

                  <v-spacer></v-spacer>

                  <v-btn  dark class="re-full"
                    >EXPORT RENT DETAILS</v-btn
                  >
                  <!-- <v-btn color="warning" dark class="re-orangtbtn">FILTER <v-icon right>filter_list</v-icon></v-btn> -->
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x
                    class="re-filter"
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn
                        
                        dark
                        class="re-orangtbtn re-full"
                        v-on="on"
                      >
                        FILTER <v-icon right>filter_list</v-icon>
                      </v-btn>
                    </template>

                    <v-card class="pb-4">
                      <v-list>
                        <v-list-tile avatar>
                          <v-list-tile-content>
                            <v-list-tile-title>FILTER</v-list-tile-title>
                          </v-list-tile-content>

                          <v-list-tile-action>
                            <v-btn icon @click="menu = false">
                              <v-icon> close </v-icon>
                            </v-btn>
                          </v-list-tile-action>
                        </v-list-tile>
                      </v-list>

                      <v-divider></v-divider>

                      <v-list>
                        <v-list-tile>
                          <v-select label="MONTH"> </v-select>
                        </v-list-tile>

                        <v-list-tile>
                          <v-text-field label="Year" reverse></v-text-field>
                        </v-list-tile>

                        <v-list-tile>
                          <v-text-field label="Property name" reverse></v-text-field>
                        </v-list-tile>
                      </v-list>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn  dark class="re-orangtbtn"
                          >SEARCH</v-btn
                        >
                        <v-btn
                          flat
                          @click="menu = false"
                          class="re-gray-btn re-box-shadow"
                          >RESET</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-toolbar>
               
                <!-- <v-btn color="primary" dark @click="expand = !expand">
                    {{ expand ? 'Close' : 'Keep' }} other rows
                  </v-btn> -->
                    <div style="overflow:auto">
                        <v-data-table
                      :headers="headers1"
                      :items="units1"
                      class=""
                      :pagination.sync="pagination"
                      :expand="expand"
                       item-key="name"
                       hide-actions
                     
                      
                    >
                      <template v-slot:items="props">
                        <td
                          class="
                            text-xs-center
                            re-td re-min165 re-orange-color
                            re-first__td
                            first-column
                          "
                          @click="props.expanded = !props.expanded ;"
                          :class = {expanded:props.expanded}
                         
                        >
                          <div> <span class="triangle"></span>{{ props.item.name }}</div>
                        </td>
                        <td class="text-xs-left re-first__td re-width-145">
                          <div>{{ props.item.address }}</div>
                        </td>
                        <td class="text-xs-left re-first__td re-width-145">
                            <div>{{ props.item.total }}</div>
                          </td>
                          <td class="text-xs-center  ">
                            <div>{{ props.item.pending }}</div>
                          </td>
                          <td class="text-xs-center ">
                            <div>{{ props.item.late }}</div>
                          </td>
                      </template>
                      <template v-slot:expand>
                        <div class="content inner-table">
                    <v-data-table
                      :headers="headers2"
                      :items="units2"
                      class=""
                      :items-per-page="6"
                      hide-actions
                     
                    >
                      <template v-slot:items="props">
                        <td class="text-xs-center" dense>
                          {{ props.item.unit}}
                        </td>
                        <td class="text-xs-center" dense>
                          {{ props.item.floor }}
                        </td>
                        <td class="text-xs-center re-orange-color re-width-165 " dense>
                          <div class="re-someone">
                            {{ props.item.tenantName }}
                          </div>
                        </td>

                        <td class="text-xs-center" dense>
                          <div class="re-phone">{{ props.item.phone }}</div>
                        </td>
                        <td class="text-xs-center" dense>
                          {{ props.item.email }}
                        </td>
                        <td class="text-xs-center re-green-light" dense>
                              <span class="re-paid"></span> {{
                              props.item.paymentStatus }}
                            </td>
                        <td class="text-xs-center" dense>
                          {{ props.item.rentAmount}}
                        </td>
                        <td class="re-td text-xs-center">
                          <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                              <v-icon v-on="on">more_vert</v-icon>
                            </template>
                            <v-list>
                              <v-list-tile
                                v-for="(edititem, index) in edititems"
                                :key="index"
                               
                              >
                                <v-list-tile-title
                                  >{{ edititem.title }}</v-list-tile-title
                                >
                              </v-list-tile>
                            </v-list>
                          </v-menu>
                        </td>
                      </template>
                            </v-data-table>
                        </div>
                      </template>
                    </v-data-table>
                    </div> 
              </v-card>

                 
             
            </v-flex>
          </v-layout>
        </v-layout>

        <div class="text-xs-center pt-4">
          <v-pagination
            v-model="pagination.page"
            :length="pages"
            class="re-pagination"
          ></v-pagination>
        </div>
  </div>
</template>

<script>
export default {
  name: 'RentMangement',
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
          pagination: {},
          menu: false,
          expand:true,
          row:"",
          on:{},
          items3: ["All", "Paid", "Pending", "Late"],
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
              text: "Rent Management",
              disabled: true,
              href: "#",
            },
          ],
          edititems:[{title:"Manual Payment"},{title: "Generate New Payment Link"}],
          headers1: [
            {
              text: "PROPERTY NAME",
              align: "left",
              sortable: false,
            },
            { text: "ADDRESS", align: "left", sortable: false },
            { text: "TOTAL PAID", align: "left", sortable: false },
            { text: "PENDING PAYMENTS", align: "center", sortable: false },
            { text: "LATE PAYMENTS", align: "center", sortable: false },
          ],
          units1: [
            {
              name: "Mazaya Building1",
              address: "Sharq 12.Street, Mirqab Kuwait",
              total:"4000 KWD",
              pending:"4000 KWD",
              late: "4000 KWD"
            },
            {
              name: "Mazaya Building2",
              address: "Sharq 12.Street, Mirqab Kuwait",
              total:"4000 KWD",
              pending:"4000 KWD",
              late: "4000 KWD"
            },
            {
              name: "Mazaya Building3",
              address: "Sharq 12.Street, Mirqab Kuwait",
              total:"4000 KWD",
              pending:"4000 KWD",
              late: "4000 KWD"
            },
          ],
          headers2: [
            {
              text: "UNIT",
              align: "center",
              sortable: false,
            },
            {
              text: "FLOOR",
              align: "center",
              sortable: false,
            },
            {
              text: "TENANT NAME",
              align: "center",
              sortable: false,
            },
            {
              text: "PHONE",
              align: "center",
              sortable: false,
            },
            {
              text: "EMAIL",
              align: "center",
              sortable: false,
            },
            {
              text: "PAYMENT STATUS",
              align: "center",
              sortable: false,
            },
            {
              text: "RENT AMOUNT",
              align: "center",
              sortable: false,
            },
            {
              text: "ACTION",
              align: "center",
              sortable: false,
            },
          ],
          units2: [
            {
              unit: "1A",
              floor: "G",
              tenantName: "someone alsomeone",
              phone: "+956 5555 5555",
              email: "someone@email.com",
              paymentStatus: "Paid",
              rentAmount: "300 KWD",
            },
            {
              unit: "1A",
              floor: "G",
              tenantName: "someone alsomeone",
              phone: "+956 5555 5555",
              email: "someone@email.com",
              paymentStatus: "Paid",
              rentAmount: "300 KWD",
            },
            {
              unit: "1A",
              floor: "G",
              tenantName: "someone alsomeone",
              phone: "+956 5555 5555",
              email: "someone@email.com",
              paymentStatus: "Paid",
              rentAmount: "300 KWD",
            },

          ],
        }),
        methods:{
                expandFunc: function() {
                    this.expand = !this.expand;
                },
                beforeMount(){
                this.expandFunc()
            },
            },

        props: {
          source: String,
        },

}
</script>


