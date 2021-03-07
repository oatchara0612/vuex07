<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="danger">
        <router-link to="/">
          <!-- <b-icon
            icon="shop-window"
            style="width: 30px; height: 30px; color: white"
          ></b-icon> -->
        </router-link>
        <b-navbar-brand>NJ Clothing Store</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="col-5" style="color: white" to="/"
              >Home</router-link
            >
            <router-link class="col-5" style="color: white" to="/about"
              >About</router-link
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form> </b-nav-form>
            <router-link to="/about" class="col-7">
              <b-button pill variant="success" @click="Submit()">
                ต่อไป
              </b-button></router-link
            >
            <b-button pill variant="success" @click="Clear()">
              ยกเลิก
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    {{ ShowSelect }}
    <router-view />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["ShowSelect"]),
  },
  methods: {
    ...mapMutations(["Clear", "Submit"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

