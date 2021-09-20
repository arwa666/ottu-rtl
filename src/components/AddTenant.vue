<template>
  <div class="add-tenant">
                <v-layout class="pt-5"> 
              <v-flex
                grow
                pa-1
                xs6
              >
              <h2 class="display-2 pl-4" >Properties</h2>
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
          <v-layout class="r-p-24px">
              <v-flex class="flex-wrap  " xs12 pa-1  >
                <v-breadcrumbs :items="items"  >
                  <template v-slot:divider>
                        <v-icon>fiber_manual_record</v-icon>
                  </template>
              </v-breadcrumbs>
              </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
             
  
                <v-layout row wrap justify-center>
                  <v-flex xs12 sm12 lg9>
                    <v-card class="pb-4">
						<v-card-title>
							<h3>Edit Tenant</h3>
						</v-card-title>
						<v-card-text>
							<v-form
							>
							<v-text-field
							label=" Tenant Name (EN)"
							required
              reverse
                            class="mb-2"
							></v-text-field>

							<v-text-field
							label="Tenant Name (AR)"
							required
              reverse
                            class="mb-2"
							></v-text-field>

                            
							<v-text-field
							label="Civil ID Number"
							required
               reverse
                            class="mb-4"
							></v-text-field>

                            <v-layout class="align-center mb-3">
                                <span class="re-upload__span">Upload Civil ID (Front)</span>
                                <input type="file" id="myUpload" style="display: none;" ref="myUpload" />
                                <v-btn @click="upload" class="re-custom-file-input"> UPLOAD</v-btn>  
                            </v-layout>

                            <v-layout class="align-center">
                                <span class="re-upload__span">Upload Civil ID (Back)</span>
                                <input type="file" id="myUpload" style="display: none;" ref="myUpload" />
                                <v-btn @click="upload" class="re-custom-file-input"> UPLOAD</v-btn>  
                            </v-layout>

                            
							<v-text-field
							label="Passport Number"
							required
               reverse
                            class="mb-4"
							></v-text-field>

                            <v-layout class="align-center">
                                <span class="re-upload__span">Upload Passport</span>
                                <input type="file" id="myUpload" style="display: none;" ref="myUpload" />
                                <v-btn @click="upload" class="re-custom-file-input"> UPLOAD</v-btn>  
                            </v-layout>

                         
                              <v-select 
                              label="Nationality"
                              class="mb-4"
                              ></v-select>

                            <v-layout>
                                <v-flex xs5 sm3 md2 lg2>
                                  <v-select :items="flags" label="Country Code" outline class="re-custom-code">
                                    <template v-slot:selection="{ item}">
                                       <img :src="item.image"><span>{{ item.name }}</span>
                                    </template>
                                   
                                    <template v-slot:item="{ item }">
                                       <img :src="item.image"><span>{{ item.name }}</span>
                                    </template>
                                 </v-select>
                                </v-flex>
                                <v-flex xs7 sm9 md10 lg10>
                                  <v-text-field
                                  label="Phone Number"
                                  required
                                  outline
                                   reverse
                                  class="mb-2 re-phone-num"
                                 ></v-text-field>
                                </v-flex>
                       </v-layout>
                         <v-text-field label="Email Address" required  reverse class="mb-2"></v-text-field>
                         
                               
                                    <v-checkbox
                                    label="Married?"
                                    color="grey darken-1"
                                    v-model="checked"
                                   ></v-checkbox>
                               
                               
                            <div class="pl-4 re-married" v-show="checked">
                                <v-text-field
                                label="Civil ID Number"
                                required
                                 reverse
                                class="mb-2 ml-3"
                                ></v-text-field>
                                <span class="re-upload__span mb-3  ml-3" style="display: block;">Upload Civil ID (Front)</span>
                                <v-layout class="align-center mb-2  ml-3">
                                    <span class="re-upload__span">Upload Civil ID (Back)</span>
                                    <input type="file" id="myUpload" style="display: none;" ref="myUpload" />
                                    <v-btn @click="upload" class="re-custom-file-input"> UPLOAD</v-btn>  
                                </v-layout>
                                <v-text-field
                                label="Passport Number"
                                required
                                 reverse
                                class="mb-3  ml-3"
                                ></v-text-field>
                                <v-layout class="align-center mb-3  ml-3">
                                    <span class="re-upload__span">Upload Passport</span>
                                    <input type="file" id="myUpload" style="display: none;" ref="myUpload" />
                                    <v-btn @click="upload" class="re-custom-file-input re-ml-55"> UPLOAD</v-btn>  
                                </v-layout>
                                <v-select
                                label="Nationality"
                                required
                                class="mb-4  ml-3"
                                ></v-select>
                                <v-layout>
                                  <v-flex xs5 sm3 md2 lg2>
                                    <v-select :items="flags" label="Country Code" outline class="re-custom-code">
                                      <template v-slot:selection="{ item}">
                                         <img :src="item.image">{{ item.name }}
                                      </template>
                                     
                                      <template v-slot:item="{ item }">
                                         <img :src="item.image">{{ item.name }}
                                      </template>
                                   </v-select>
                                  </v-flex>
                                  <v-flex xs7 sm9 md10 lg10>
                                    <v-text-field
                                    label="Phone Number"
                                    required
                                    outline
                                     reverse
                                    class="mb-2 re-phone-num"
                                   ></v-text-field>
                                  </v-flex>
                         </v-layout>
                                <v-text-field
                                label="Email Address"
                                required
                                 reverse
                                class="mb-2  ml-3"
                                ></v-text-field>
                            </div></v-form> </v-card-text>
					</v-card>
                  </v-flex>
                </v-layout>
  
             
            </v-layout>
            <div class="text-xs-center mt-4">
              <v-btn dark class="re-orangtbtn">SAVE</v-btn>
              <v-btn dark>CANCEL</v-btn>
            </div>
  </div>
</template>

<script>
export default {
  name: 'AddTenant',
        data: () => ({
          checked: true,
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
              text: "Add Tenant",
              disabled: true,
              href: "#",
            },
          ],

          flags: [
            {
              name: "+963",
              image:
                "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
            },
            {
              name: "+945",
              image:
                "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
            },
            {
              name: "+987",
              image:
                "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
            },
            {
              name: "+922",
              image:
                "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
            },
          ],
        }),
        methods: {
          upload() {
            this.$refs.myUpload.click();
          },
        },

        props: {
          source: String,
        },
}
</script>


