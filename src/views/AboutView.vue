<template>
  <div class="about">
    <h1>Impressum</h1>
    <Backtohomepage />
    <p>
      Diese Lernplattform basiert auf das Lehrmittel 'Einfach Informatik 7-9'
    </p>
    <p>Entwickler: Fisnik Mustafa</p>
    <div>
      Home icon made by
      <a href="https://www.freepik.com" title="Freepik">Freepik</a> and
      <a
        href="https://www.flaticon.com/authors/vignesh-oviyan"
        title="Vignesh Oviyan"
      >
        Vignesh Oviyan</a
      >
      respectively from <a href="https://www.flaticon.com/">www.flaticon.com</a>
    </div>
    <!--    <router-link to="/">
      <button class="back_to_homepage">
        Startseite
      </button>
    </router-link> -->
  </div>
</template>
<script>
import Backtohomepage from "@/components/Backtohomepage.vue";
export default { components: { Backtohomepage } };
</script>

<style>
.back_to_homepage {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 20px;
  padding: 10px;
  border: rgb(83, 81, 81);
}
.back_to_homepage:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>