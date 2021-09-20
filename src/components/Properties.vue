<template>
  <div class="properties">
              <v-layout row wrap justify-center>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm12 lg9>
              <v-layout class="pt-5"  row wrap>
                <v-flex grow pa-1 xs12 sm5 md8>
                  <v-layout align-start row wrap>
                    <v-flex xs6 md4>
                      <h2 class="display-2 re-add-ml">properties</h2>
                    </v-flex>
                    <v-flex xs6 md8>
      
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex shrink pa-1 xs12 sm7 md4  class="re-rel-pos text-xs-right">
                    <v-btn  dark class="re-orangtbtn re-ml-4"
                    ><v-icon>add</v-icon> ADD PROPERTY
                    </v-btn>
                  <v-btn fab small outline v-on="on" class="re-abs-pos">
                    <v-icon>history</v-icon>
                  </v-btn>
                </v-flex>
            </v-layout>
              <v-layout>
                <v-flex class="flex-wrap" xs12 pa-1>
                  <v-breadcrumbs :items="items" class="re-add-ml">
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
      
                      <!-- <v-btn color="warning" dark class="re-orangtbtn">FILTER <v-icon right>filter_list</v-icon></v-btn> -->
                      <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-width="200"
                        offset-x
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                          
                            dark
                            class="re-orangtbtn re-full"
                            v-on="on"
                            v-bind="attrs"
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
                              <v-text-field label="Year"></v-text-field>
                            </v-list-tile>
      
                            <v-list-tile>
                              <v-text-field label="Property name"></v-text-field>
                            </v-list-tile>
                          </v-list>
      
                          <v-card-actions>
                            <v-spacer></v-spacer>
      
                            <v-btn  dark class="re-orangtbtn"
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
                          :items="units1"
                          class="re-table re-table3 re-height145  re-custom-height"
                          :pagination.sync="pagination"
                          hide-actions
                        >
                          <template v-slot:items="props">
                            <td
                              class="
                                text-xs-center
                                re-td re-min165 re-orange-color
                                re-first__td
                                d-sm-table-cell
                              "
                            >
                              <div style="width: 122px">
                                {{ props.item.propertyName }}
                              </div>
                            </td>
                            <td class="text-xs-left re-first__td  d-sm-table-cell">
                              <div style="width: 122px">{{ props.item.address }}</div>
                            </td>
                          </template>
                        </v-data-table>
                      </div>
                      <div>
                        <v-data-table
                          :headers="headers2"
                          :items="units2"
                          class="re-table  re-table4 re-custom-border"
                          hide-actions
                        >
                          <template v-slot:items="props">
                            <td class="text-xs-center  d-sm-table-cell" dense>
                              <v-menu
                                :v-model="menu1"
                                :close-on-content-click="false"
                                :nudge-width="200"
                                offset-x
                              >
                                <template v-slot:activator="{ on }">
                                  <v-btn  dark v-on="on" class="re-show">
                                    {{ props.item.unitType }}
                                  </v-btn>
                                </template>
      
                                <v-card>
                                  <v-list>
                                    <v-data-table
                                      :headers="headers3"
                                      :items="units3"
                                      class="re-table"
                                      hide-actions
                                    >
                                      <template v-slot:items="props">
                                        <td class="text-xs-left  d-sm-table-cell">
                                          {{ props.item.unitNumber }}
                                        </td>
                                        <td class="text-xs- re-orange-color  d-sm-table-cell">
                                          {{ props.item.tenantName }}
                                        </td>
                                        <td class="text-xs-center  d-sm-table-cell">
                                          {{ props.item.price }}
                                        </td>
                                        <td class="text-xs-center  d-sm-table-cell">
                                          {{ props.item.status }}
                                        </td>
                                        <td class="text-xs-center  d-sm-table-cell">
                                          <v-menu offset-y>
                                              <template v-slot:activator="{ on }"> 
                                                <v-icon v-on="on">more_vert</v-icon>
                                              </template>
                                              <v-list>
                                                <v-list-tile
                                                  v-for="(edititem, index) in edititems2"
                                                  :key="index"
                                                  
              
                                                >
                                                  <v-list-tile-title>{{ edititem.title }}</v-list-tile-title>
                                                </v-list-tile>
                                              </v-list>
                                            </v-menu>
                                        </td>
                                      </template>
                                    </v-data-table>
                                  </v-list>
                                </v-card>
                              </v-menu>
                            </td>
                            <td class="text-xs-center" dense>
                              {{ props.item.unitDescription }}
                            </td>
                            <td class="text-xs-center" dense>
                              {{ props.item.totalUnits }}
                            </td>
      
                            <td class="text-xs-center" dense>
                              {{ props.item.rentedUnits }}
                            </td>
                            <td class="text-xs-center" dense>
                              {{ props.item.vacantUnits }}
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
  name: 'Properties',
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
          i: 0,
        //   row:"",
        //   on:{},
          pagination: {},
          menu: false,
          menu1: false,
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
              text: "Properties",
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
            { title: "Edit Unit" },
            { title: "New Contract" },
            { title: "Renew Contract" },
            { title: "Terminate Contract" },
            { title: "Advance Payment" },
            { title: "Change Price" },
            { title: "Manual Payment" },
          ],

          headers1: [
            {
              text: "PROPERTY NAME",
              align: "center",
              sortable: false,
            },
            {
              text: "ADDRESS",
              align: "left",
              sortable: false,
            },
          ],
          headers2: [
            { text: "UNIT TYPE", align: "center", sortable: false },
            { text: "UNIT DESCRIPTION", align: "center", sortable: false },
            { text: "TOTAL UNITS", align: "center", sortable: false },
            { text: "RENTED UNITS", align: "center", sortable: false },
            { text: "VACANT UNITS", align: "center", sortable: false },
          ],
          headers3: [
            { text: "UNIT NUMBER", align: "left", sortable: false },
            { text: "TENANT NAME", align: "center", sortable: false },
            { text: "PRICE", align: "center", sortable: false },
            { text: "STATUS", align: "center", sortable: false },
            { text: "ACTION", align: "center", sortable: false },
          ],
          units1: [
            {
              propertyName: "Mazaya Building",
              address: "Sharq, 12 Street, Back 1, Mirgab ",
            },
            {
              propertyName: "Shikha Building",
              address: "Sharq, 12 Street, Back 1, Mirgab ",
            },
            {
              propertyName: "Mazaya Building",
              address: "Sharq, 12 Street, Back 1, Mirgab ",
            },
          ],
          units2: [
            {
              unitType: "2BDR",
              unitDescription: "2 bedroom flat",
              totalUnits: "10",
              rentedUnits: "8",
              vacantUnits: "2",
            },
            {
              unitType: "3BDR",
              unitDescription: "3 bedroom flat",
              totalUnits: "5",
              rentedUnits: "4",
              vacantUnits: "1",
            },
            {
              unitType: "4BDR",
              unitDescription: "4 bedroom flat",
              totalUnits: "5",
              rentedUnits: "4",
              vacantUnits: "1",
            },
            {
              unitType: "2BDR",
              unitDescription: "2 bedroom flat",
              totalUnits: "10",
              rentedUnits: "8",
              vacantUnits: "2",
            },
            {
              unitType: "4BDR",
              unitDescription: "4 bedroom flat",
              totalUnits: "5",
              rentedUnits: "4",
              vacantUnits: "1",
            },
            {
              unitType: "2BDR",
              unitDescription: "2 bedroom flat",
              totalUnits: "10",
              rentedUnits: "8",
              vacantUnits: "2",
            },
            {
              unitType: "4BDR",
              unitDescription: "4 bedroom flat",
              totalUnits: "5",
              rentedUnits: "4",
              vacantUnits: "1",
            },
            {
              unitType: "4BDR",
              unitDescription: "4 bedroom flat",
              totalUnits: "5",
              rentedUnits: "4",
              vacantUnits: "1",
            },
          ],
          units3: [
            {
              unitNumber: "Flat 1",
              tenantName: "Someone Al-someone",
              price: "400 KWD",
              status: "Vacant",
            },
            {
              unitNumber: "Flat 2",
              tenantName: "Someone Al-someone",
              price: "400 KWD",
              status: "Occupied",
            },
            {
              unitNumber: "Flat 3",
              tenantName: "Someone Al-someone",
              price: "400 KWD",
              status: "Occupied",
            },
          ],
        }),
        methods:{

        },
        
        props: {
          source: String,
        },
}
</script>


