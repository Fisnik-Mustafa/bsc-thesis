<template>
  <div>
    <h1>Zahlensysteme erkennen und verstehen.</h1>
    <div class="tasks">
      <!-- DezimalSystem -->
      <router-link to="Dezimalsystem_1">
        <button class="taskbtn">Dezimalsystem_1</button>
      </router-link>

      <router-link to="Dezimalsystem_2">
        <button class="taskbtn">Dezimalsystem_2</button>
      </router-link>

      <router-link to="Dezimalsystem_3">
        <button class="taskbtn">Dezimalsystem_3</button>
      </router-link>

      <!-- RömischesSystem -->
      <router-link to="Romansystem_1">
        <button class="taskbtn">Romansystem_1</button>
      </router-link>

      <router-link to="Romansystem_2">
        <button class="taskbtn">Romansystem_2</button>
      </router-link>

      <router-link to="Romansystem_3">
        <button class="taskbtn">Romansystem_3</button>
      </router-link>

      <!-- Binärsystem -->
      <router-link to="Binaersystem_1">
        <button class="taskbtn">Binärsystem_1</button>
      </router-link>

      <router-link to="Binaersystem_2">
        <button class="taskbtn">Binärsystem_2</button>
      </router-link>

      <router-link to="Binaersystem_3">
        <button class="taskbtn">Binärsystem_3</button>
      </router-link>
    </div>

    <!-- About page Route -->
    <router-link to="AboutView">
      <button class="info">Information</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
body {
  background-color: rgb(157, 220, 157);
}
h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
}
p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
h2 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
span {
  text-decoration: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.tasks {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.info {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border-color: rgb(83, 81, 81);
}
.info:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.taskbtn {
  text-align: center;
  text-decoration: none;
  background-color: lightgrey;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  border-color: rgb(83, 81, 81);
}
.taskbtn:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
