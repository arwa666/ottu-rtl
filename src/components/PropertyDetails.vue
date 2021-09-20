<template>
    <div class="property-details">
               <v-layout class="pt-5">
          <v-flex grow pa-1 xs6>
            <h2 class="display-2 pl-4">Property</h2>
          </v-flex>
          <v-flex shrink pa-1 xs6 text-xs-right>
            <v-btn  dark class="mt-4 r-m-end">← BACK</v-btn>
          </v-flex>
        </v-layout>
        <v-layout class="r-p-24px">
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
                      <h3>Property Details</h3>
                    </v-card-title>
                    <v-card-text>
                      <v-form>
                        <v-text-field
                          label="Unit Property Name (EN)"
                          required
                          reverse
                        ></v-text-field>
                        <v-text-field
                          label="Unit Property Name (AR)"
                          required
                          reverse
                        ></v-text-field>
                        <v-text-field
                          label="Address"
                          required
                          reverse
                        ></v-text-field>
                        <v-select label="Gateway"> ></v-select>
                        <v-checkbox label="Allow cash payment"></v-checkbox>
                      </v-form>
                    </v-card-text>
                  </v-card>

                  
            </v-flex>
          </v-layout>
        </v-layout>
        <div>
            <v-layout row wrap justify-center>
                <v-flex md12 lg9 text-xs-right>
                  <v-btn  dark class="re-orangtbtn mt-5 mb-3 mr-0">
                    ADD UNIT TYPE WITH UNITS
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex md12 lg9>
                  <v-card class="tenant pb-4" >
                    <v-toolbar class="re-toolbar">
                      <h3>Unit Type</h3>
                    </v-toolbar>
      
                    <v-layout row wrap justify-center>
                      <v-flex lg8 class="pl-4 mt-3">
                        <v-select label="Unit Type"> </v-select>
                      </v-flex>
                      <v-flex lg4 class="text-xs-right pr-2 mt-3">
                          <v-btn  dark class="re-orangtbtn mt-3 mb-3 mr-0">
                            ADD UNIT TYPE 
                          </v-btn>
                      </v-flex>
                    </v-layout>
                    <v-layout wrap>
                          <v-flex xs12 lg8 class="mt-5 pl-4">
                              <h3 class="re-h3 ">Units of Type [Unit Type Name]</h3>
                          </v-flex>
                          <v-flex xs12 lg4 class="text-xs-right mt-5 pr-2">

                                                      
                          <template>
                          <div>
                            <v-dialog v-model="dialog" width="98%" class="re-dialog">
                              <template v-slot:activator="{ on }">
                                <v-btn
                                 
                                  dark
                                  class="re-orangtbtn"
                                  v-on="on"
                                >
                                ADD OR EDIT UNITS
                                </v-btn>
                              </template>
      
                              <v-card class="pb-3">
                                <v-card-title class="headline re-card-title ">
                                  Edit Units [Unit Type Name]
                                </v-card-title>
      
                                <v-card-text>
                                 <div style="overflow:auto">
                                  <v-data-table
                                  :headers="headers1"
                                  :items="units"
                                  class="re-table"
                                  :pagination.sync="pagination"
                                  hide-actions
                                >
                                  <template v-slot:items="props">
                                    <td class="re-orange-color text-xs-center">
                                      {{ props.item.id }}
                                    </td>
                                    <td class="text-xs-center">
                                      <!-- <v-flex  xs12 sm10 md8 lg6> -->
                                        <v-text-field
                                          class="re-input"
                                          :value="props.item.unitNumber"
                                          outline
                                        ></v-text-field>
                                      <!-- </v-flex> -->
                                    </td>
                                    <td class="text-xs-center">
                                      <!-- <v-flex xs12   lg5> -->
                                        <v-text-field
                                          class="re-input re-width-custom"
                                          :value="props.item.floor"
                                          outline
                                        ></v-text-field>
                                      <!-- </v-flex> -->
                                    </td>
                                    <td class="text-xs-center re-100">
                                      {{ props.item.price }}
                                    </td>
                                    <td class="text-xs-center re-type">
                                      <v-layout >
                                        <v-flex  xs6  sm5 lg4>
                                          <v-text-field
                                            class="re-input re-width-custom"
                                            :value="props.item.discount"
                                            outline
                                          ></v-text-field>
                                        </v-flex>
                                        <v-flex xs6 sm7 lg8>
                                          <v-radio-group
                                            v-model="discount1"
                                            row
                                            class="re-radios "
                                          >
                                            <v-radio
                                              label="Percentage"
                                              value="percentage"
                                              color="grey darken-1"
                                            ></v-radio>
                                            <v-radio
                                              label="Fixed"
                                              value="fixed"
                                            ></v-radio>
                                          </v-radio-group>
                                        </v-flex>
                                      </v-layout>
                                    </td>
                                    <td class="text-xs-center">
                                      {{ props.item.invoiceAmount }}
                                    </td>
                                    <td>
                                      <v-icon> close </v-icon>
                                    </td>
                                  </template>
                                </v-data-table>
                                 </div>
                                </v-card-text>
      
                                <v-layout wrap class="pl-5 re-pl-5 mt-3">
                                  <v-flex xs12 sm3 d-flex>
                                   <p class="r-p ">
                                      How many units would you like to add ?
                                   </p>
                                  </v-flex>
                                  <v-flex xs12 sm9>
                                    <v-layout >
                                      <v-flex xs4 sm1 mr-3 no-mr class="r-quantity">
                                        <v-text-field
                                          class="re-input re-centered-label"
                                          label="1"
                                          outline
                                          reverse
                                        ></v-text-field>
                                      </v-flex>
                                      <v-flex xs4 sm1 class="r-price">
                                        <v-text-field
                                          class="re-input re-centered-label"
                                          label="Price"
                                          outline
                                          reverse
                                        ></v-text-field>
                                      </v-flex>
                                      <v-flex xs4 sm1 re-text-center>
                                        <v-btn  dark class="re-add"> ADD </v-btn>
                                      </v-flex>
                                    </v-layout>
                                  </v-flex>
                                </v-layout>
      
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-layout row justify-end>
                                      <v-flex sm7 md5 class="mr-5">
                                          <v-btn  dark class="re-orangtbtn">
                                              SAVE AND RETURN
                                          </v-btn>
                                          <v-btn
                                          color="primary"
                                          flat
                                          @click="dialog = false"
                                      >
                                          Cancel
                                      </v-btn>
                                      </v-flex>
                                  </v-layout>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>
                        </template>
                          </v-flex>
                    </v-layout>
                    <div style="overflow:auto">
                      <v-data-table
                      :headers="headers"
                      :items="units"
                      class=" re-table"
                      :pagination.sync="pagination"
                      hide-actions
                    >
                      <template v-slot:items="props">
                        <td class="re-orange-color text-xs-center">
                          {{ props.item.id }}
                        </td>
                        <td class="text-xs-center">{{ props.item.unitNumber }}</td>
                        <td class="text-xs-center">{{ props.item.floor }}</td>
                        <td class="text-xs-center">{{ props.item.price }}</td>
                        <td class="text-xs-center d-flex re-select">
                          {{ props.item.discount }}
                          <v-form class="re-discount-type">
                            <v-radio-group v-model="discount1" row class="re-radios" style="margin-top:0px!important">
                              <v-radio
                                label="Percentage"
                                value="percentage"
                                color="grey darken-1"
                              ></v-radio>
                              <v-radio
                                label="Fixed"
                                value="fixed"
                                 color="grey darken-1"
                              ></v-radio> </v-radio-group
                          ></v-form>
                        </td>
                        <td class="text-xs-center">{{ props.item.invoiceAmount }}</td>
                      </template>
                    </v-data-table>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
        </div>
        <div class="text-xs-center mt-4">
          <v-btn  dark class="re-orangtbtn">SAVE</v-btn>
          <v-btn dark>CANCEL</v-btn>
        </div> 
    </div>
</template>

<script>
export default {
  name: 'PropertyDetails',
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
          discount1: "percentage",
          dialog: false,
          pagination:{},
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
              text: "Properties",
              disabled: true,
              href: "#",
            },
            {
              text: "Edit Property",
              href: "#",
              disabled: true,
            },
          ],
          edititems: [{ title: "Edit" }],
          headers1: [
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
          headers: [
            {
              text: "ID",
              align: "center",
              sortable: false,
            },
            { text: "UNIT NUMBER", align: "center", sortable: false },
            { text: "FLOOR", align: "center", sortable: false },
            { text: "PRICE", align: "center", sortable: false },
            { text: "DISCOUNT", align: "left", sortable: false },
            { text: "INVOICE AMOUNT", align: "center", sortable: false },
          ],
          units: [
            {
              id: "123a",
              unitNumber: "1A",
              floor: "G",
              price: "300 KWD",
              discount: "10",
              invoiceAmount: 300,
            },
            {
              id: "123b",
              unitNumber: "1A",
              floor: "G",
              price: "300 KWD",
              discount: "10",
              invoiceAmount: 300,
            },
            {
              id: "123c",
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


