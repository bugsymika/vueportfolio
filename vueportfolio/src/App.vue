<template>
  <div id="app">
    <router-view/>
    <nav>
      <router-link to="/">
        <nav-bar icon="icono-home" tabName="Home"/>
      </router-link>
      <router-link to="/about">
        <nav-bar icon="icono-book" tabName="About"/>
      </router-link>
      <router-link to="/projects">
        <nav-bar icon="icono-terminal" tabName="Projects"/>
      </router-link>
      <router-link to="/contact">
        <nav-bar icon="icono-iphoneBold" tabName="Contact"/>
      </router-link>
    </nav>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>


<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  background: url(https://i.imgur.com/aYVCrgA.png);
  background-repeat: repeat;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100% - 7%);
}

.router-link-exact-active > div > i {
  color: white;
}

.router-link-exact-active > div > span {
  color: white;
}
nav {
  width: 100%;
  background-color: black;
  position: fixed;
  bottom: 0;
  user-select: none;
}

i:hover:after {
  content: "home";
}
.main {
  margin-top: 0;
  height: 100%;
}
</style>
