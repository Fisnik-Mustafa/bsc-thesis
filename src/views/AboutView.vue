<template>
  <div class="about">
    <div class="header">
      <h1>
        Impressum
      </h1>
      <p class="aufgabenstellung">
        Diese Lernplattform basiert auf das Lehrmittel 'Einfach Informatik 7-9'. <br> Entwickler: Fisnik Mustafa
      </p>
      <hr
        style="
          max-width: 1100px;
          background-color: black;
          height: 1px;
          border: none;
        "
      />
    </div>

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
    <div>
      Help and check icon by
      <a href="https://freeicons.io/profile/726" target="_blank"
        >Free Preloaders</a
      >
      and
      <a href="https://freeicons.io/profile/714" target="_blank">Raj Dev</a>
      respectively on
      <a href="https://freeicons.io" target="_blank">freeicons.io</a>
    </div>
    <div >
      Info, go back, refresh and skip icon by
      <a href="https://freeicons.io/profile/3" target="_blank">icon king1</a>,
      on <a href="https://freeicons.io" target="_blank">freeicons.io</a>
    </div>
    <br />
    <Backtohomepage />
    <Footer />
    <div id="links">
      <div id="logo-ethz">
        <a href="https://ethz.ch" target="blank">
        <img src="../assets/logos/ethz-logo.svg" draggable="false" style="height: 40px; margin-top: 10px; left: 50%;">
        </a>
      </div>
      <div id="logo-abz">
        <a href="https://abz.inf.ethz.ch/" target="blank">
        <img src="../assets/logos/logo_abz_weiss.png" draggable="false" style="height: 60px; margin-top: 10px;"> 
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Backtohomepage from "@/components/Backtohomepage.vue";
import Footer from "@/components/Footer.vue";
export default { components: { Backtohomepage, Footer } };
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
#links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  
}
</style>