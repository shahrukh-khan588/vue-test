<template>
  <div>
    <v-container max-width="90%" class="d-flex mt-12">
      <div class="d-flex align-center">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-width="60px"
          src="../../src/assets/gdrive.png"
        ></v-img>
        <div class="d-flex ml-3 align-center flex-column mb-0">
          <p class="text-h6 mb-0 d-flex">
            Account Name
            <span>
              <v-sheet
                max-width="10px"
                outlined
                rounded
                class="mx-3 mt-3"
                elevation="12"
                :color="conected ? '#00AC47' : '#A2A2A2'"
                height="10"
                width="10px"
                style="border-color: #fff"
              ></v-sheet
            ></span>
          </p>

          <p class="grey--text mb-0 mr-auto">abc@gmail.com</p>
        </div>
      </div>
      <div class="d-flex align-center ml-auto">
        <p class="grey--#333 mb-0">Status</p>
        <p class="grey--text mb-0 ml-3">
          {{ conected ? "Connect Account" : "Disconnected" }}
        </p>
        <v-btn
          @click="driveIconClicked"
          :color="conected ? '#1a1a1a' : ''"
          type="submit"
          dark
          width="192px"
          :outlined="conected ? true : false"
          class="ml-3"
        >
          {{ conected ? "Reconnect" : "Connect Account" }}</v-btn
        >
      </div>
    </v-container>
    <v-container max-width="90%"><v-divider /> </v-container>
    <p class="grey--#333 mb-0" id="content">Status</p>
    <Table v-bind:conected="conected"></Table>
    <Dialog
      :description="'Please give access so that we can connect your googl drive account'"
      :show="showAction"
      :showicon="false"
      :title="'Google Authentication popup'"
      :allow="listFiles"
      :actions="true"
    />
    <Dialog
      :show="conected"
      :showicon="true"
      :title="'Account Connected Succfully'"
      :actions="false"
    />
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
import Table from "../components/table.vue";
// import { gapi } from "gapi-script";

export default {
  name: "App",
  components: {
    Dialog,
    Table,
  },

  data: () => ({
    conected: false,
    showAction: false,
    CREDENTIALS_PATH: require("./credentials.json"),
    folders: [],
    Key: "AIzaSyCD9VyG91FQEysbcN9v7_L8HqqPkuTOK0I",
    clientId:
      "1077017415949-hcb51p1j7bhc454doh4edk23vr8n94ki.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
    ClientSecret: "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",
    redirectUrl: "https://developers.google.com/oauthplayground",
    oauthToken: null,
    refreshToken:
      "1//04sXJpgMBRmWVCgYIARAAGAQSNwF-L9Ir_5ZCqhiO8N-fdS-c6bA9kK5BwrnkN43NzI1wGij1ZncgXBXb9Vxh23KYZyF_rG2QdXE",
  }),

  mounted() {
    let gDrive = document.createElement("script");
    gDrive.setAttribute("type", "text/javascript");
    gDrive.setAttribute("src", "https://apis.google.com/js/api.js");
    document.head.appendChild(gDrive);
  },
  methods: {
    async driveIconClicked() {
      console.log("Clicked");
      await gapi.load("auth2", () => {
        console.log("Auth2 Loaded");
        gapi.auth2.authorize(
          {
            client_id: this.clientId,
            scope: this.scope,
            immediate: false,
          },
          (res) => {
            console.log(res, "resssss");
          }
        );
      });
      gapi.load("picker", () => {
        console.log("Picker Loaded");
        this.pickerApiLoaded = true;
        this.createPicker();
      });
    },

    handleAuthResult(authResult) {
      console.log("Handle Auth result>", authResult);
      if (authResult && !authResult.error) {
        this.oauthToken = authResult.access_token;
        this.createPicker();
      }
    },

    // gapi.load("picker", () => {
    //   console.log("Picker Loaded");
    //   this.pickerApiLoaded = true;
    //   this.createPicker();
    // });

    // this.showAction = true;
    // const res = await gapi.load("client", () => {
    //   gapi.client.init({
    //     Key: this.Key,
    //     clientId: this.clientId,
    //     discoveryDocs: [
    //       "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
    //     ],
    //     scope: "https://www.googleapis.com/auth/drive.readonly",
    //   });
    //   gapi.auth2.authorize(
    //     {
    //       client_id: this.clientId,
    //       scope: "https://www.googleapis.com/auth/drive.readonly",
    //       immediate: false,
    //     }
    //     // this.handleAuthResult
    //   );
    //   console.log("response");
    // });
    // console.log(res, "res");

    async listFiles() {
      let response;
      try {
        response = await window.gapi.client.drive.files.list({
          pageSize: 10,
          fields: "files(id, name)",
        });
        console.log;
      } catch (err) {
        document.getElementById("content").innerText = err.message;
        return;
      }
      const files = response.result.files;
      if (!files || files.length == 0) {
        document.getElementById("content").innerText = "No files found.";
        return;
      }
      // Flatten to string to display
      const output = files.reduce(
        (str, file) => `${str}${file.name} (${file.id})\n`,
        "Files:\n"
      );
      document.getElementById("content").innerText = output;
    },
    showActions() {
      this.showAction = true;
    },
  },
  props: {
    username: String,
    logout: Function,
  },
  created() {
    console.log(this.conected);
  },
};
</script>
