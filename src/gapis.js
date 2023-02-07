import { computed, ref } from "vue";
import { useGapi } from "vue-gapi";

export default {
  setup() {
    const gapi = useGapi();

    // (1) Subscribe to authentication status changes
    const isSignedIn = ref(null);
    gapi.listenUserSignIn((value) => {
      isSignedIn.value = value;
    });

    // (2) Display authenticated user name
    const userName = computed(() => {
      const user = gapi.getUserData();

      return user ? user.firstName : undefined;
    });

    // (3) Expose $gapi methods
    function login() {
      gapi.login().then(({ currentUser, gapi, hasGrantedScopes }) => {
        console.log({ currentUser, gapi, hasGrantedScopes });
      });
    }

    function logout() {
      gapi.logout();
    }

    return {
      isSignedIn,
      userName,
      login,
      logout,
    };
  },
  template: "#login-template",
};
