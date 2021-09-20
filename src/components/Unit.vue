<template>
  <div class="unit">
              <v-layout class="pt-5"> 
            <v-flex
              grow
              pa-1
              xs6
            >
            <h2 class="display-2 pl-4" >Property</h2>
            </v-flex>
            <v-flex
              shrink
              pa-1
              xs6
              text-xs-right
            >
              <v-btn  dark class="mt-4 r-m-end">← BACK</v-btn> 
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex class="flex-wrap  " xs12 pa-1  >
              <v-breadcrumbs :items="items" class="pl-4" >
                <template v-slot:divider>
                      <v-icon>fiber_manual_record</v-icon>
                </template>
            </v-breadcrumbs>
            </v-flex>
        </v-layout>
       
           

              <v-layout row wrap justify-center>
                <v-flex xs12 sm12 lg9>
                    <v-card>
                        <v-card-title>
                          <h3>Edit Unit</h3>
                        </v-card-title>
                        <v-card-text>
                          <v-layout>
                            <v-flex lg8>
                              <h4>Property Name</h4>
                            </v-flex>
                            <v-flex lg4>
                              <v-layout align-center>
                                <v-flex>
                                  Status
                                  <v-spacer> </v-spacer>
                                </v-flex>
                                <v-flex>
                                  <v-select label="VACANT"> ></v-select>
                                </v-flex>
                              </v-layout>
                            </v-flex>
                          </v-layout>
                          <v-form>
                            <v-text-field label="Unit Number" reverse> ></v-text-field>
          
                            <v-text-field label="Floor" reverse> ></v-text-field>
                          </v-form>
                        </v-card-text>
                      </v-card>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex md12 lg9 text-xs-right>
                  <v-btn  dark class="re-orangtbtn mt-5 mb-3 mr-0">
                    NEW CONTACT
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex md12 lg9>
                  <v-card class="tenant">
                    <v-toolbar class="re-toolbar">
                      <h3>Tenant History</h3>
                    </v-toolbar>
                    <div style="overflow:auto
                    "
                    > 
                    <v-data-table
                      :headers="headers"
                      :items="units"
                      class="elevation-1 re-table"
                      :pagination.sync="pagination"
                      hide-actions
                    >
                      <template v-slot:items="props">
                        <td class="re-orange-color text-xs-center">
                          {{ props.item.name }}
                        </td>
                        <td class="text-xs-center">{{ props.item.phone }}</td>
                        <td class="text-xs-center">{{ props.item.email }}</td>
                        <td class="text-xs-center">{{ props.item.contractId }}</td>
                        <td class="text-xs-center">{{ props.item.startDate }}</td>
                        <td class="text-xs-center">{{ props.item.endDate }}</td>
                        <td class="text-xs-center">{{ props.item.leaveDate }}</td>
                      </template>
                    </v-data-table>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
         
          <div class="text-xs-center mt-4">
            <v-btn  dark class="re-orangtbtn">SAVE</v-btn>
            <v-btn  dark>CANCEL</v-btn>
          </div>
  </div>
</template>

<script>
export default {
  name: 'Unit',
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
          row:"",
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
              text: "Properties",
              disabled: true,
              href: "#",
            },
            {
              text: "Edit Property",
              disabled: true,
              href: "#",
            },
            {
              text: "Edit Unit",
              disabled: true,
              href: "#",
            },
          ],
          edititems: [{ title: "Edit" }],
          headers: [
            {
              text: "Tenant NAME",
              align: "center",
              sortable: false,
            },
            { text: "Phone", align: "center", sortable: false },
            { text: "Email", align: "center", sortable: false },
            { text: "CONTRACT ID", align: "center", sortable: false },
            { text: "START DATE", align: "center", sortable: false },
            { text: "END DATE", align: "center", sortable: false },
            { text: "LEAVE DATE", align: "center", sortable: false },
          ],
          units: [
            {
              name: "Flan Al-Somebody",
              phone: "991234567",
              email: "example@gmail.com",
              contractId: "123",
              startDate: "1/9/2021",
              endDate: "1/9/2021",
              leaveDate: "1/9/2021",
            },
            {
              name: "Flan Al-Somebody",
              phone: "991234567",
              email: "example@gmail.com",
              contractId: "123",
              startDate: "1/9/2021",
              endDate: "1/9/2021",
              leaveDate: "1/9/2021",
            },
            {
              name: "Flan Al-Somebody",
              phone: "991234567",
              email: "example@gmail.com",
              contractId: "123",
              startDate: "1/9/2021",
              endDate: "1/9/2021",
              leaveDate: "1/9/2021",
            },
          ],
        }),

        props: {
          source: String,
        },

}
</script>


