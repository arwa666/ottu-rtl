<template>
  <div class="advance-payment">
              <v-layout class="pt-5">
          <v-flex grow pa-1 xs6>
            <h2 class="display-2 pl-4">Property</h2>
          </v-flex>
          <v-flex shrink pa-1 xs6 text-xs-right>
            <v-btn  dark class="mt-4 r-m-end">← BACK</v-btn>
          </v-flex>
        </v-layout>
        <v-layout >
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
                  <h3>Advance Payment Request</h3>
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Property Name" reverse ></v-text-field>

                    <v-select label="Unit Name"></v-select>

                    <v-text-field label="Tenant Name"  reverse></v-text-field>

                    <v-layout wrap class="re-radio">
                      <v-flex xs6 sm4>
                        <v-checkbox label="August 2021"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox label="December 2021"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox label="April 2022"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox label="September 2022"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox label="January 2022"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox label="May 2022"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox label="October 2022"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox label="February 2022"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox label="June 2022"></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </v-form>
                  <div class="text-xs-center re-total">
                    <strong>Total Amount:</strong> 2,500 KD
                  </div>
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
  name: 'AdvancePayment',
        data: () => ({
          drawer: null,

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
              text: "Advance Payment Request",
              disabled: true,
              href: "#",
            },
          ],
        }),

        props: {
          source: String,
        },
}
</script>


