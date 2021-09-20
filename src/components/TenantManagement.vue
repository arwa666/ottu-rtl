<template>
  <div class="tenant-managmement">
        <v-layout row wrap justify-center>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm12 lg10>
              <v-layout class="pt-5" row wrap>
                <v-flex grow pa-1 xs12 sm5 md8>
                  <v-layout align-start row wrap class="re-mm-24">
                    <v-flex xs6 md4>
                      <h2 class="display-2 pl-4" style="margin-inline-start: 0;">properties</h2>
                    </v-flex>
                    <v-flex xs6 md8> </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex
                  shrink
                  pa-1
                  xs12
                  sm7
                  md4
                  class="re-rel-pos text-xs-right"
                >
                  <v-btn  dark class="re-orangtbtn re-ml-4"
                    ><v-icon>add</v-icon> ADD TENANT
                  </v-btn>
                  <v-btn fab small outline v-on="on" class="re-abs-pos">
                    <v-icon>history</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout class="re-mm-24">
                <v-flex>
                  <v-breadcrumbs :items="items" class="pl-4">
                    <template v-slot:divider>
                      <v-icon>fiber_manual_record</v-icon>
                    </template>
                  </v-breadcrumbs>
                </v-flex>
              </v-layout>

              <v-card>
                <v-toolbar class="re-toolbar re-wrap">
                  <div class="re-flex">
                    Rows Per Page
                    <v-radio-group v-model="row" row class="re-radios"
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
                    >EXPORT TENANT</v-btn
                  >
                  <!-- <v-btn color="warning" dark class="re-orangtbtn">FILTER <v-icon right>filter_list</v-icon></v-btn> -->
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x
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

                        <v-btn dark class="re-orangtbtn"
                          >SEARCH</v-btn
                        >
                        <v-btn
                          color="primary"
                          flat
                          @click="menu = false"
                          class="re-gray-btn re-box-shadow"
                          >RESET</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-toolbar>
                <v-layout style="overflow:auto">
                  <div>
                    <v-data-table
                      :headers="headers1"
                      :items="units"
                      class="re-table re-table1"
                      :pagination.sync="pagination"
                      hide-actions
                    >
                      <template v-slot:items="props">
                        <td class="re-td text-xs-center ">
                          <div style="width: fit-content">
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
                          </div>
                        </td>
                        <td
                          class="
                            text-xs-center
                            re-td re-min165 re-orange-color
                            re-width-165 div
                          "
                        >
                          <div>{{ props.item.name }}</div>
                        </td>
                        <td class="text-xs-center re-width-145 div ">
                          <div>{{ props.item.phone }}</div>
                        </td>
                        <td class="text-xs-center">
                          <div>{{ props.item.email }}</div>
                        </td>
                      </template>
                    </v-data-table>
                  </div>
                  <div  >
                    <v-data-table
                      :headers="headers2"
                      :items="units2"
                      class=" re-table re-table2"
                      :items-per-page="6"
                      hide-actions
                    >
                      <template v-slot:items="props">
                        <td class="text-xs-center" dense>
                          {{ props.item.propertyName}}
                        </td>
                        <td class="text-xs-center" dense>
                          {{ props.item.unitNumber }}
                        </td>
                        <td class="text-xs-center" dense>
                          {{ props.item.contactNumber }}
                        </td>

                        <td class="text-xs-center" dense>
                          {{ props.item.startDate }}
                        </td>
                        <td class="text-xs-center" dense>
                          {{ props.item.endDate }}
                        </td>
                        <td class="text-xs-center" dense>
                          {{ props.item.leaveDate }}
                        </td>
                        <td class="text-xs-center" dense>
                          {{ props.item.latePayments}}
                        </td>
                        <td class="re-td text-xs-center">
                          <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                              <v-icon v-on="on">more_vert</v-icon>
                            </template>
                            <v-list>
                              <v-list-tile
                                v-for="(edititem, index) in edititems2"
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
                </v-layout>
              </v-card>
              <div class="text-xs-center pt-4">
                <v-pagination
                  v-model="pagination.page"
                  :length="pages"
                  class="re-pagination"
                ></v-pagination>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>
  </div>
</template>

<script>
export default {
  name: 'TenantManagement',
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
          pagination: {},
          menu: false,
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
              text: "Tenant Management",
              disabled: true,
              href: "#",
            },
          ],
          edititems: [
            // { title: 'Generate New Payment Link' }

            { title: "Edit Tenant" },
            { title: "New Contact" },
          ],
          edititems2: [
            // { title: 'Generate New Payment Link' }

            { title: "Renew Contract" },
            { title: "Terminate Contract" },
            { title: "Advance Payment" },
            { title: "Manual Payment" },
          ],
          headers1: [
            {
              text: "",
              align: "left",
              sortable: false,
            },
            {
              text: "TENANT NAME",
              align: "left",
              sortable: false,
            },
            { text: "PHONE", align: "center", sortable: false },
            { text: "EMAIL", align: "center", sortable: false },
          ],
          headers2: [
            { text: "PROPERTY NAME", align: "center", sortable: false },
            { text: "UNIT NUMBER", align: "center", sortable: false },
            { text: "CONTACT NUMBER", align: "center", sortable: false },
            { text: "START DATE", align: "center", sortable: false },
            { text: "END DATE", align: "center", sortable: false },
            { text: "LEAVE DATE", align: "center", sortable: false },
            { text: "LATE PAYMENTS", align: "center", sortable: false },
            { text: "ACTION", align: "center", sortable: false },
          ],

          units: [
            {
              name: "Someone Al-Someone",
              phone: "+965 5555 555",
              email: "someone@gmail.com",
              // propertyName : ['Mazaya Building', 'Mazaya Building'],
              // unitNumber: ['A1','A1'],
              // contactNumber: ['123','123'],
              // startDate:['1/7/2021','1/7/2021'],
              // endDate:['1/7/2021','1/7/2021'],
              // leaveDate:['1/7/2021','1/7/2021'],
              // latePayments:['0','0']
            },
            {
              name: "Someone Al-Someone",
              phone: "+965 5555 555",
              email: "someone@gmail.com",
            },
            {
              name: "Someone Al-Someone",
              phone: "+965 5555 555",
              email: "someone@gmail.com",
            },
          ],
          units2: [
            {
              propertyName: "Mazaya Building",
              unitNumber: "A1",
              contactNumber: "123",
              startDate: "1/7/2021",
              endDate: "1/7/2021",
              leaveDate: "1/7/2021",
              latePayments: "0",
            },
            {
              propertyName: "Mazaya Building",
              unitNumber: "A1",
              contactNumber: "123",
              startDate: "1/7/2021",
              endDate: "1/7/2021",
              leaveDate: "1/7/2021",
              latePayments: "0",
            },
            {
              propertyName: "Mazaya Building",
              unitNumber: "A1",
              contactNumber: "123",
              startDate: "1/7/2021",
              endDate: "1/7/2021",
              leaveDate: "1/7/2021",
              latePayments: "0",
            },
            {
              propertyName: "Mazaya Building",
              unitNumber: "A1",
              contactNumber: "123",
              startDate: "1/7/2021",
              endDate: "1/7/2021",
              leaveDate: "1/7/2021",
              latePayments: "0",
            },
            {
              propertyName: "Mazaya Building",
              unitNumber: "A1",
              contactNumber: "123",
              startDate: "1/7/2021",
              endDate: "1/7/2021",
              leaveDate: "1/7/2021",
              latePayments: "0",
            },
            {
              propertyName: "Mazaya Building",
              unitNumber: "A1",
              contactNumber: "123",
              startDate: "1/7/2021",
              endDate: "1/7/2021",
              leaveDate: "1/7/2021",
              latePayments: "0",
            },
          ],
        }),

        props: {
          source: String,
        },
}
</script>


