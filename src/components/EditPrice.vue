<template>
  <div class="edit-price">
              <v-layout class="pt-5">
          <v-flex grow pa-1 xs6>
            <h2 class="display-2 pl-4">Property</h2>
          </v-flex>
          <v-flex shrink pa-1 xs6 text-xs-right>
            <v-btn  dark class="mt-4 r-m-end">← BACK</v-btn>
          </v-flex>
        </v-layout>
        <v-layout wrap  >
          <v-flex class="flex-wrap" xs12 pa-1>
            <v-breadcrumbs :items="items" class="pl-4">
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
                        <h3>Edit Price</h3>
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
                          ></v-select>
                            <!-- <v-text-field
                            label="Unit Type"
                            required
                        ></v-text-field> -->

                        <v-text-field
                            label="Current Unit Amount"
                            required
                             reverse
                        ></v-text-field>

                        <v-layout wrap>
                            <v-flex xs6>
                                <v-text-field
                                    label="Current Unit Discount"
                                    required
                                     reverse
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-radio-group v-model="row" row class="re-radios">
                                    <v-radio label="Percentage" value="radio-1" color="grey darken-1"></v-radio>
                                    <v-radio label="Fixed" value="radio-2" color="grey darken-1"></v-radio>
                                  </v-radio-group>
                              </v-flex>
                        </v-layout>

                        <v-text-field
                            label="Current Unit Net Amount"
                            required
                             reverse
                        ></v-text-field>

                        <v-text-field
                            label="New Unit Amount"
                            required
                             reverse
                        ></v-text-field>

                        <v-layout wrap>
                            <v-flex xs6>
                                <v-text-field
                                    label="New Unit Discount"
                                    required
                                     reverse
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-radio-group v-model="row" row class="re-radios">
                                    <v-radio label="Percentage" value="radio-1" color="grey darken-1"></v-radio>
                                    <v-radio label="Fixed" value="radio-2" color="grey darken-1"></v-radio>
                                  </v-radio-group>
                              </v-flex>
                        </v-layout>

                        <v-text-field
                            label="New Unit Net Amount"
                            required
                             reverse
                        ></v-text-field>

                         </v-form>
                         
                    </v-card-text>
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
  name: 'EditPrice',
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
          text: 'Edit Price',
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


