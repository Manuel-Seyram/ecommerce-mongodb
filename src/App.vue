<template>
  <NavBar :user="user" />
  <div class="page-wrap"><router-view :user="user" /></div>
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      user: null,
    };
  },

  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
};
</script>
