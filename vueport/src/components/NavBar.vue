<template>
  <div class="quarterWidth">
    <i :class="icon"></i>
    <br>
    <span>{{tabName}}</span>
  </div>
</template>


<script>
export default {
  name: "NavBar",
  props: {
    icon: String,
    tabName: String
  }
};
</script>

<style scoped>
span {
  color: #5cf5b0;
  font-weight: bolder;
}

i {
  color: #5cf5b0;
}
.quarterWidth {
  width: 25%;
  height: 4%;
  text-align: center;
  background-color: rgb(59, 58, 58);
  font-size: 2vh;
  float: left;
  outline: solid;
  outline-color: black;
  z-index: 100;
}

.quarterWidth:hover {
  background-color: rgb(128, 126, 126);
}
@import url("https://icono-49d6.kxcdn.com/icono.min.css");
</style>
