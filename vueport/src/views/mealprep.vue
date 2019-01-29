<template>
  <div class="main">
    <router-link to="/projects">
      <div class="back">
        <i class="icono-leftArrow"></i>
        <br>BACK
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "mealprep",
  components: {}
};
</script>

<style scoped>
i {
  color: #5cf5b0;
}

a {
  text-decoration: none;
  color: white;
}

.back {
  border: solid;
  width: fit-content;
  border-color: #5cf5b0;
  margin-left: 2%;
  margin-top: 2%;
  padding: 1%;
}
</style>
