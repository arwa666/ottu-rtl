<template>
    <div class="edit-price-list">
           <v-layout wrap justify-center>
          <v-layout wrap justify-center>
            <v-flex xs12 sm12 lg10>
              <v-layout class="pt-5"  wrap>
                <v-flex grow pa-1 xs10 sm7 md8>
                  <v-layout align-start wrap>
                    <v-flex xs6 sm4>
                      <h2 class="display-2">Edit Price List</h2>
                    </v-flex>
                    <v-flex xs6 sm8>
                      <v-select
                        :items="items3"
                        label="All"
                        solo
                        class="re-rent w-100"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex shrink pa-1 xs2 sm5 md4 class="re-rel-pos text-xs-right">

                  <v-btn fab small outline v-on="on" class="re-abs-pos">
                    <v-icon>history</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout class="re-mm-24 n-margin-left">
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
                         
                          flat
                          @click="menu = false"
                          class="re-gray-btn re-box-shadow"
                          >RESET</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-toolbar>

                <v-layout style="overflow: auto">
                  <v-data-table
                    :headers="headers1"
                    :items="units"
                    :rows-per-page-items="[15, 30, 50, 100]"
                    :pagination.sync="pagination"
                    hide-actions
                    class="width100"
                  >
                    <template v-slot:items="props">
                      <tr @click="handleClick"  selected = "props.item.id">
                        <td
                          class="
                            text-xs-left
                            re-td re-min165 re-orange-color re-width-115
                            div
                          "
                        >
                          <div>{{ props.item.name }}</div>
                        </td>
                        <td class="text-xs-center re-width-145 div">
                          <div>{{ props.item.created }}</div>
                        </td>
                        <td class="text-xs-center">
                          <div>{{ props.item.initiator }}</div>
                        </td>
                        <td
                          class="text-xs-center"
                          :class="{ongoing:props.item.ongoing,expired:!props.item.ongoing}"
                        >
                          <div>{{ props.item.status }}</div>
                        </td>
                        <td class="text-xs-center">
                          <div>{{ props.item.propertyName }}</div>
                        </td>
                        <td class="text-xs-center">
                          <div>{{ props.item.unitNumber }}</div>
                        </td>
                        <td class="text-xs-center">
                          <div>{{ props.item.unitType }}</div>
                        </td>
                        <td class="text-xs-center">
                            <div>{{ props.item.currentUnitAmount }}</div>
                        </td>
                        <td class="text-xs-center">
                            <div>{{ props.item.currentUnitDiscount }}</div>
                        </td>
                        <td class="text-xs-center">
                            <div>{{ props.item.currentPer }}</div>
                        </td>
                        <td class="text-xs-center">
                            <div>{{ props.item.currentUnitNetAmount }}</div>
                        </td>
                        <td class="text-xs-center">
                            <div>{{ props.item.newUnitAmount }}</div>
                        </td>
                        <td class="text-xs-center">
                            <div>{{ props.item.newUnitDiscount }}</div>
                        </td>
                        <td class="text-xs-center">
                            <div>{{ props.item.newPercentage }}</div>
                        </td>
                        <td class="text-xs-center">
                            <div>{{ props.item.newUnitNetAmount }}</div>
                        </td>
                      </tr>
                    </template>
                  </v-data-table>
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
        <template>
          <div class="text-xs-center">
            <v-dialog v-model="dialog" width="500">
              <v-card>
                <v-card-title
                  class="headline d-flex justify-space-between form-title"
                  primary-title
                >
                  <span class="text-start"> CONTRACT ID </span>
                  <v-icon class="d-flex justify-end flip-dir" @click="dialog = false">
                    close
                  </v-icon>
                </v-card-title>

                <v-card-text>
                  <v-list dense>
                    <v-list-tile>
                      <v-list-tile-content>Created</v-list-tile-content>
                      <v-list-tile-content class="align-end"
                        >{{ units[index].created }}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>Initiator</v-list-tile-content>
                      <v-list-tile-content class="align-end orange-c"
                        >{{ units[index].initiator }}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>Status</v-list-tile-content>
                      <v-list-tile-content
                        class="align-end"
                        :class="{ongoing:units[0].ongoing}"
                        >{{ units[index].status }}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>Property Name</v-list-tile-content>
                      <v-list-tile-content class="align-end"
                        >{{ units[index].propertyName }}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>Unit Number</v-list-tile-content>
                      <v-list-tile-content class="align-end"
                        >{{ units[index].unitNumber }}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>Unit Type</v-list-tile-content>
                      <v-list-tile-content class="align-end"
                        >{{ units[index].unitType }}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>Current Unit Amount</v-list-tile-content>
                      <v-list-tile-content class="align-end"
                        >{{ units[index].currentUnitAmount }}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>Current Unit Discount</v-list-tile-content>
                      <v-list-tile-content class="align-end"
                        >{{ units[index].currentUnitDiscount}}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>Current Percentage / Fixed</v-list-tile-content>
                      <v-list-tile-content class="align-end"
                        >{{ units[index].currentPer }}</v-list-tile-content
                      >
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>Current Unit Net Amount</v-list-tile-content>
                        <v-list-tile-content class="align-end"
                          >{{ units[index].currentUnitNetAmount }}</v-list-tile-content
                        >
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content> New Unit Amount</v-list-tile-content>
                        <v-list-tile-content class="align-end"
                          >{{ units[index].newUnitAmount }}</v-list-tile-content
                        >
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>New Unit Discount</v-list-tile-content>
                        <v-list-tile-content class="align-end"
                          >{{ units[index].newUnitDiscount }}</v-list-tile-content
                        >
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content> New Percentage / Fixed</v-list-tile-content>
                        <v-list-tile-content class="align-end"
                          >{{ units[index].newPercentage }}</v-list-tile-content
                        >
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>New Unit Net Amount</v-list-tile-content>
                        <v-list-tile-content class="align-end"
                          >{{ units[index].newUnitNetAmount }}</v-list-tile-content
                        >
                      </v-list-tile>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </template>
    </div>
</template>

<script>
export default {
  name: 'EditPriceList',
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
          menu: false,
          dialog: false,
          index:0,
          row:"",
          pagination: {
            rowsPerPage: 30,
          },
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
              text: "Unit Type",
              disabled: true,
              href: "#",
            },
          ],
          headers1: [
            {
              text: "ID",
              align: "left",
              sortable: false,
            },
            {
              text: "CREATED",
              align: "center",
              sortable: false,
            },
            { text: "INITIATOR", align: "center", sortable: false },
            { text: "STATUS", align: "center", sortable: false },
            { text: "PROPERTY NAME", align: "center", sortable: false },
            { text: "UNIT NUMBER", align: "center", sortable: false },
            { text: "UNIT TYPE", align: "center", sortable: false },
            { text: "CURRENT UNIT AMOUNT", align: "center", sortable: false },
            { text: "CURRENT UNIT DISCOUNT", align: "center", sortable: false },
            {
              text: "CURRENT PERCENTAGE/FIXED",
              align: "center",
              sortable: false,
            },
            {
              text: "CURRENT UNIT NET AMOUNT",
              align: "center",
              sortable: false,
            },
            { text: "NEW UNIT AMOUNT", align: "center", sortable: false },
            { text: "NEW UNIT DISCOUNT", align: "center", sortable: false },
            { text: "NEW PERCENTAGE/FIXED", align: "center", sortable: false },
            { text: "NEW UNIT NET AMOUNT", align: "center", sortable: false },
          ],

          units: [
            {
              name: "A1",
              created: "13:00 09/08/2021",
              initiator: "username",
              status: "Ongoing",
              propertyName: "Mazaya",
              unitNumber: "12",
              unitType: "2 BDR",
              currentUnitAmount: 20,
              currentUnitDiscount: 5,
              currentPer: 3,
              currentUnitNetAmount: 30,
              newUnitAmount: 10,
              newUnitDiscount: 3,
              newPercentage: 4,
              newUnitNetAmount: 9,
              ongoing: true,
            },
            {
              name: "A1",
              created: "13:00 09/08/2021",
              initiator: "username",
              status: "Ongoing",
              propertyName: "Mazaya",
              unitNumber: "12",
              unitType: "2 BDR",
              currentUnitAmount: 20,
              currentUnitDiscount: 5,
              currentPer: 3,
              currentUnitNetAmount: 30,
              newUnitAmount: 10,
              newUnitDiscount: 3,
              newPercentage: 4,
              newUnitNetAmount: 9,
              ongoing: true,
            },
            {
              name: "A1",
              created: "13:00 09/08/2021",
              initiator: "username",
              status: "Ongoing",
              propertyName: "Mazaya",
              unitNumber: "12",
              unitType: "2 BDR",
              currentUnitAmount: 20,
              currentUnitDiscount: 5,
              currentPer: 3,
              currentUnitNetAmount: 30,
              newUnitAmount: 10,
              newUnitDiscount: 3,
              newPercentage: 4,
              newUnitNetAmount: 9,
              ongoing: true,
            },
            {
              name: "A1",
              created: "13:00 09/08/2021",
              initiator: "username",
              status: "Expired",
              propertyName: "Mazaya",
              unitNumber: "12",
              unitType: "2 BDR",
              currentUnitAmount: 20,
              currentUnitDiscount: 5,
              currentPer: 3,
              currentUnitNetAmount: 30,
              newUnitAmount: 10,
              newUnitDiscount: 3,
              newPercentage: 4,
              newUnitNetAmount: 9,
              ongoing: false,
            },
            {
              name: "A1",
              created: "13:00 09/08/2021",
              initiator: "username",
              status: "Ongoing",
              propertyName: "Mazaya",
              unitNumber: "12",
              unitType: "2 BDR",
              currentUnitAmount: 20,
              currentUnitDiscount: 5,
              currentPer: 3,
              currentUnitNetAmount: 30,
              newUnitAmount: 10,
              newUnitDiscount: 3,
              newPercentage: 4,
              newUnitNetAmount: 9,
              ongoing: true,
            },
            {
              name: "A1",
              created: "13:00 09/08/2021",
              initiator: "username",
              status: "Ongoing",
              propertyName: "Mazaya",
              unitNumber: "12",
              unitType: "2 BDR",
              currentUnitAmount: 20,
              currentUnitDiscount: 5,
              currentPer: 3,
              currentUnitNetAmount: 30,
              newUnitAmount: 10,
              newUnitDiscount: 3,
              newPercentage: 4,
              newUnitNetAmount: 9,
              ongoing: true,
            },
            {
              name: "A1",
              created: "13:00 09/08/2021",
              initiator: "username",
              status: "Expired",
              propertyName: "Mazaya",
              unitNumber: "12",
              unitType: "2 BDR",
              currentUnitAmount: 20,
              currentUnitDiscount: 5,
              currentPer: 3,
              currentUnitNetAmount: 30,
              newUnitAmount: 10,
              newUnitDiscount: 3,
              newPercentage: 4,
              newUnitNetAmount: 9,
              ongoing: false,
            },
          ],
        }),
        methods: {
            handleClick(){
                this.dialog = true;
                console.log("hi")
            }
        },
        props: {
          source: String,
        },
      

}
</script>


