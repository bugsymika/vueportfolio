<template>
  <div class="main">
    <h1>My GitHub account:</h1>
    <a href="https://github.com/bugsymika" target="_blank">
      <div class="contact">
        <i class="icono-chain"></i>
        BugsyMika
      </div>
    </a>

    <h1>You can reach me via email at:</h1>
    <div class="contact">
      <i class="icono-mail"></i>
      bugtmika@gmail.com
    </div>
    <h1>or contact me via LinkedIn</h1>
    <a href="https://www.linkedin.com/in/bug-mika-655514177/" target="_blank">
      <div class="contact">
        <i class="icono-linkedIn"></i>
        Bug Mika
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "contact",
  components: {}
};
</script>

<style scoped>
h1 {
  margin: 0px;
  color: white;
  padding-top: 5%;
  user-select: none;
}

.contact {
  padding-bottom: 2%;
  color: #5cf5b0;
  font-size: 4vh;
}

i {
  color: #5cf5b0;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

@import url("https://icono-49d6.kxcdn.com/icono.min.css");
</style>


