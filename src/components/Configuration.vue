<template>
  <div class="configuration">
              <v-layout class="pt-5">
          <v-flex grow pa-1 xs6>
            <h2 class="display-2 pl-4">Properties</h2>
          </v-flex>
          <v-flex shrink pa-1 xs6 text-xs-right>
            <v-btn  dark class="mt-4 r-m-end">← BACK</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
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
                  <h3>Plugin Configuration</h3>
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Day of the month to generate payment links"
                      required
                      reverse
                      class="mb-2"
                    ></v-text-field>

                    <v-text-field
                      label="Day of the month to suspend accessing payment links"
                      required
                      reverse
                      class="mb-2"
                    ></v-text-field>
                    <v-card
                      @drop.prevent="onDrop($event)"
                      @dragover.prevent="dragover = true"
                      @dragenter.prevent="dragover = true"
                      @dragleave.prevent="dragover = false"
                      class="re-drag"
                    >
                      <v-card-text class="text-xs-center">
                        <v-layout>
                          <v-list>
                            <template v-for="(item) in uploadedFiles">
                              <v-list-tile :key="item.header">
                                <v-list-tile-avatar squared>
                                  <v-img
                                    lazy-src="https://picsum.photos/id/11/10/6"
                                    max-height="50"
                                    max-width="50"
                                    src="images/image.png"
                                  ></v-img>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                  <v-list-tile-title>
                                    {{ item.name }}</v-list-tile-title
                                  >
                                  <v-list-tile-sub-title>
                                    ize: {{ item.size }}</v-list-tile-sub-title
                                  >
                                </v-list-tile-content>
                              </v-list-tile>
                            </template>
                          </v-list>
                        </v-layout>
                        <div
                          :class="{ 'draggable': dragover }"
                          class="re-drag-text"
                        >
                          Drag and Drop Logo
                        </div>
                        <v-btn
                          dark
                         
                          @click="pickFile"
                          class="upload-btn"
                          >or upload from computer</v-btn
                        >
                        <input
                          type="file"
                          style="display: none"
                          ref="image"
                          accept="image/*"
                          @change="onFilePicked"
                        />
                      </v-card-text>
                    </v-card>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs12 lg9>
            <v-expansion-panel class="re-margin-t40 re-advanced">
              <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
                <template v-slot:header>
                  <div>
                    <h3>Advanced Settings</h3>
                  </div>
                </template>
                <v-card>
                  <v-card-text>
                    <v-text-field label="Default email" reverse> </v-text-field>
                    <v-checkbox
                      label="Hide email"
                      v-model="hideEmail"
                      class="re-gray-color"
                       color = "grey darken-1"
                    ></v-checkbox>
                    <v-select :items="items" label="Alert email"  dir="rtl" > </v-select>
                    <v-select :items="items" label="Alert sms"  dir="rtl"> </v-select>
                    <v-checkbox
                      label="Individual proxy fields"
                      v-model="individualProxy"
                      class="re-gray-color"
                       color = "grey darken-1"
                    ></v-checkbox>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs12 lg9>
            <v-card class="re-margin-t40">
              <v-card-title class="re-custom-controls">
                <h3>Terms & Conditions</h3>
              </v-card-title>
              <v-card-text>
                <v-checkbox
                  label="Terms & conditions [En]"
                  v-model="checkbox1"
                  class="re-gray-color"
                  color = "grey darken-1"
                ></v-checkbox>
                <p class="re-margin-t40 re-gray-color re-padding-start7 text-start">
                  Terms & conditions [En]
                </p>
                <editor
       api-key="no-api-key"
       :init="{
         height: 330,
         menubar: false,
         resize: false,
         directionality: rtl,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor charmap emoticons ',
           'searchreplace visualblocks code  directionality fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:[
         'cut copy paste newdocument remove | undo redo|link image table  charmap emoticons|fullscreen media',
         'bold italic strikethrough  |removeformat|indent outdent| blockquote|   alignleft aligncenter alignright alignjustify |ltr rtl', 
           'styleselect | formatselect| fontselect|fontsizeselect|forecolor backcolor|',
          
           ],
       }"
     />
      <p class="re-margin-t40 re-gray-color re-padding-start7 text-start">
                  Terms & conditions [Ar]
                </p>
                            <editor
       api-key="no-api-key"
       :init="{
         height: 330,
         menubar: false,
         resize: false,
         directionality:rtl,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor charmap emoticons ',
           'searchreplace visualblocks code  directionality fullscreen',
           'insertdatetime media table paste code help wordcount '
         ],
         toolbar:[
         'cut copy paste newdocument remove | undo redo|link image table  charmap emoticons|fullscreen media',
         'bold italic strikethrough  |removeformat|indent outdent| blockquote|   alignleft aligncenter alignright alignjustify |ltr rtl', 
           'styleselect | formatselect| fontselect|fontsizeselect|forecolor backcolor|  ',
          
           ]
       }"
     />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs12 lg9>
            <v-card class="re-margin-t40">
              <v-card-title class="re-custom-controls">
                <h3>Fields</h3>
                <v-btn class="re-add-field">Add new field</v-btn>
              </v-card-title>
              <v-card-text>
                <v-layout wrap>
                  <v-flex sm6>
                    <v-select :items="items1" label="Field Type" v></v-select>
                  </v-flex>
                  <v-flex sm6>
                    <v-checkbox
                      label="Required"
                      v-model="checkbox2"
                      class="re-gray-color re-required"
                      color = "grey darken-1"
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
                <v-layout wrap>
                  <v-flex sm4>
                    <v-checkbox
                      label="Itinerary display"
                      v-model="Itinerary"
                      class="re-gray-color justify-start"
                      color = "grey darken-1"
                    ></v-checkbox>
                    <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                  </v-flex>
                  <v-flex sm4>
                    <div class="justify-center">
                      <v-checkbox
                        label="Custom detail field"
                        v-model="custom"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                  <v-flex sm4>
                    <div class="re-c-style">
                      <v-checkbox
                        label="Is active"
                        v-model="active"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Validator" v></v-select>
                </v-layout>
                <v-layout wrap>
                  <v-flex sm4>
                    <v-checkbox
                      label="Is Unit Type"
                      v-model="isUnit"
                      class="re-gray-color justify-start"
                      color = "grey darken-1"
                    ></v-checkbox>
                    <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                  </v-flex>
                  <v-flex sm4>
                    <div class="justify-center">
                      <v-checkbox
                        label="Is Property"
                        v-model="isProperty"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                  <v-flex sm4>
                    <div class="re-c-style">
                      <v-checkbox
                        label="Is Tenant"
                        v-model="isTenant"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Field" v></v-select>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Order" v></v-select>
                </v-layout>
                <v-layout>
                  <v-btn class="re-del-btn"> Delete Field </v-btn>
                </v-layout>
              </v-card-text>
            </v-card>
            <v-card

              class="re-v-sheet re-v-sheet2"
            >
              <v-card-text>
                <v-layout wrap>
                  <v-flex sm6>
                    <v-select :items="items1" label="Field Type"> </v-select>
                  </v-flex>
                  <v-flex sm6>
                    <v-checkbox
                      label="Required"
                      v-model="required"
                      class="re-gray-color re-required"
                      color = "grey darken-1"
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
                <v-layout wrap>
                  <v-flex sm4>
                    <v-checkbox
                      label="Itinerary display"
                      v-model="Itinerary"
                      class="re-gray-color justify-start"
                      color = "grey darken-1"
                    ></v-checkbox>
                    <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                  </v-flex>
                  <v-flex sm4>
                    <div class="justify-center">
                      <v-checkbox
                        label="Custom detail field"
                        v-model="custom"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                  <v-flex sm4>
                    <div class="re-c-style">
                      <v-checkbox
                        label="Is active"
                        v-model="active"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Validator"> </v-select>
                </v-layout>
                <v-layout wrap>
                  <v-flex sm4>
                    <v-checkbox
                      label="Is Unit Type"
                      v-model="isUnit1"
                      class="re-gray-color justify-start"
                      color = "grey darken-1"
                    ></v-checkbox>
                    <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                  </v-flex>
                  <v-flex sm4>
                    <div class="justify-center">
                      <v-checkbox
                        label="Is Property"
                        v-model="isProperty1"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                  <v-flex sm4>
                    <div class="re-c-style">
                      <v-checkbox
                        label="Is Tenant"
                        v-model="isTenant1"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Field"> </v-select>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Order"> </v-select>
                </v-layout>
                <v-layout>
                  <v-btn class="re-del-btn"> Delete Field </v-btn>
                </v-layout>
              </v-card-text>
            </v-card>
            <v-card
              class="re-v-sheet re-v-sheet2"

            >
              <v-card-text>
                <v-layout wrap>
                  <v-flex sm6>
                    <v-select :items="items1" label="Field Type"> </v-select>
                  </v-flex>
                  <v-flex sm6>
                    <v-checkbox
                      label="Required"
                      v-model="required"
                      class="re-gray-color re-required"
                      color = "grey darken-1"
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
                <v-layout wrap>
                  <v-flex sm4>
                    <v-checkbox
                      label="Itinerary display"
                      v-model="Itinerary"
                      class="re-gray-color justify-start"
                      color = "grey darken-1"
                    ></v-checkbox>
                    <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                  </v-flex>
                  <v-flex sm4>
                    <div class="justify-center">
                      <v-checkbox
                        label="Custom detail field"
                        v-model="custom"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                  <v-flex sm4>
                    <div class="re-c-style">
                      <v-checkbox
                        label="Is active"
                        v-model="active"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Validator"> </v-select>
                </v-layout>
                <v-layout wrap>
                  <v-flex sm4>
                    <v-checkbox
                      label="Is Unit Type"
                      v-model="isUnit2"
                      class="re-gray-color justify-start"
                      color = "grey darken-1"
                    ></v-checkbox>
                    <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                  </v-flex>
                  <v-flex sm4>
                    <div class="justify-center">
                      <v-checkbox
                        label="Is Property"
                        v-model="isProperty2"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                  <v-flex sm4>
                    <div class="re-c-style">
                      <v-checkbox
                        label="Is Tenant"
                        v-model="isTenant2"
                        class="re-gray-color"
                        color = "grey darken-1"
                      ></v-checkbox>
                      <p class="re-chec__p">Leoms iskb jdbvbj jsvhys sjbjd</p>
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Field"> </v-select>
                </v-layout>
                <v-layout>
                  <v-select :items="items1" label="Order"> </v-select>
                </v-layout>
                <v-layout>
                  <v-btn class="re-del-btn"> Delete Field </v-btn>
                </v-layout>
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
import Editor from '@tinymce/tinymce-vue';
export default {
  name: 'Configuration',
    components: {
   'editor': Editor
  },
  
    data: () => ({
        uploadedFiles: [],
        rtl: "rtl",
        right:"right",
          /***** CHECKBOXES********/
          checkbox1: true,
          checkbox2: false,
          Itinerary: true,
          custom: false,
          active: false,
          required: false,
          isUnit: false,
          isProperty: false,
          isTenant: false,
          isUnit1: false,
          isUnit2: false,
          isProperty1: false,
          isProperty2: false,
          isTenant1: false,
          isTenant2: false,
          hideEmail: true,
          individualProxy: true,
          /*****DRAG DROP******/
          dragover: false,
          headers: [{ text: "", align: "left", sortable: false }],
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
              text: "Configurations",
              disabled: true,
              href: "#",
            },
          ],
          items1: [
            {
              text: "Item1",
              disabled: false,
              href: "#",
            },
            {
              text: "Item2",
              disabled: true,
              href: "#",
            },
            {
              text: "Item3",
              disabled: true,
              href: "#",
            },
          ],
        }),

        methods: {
          onDrop(e) {
            this.dragover = false;
            console.log(e.dataTransfer.files);
            Array.from(e.dataTransfer.files).forEach((element) =>
              this.uploadedFiles.push(element)
            );
            console.log(this.uploadedFiles);
          },
          pickFile() {
            this.$refs.image.click();
          },

          onFilePicked(e) {
            const files = e.target.files;
            if (files[0] !== undefined) {
              this.imageName = files[0].name;
              if (this.imageName.lastIndexOf(".") <= 0) {
                return;
              }
              const fr = new FileReader();
              fr.readAsDataURL(files[0]);
              fr.addEventListener("load", () => {
                this.imageUrl = fr.result;
                this.imageFile = files[0]; // this is an image file that can be sent to server...
                this.uploadedFiles.push(this.imageFile);
              });
            } else {
              this.imageName = "";
              this.imageFile = "";
              this.imageUrl = "";
            }
          },
        },
  props: {
    msg: String
  }
}
</script>
