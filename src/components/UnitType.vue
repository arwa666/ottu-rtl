<template>
  <div class="unit-type">
       <v-layout row wrap justify-center>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm12 lg10>
              <v-layout class="pt-5 re-mm-24" row wrap>
                <v-flex grow pa-1 xs12 sm5 md8>
                  <v-layout align-start row wrap>
                    <v-flex xs6 md4>
                      <h2 class="display-2">Unit Types</h2>
                    </v-flex>
                    <v-flex xs6 md8>
                      <v-select
                        :items="items3"
                        label="1"
                        solo
                        class="re-rent re-width100"
                      ></v-select>
                    </v-flex>
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
                  <v-btn  dark class="re-orangtbtn re-no-ml"
                    ><v-icon>add</v-icon> ADD NEW UNIT TYPE
                  </v-btn>
                  <v-btn fab small outline v-on="on" class="re-abs-pos">
                    <v-icon>history</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout class="re-mm-24">
                <v-flex>
                  <v-breadcrumbs :items="items">
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
                    >EXPORT UNIT TYPE</v-btn
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

                        <v-btn dark class="re-orangtbtn"
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

                <v-data-table
                  :headers="headers"
                  :items="units"
                  class="elevation-1 re-table"
                  :pagination.sync="pagination"
                  hide-actions
                >
                  <template v-slot:items="props">
                    <td class="re-orange-color">{{ props.item.name }}</td>
                    <td class="text-xs-center"><div style="width: 150px; margin:0 auto">{{ props.item.address }}</div></td>
                    <td class="text-xs-center">{{ props.item.commercial }}</td>
                    <td class="text-xs-center">
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
  name: 'UnitType',
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
          row:"",
          on:{},
          menu:false,
          pagination: {},
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
              text: "Unit Type",
              disabled: true,
              href: "#",
            },
          ],
          edititems: [{ title: "Edit" }],
          headers: [
            {
              text: "UNIT TYPE NAME",
              align: "left",
              sortable: false,
            },
            { text: "UNIT TYPE DESCRIPTION", align: "center", sortable: false },
            { text: "COMMERCIAL", align: "center", sortable: false },
            { text: "ACTION", align: "center", sortable: false },
          ],
          units: [
            {
              name: "A1",
              address: "Sharq, 12 Street, Bock 1, Mirgab ",
              commercial: "no",
            },
            {
              name: "A2",
              address: "Sharq, 12 Street, Bock 1, Mirgab ",
              commercial: "no",
            },
            {
              name: "B1",
              address: "Sharq, 12 Street, Bock 1, Mirgab ",
              commercial: "no",
            },
            {
              name: "B2",
              address: "Sharq, 12 Street, Bock 1, Mirgab ",
              commercial: "no",
            },   
          ],
        }),

        props: {
          source: String,
        },
}
</script>


