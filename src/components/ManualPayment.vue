<template>
  <div class="manual-payment">
              <v-layout class="pt-5">
          <v-flex grow pa-1 xs6>
            <h2 class="display-2 pl-4">Properties</h2>
          </v-flex>
          <v-flex shrink pa-1 xs6 text-xs-right>
            <v-btn  dark class="mt-4 r-m-end">← BACK</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row class="r-p-24px">
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
                        <h3>Manual Payment</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-form
                        >
                             <v-text-field 
                                label="Property Name"
                                reverse
                              ></v-text-field>

                              <v-select 
                              label="Unit Number"
                            ></v-select>

                            <v-select
                            label="Unit Type"
                            required
                        ></v-select>

                        <v-text-field
                            label="Tenant Name"
                            required
                            reverse
                        ></v-text-field>

                        <v-select 
                        label="Month"
                      ></v-select>

                      <v-text-field 
                        label="Year"
                        reverse
                      ></v-text-field>
                      
                      <v-text-field 
                        label="Price"
                        reverse
                      ></v-text-field>

                         </v-form> 
                    </v-card-text>
                </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
        <div class="text-xs-center mt-4">
          <v-btn  dark class="re-orangtbtn">SAVE</v-btn>
          <v-btn dark>CANCEL</v-btn>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ManualPayment',
          data: () => ({
          drawer: null,

          items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '#'
        },
        {
          text: 'Property Management',
          disabled: true,
          href: '#'
        },
        {
          text: 'Manual Payment',
          disabled: true,
          href: '#'
        }
      ]
        }),

        props: {
          source: String,
        },
}
</script>


