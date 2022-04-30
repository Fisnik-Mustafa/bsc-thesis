<template>
  <div>
    <div class="header">
      <h1>
        Willkommen in der Lernumgebung Zahlensysteme erkennen und verstehen!
      </h1>
      <p class="aufgabenstellung">
        In dieser Lernumgebung erwarten dich spannende Rätsel zu verschiedenen
        Zahlensysteme. Nachdem du die Aufgaben gemeistert hast, wirst du in der
        Lage sein wichtige Zahlensysteme der Informatik anzuwenden.
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
    <!-- DezimalSystem -->
    <h2>Aufgaben zum Dezimalsystem</h2>
    <div>
      <router-link to="Dezimalsystem_1">
        <button class="taskbtn">
          <span>1. Dezimalsystem kennenlernen</span> <br />
          <br />
          <br />
          <img
            src="../assets/home/dez_cards.png"
            style="height: 180px; width: auto"
          />
          <br />
        </button>
      </router-link>

      <router-link to="Dezimalsystem_2">
        <button class="taskbtn">
          <span>2. Dezimalzahl mit Karten darstellen</span> <br />
          <br />
          <img
            src="../assets/home/dez_cards.png"
            style="height: 180px; width: auto"
          />
          <br />
        </button>
      </router-link>

      <router-link to="Dezimalsystem_3">
        <button class="taskbtn">
          <span>3. Dezimalzahlen addieren</span> <br />
          <br />
          <br />
          <img
            src="../assets/home/dez_cards.png"
            style="height: 180px; width: auto"
          />
          <br />
        </button>
      </router-link>
    </div>

    <!-- RömischesSystem -->
    <h2>Aufgaben zur vorrömischen Darstellung</h2>
    <div>
      <router-link to="Romansystem_1">
        <button class="taskbtn">
          <span>4. Vorrömisches Zahlensystem kennenlernen</span> <br />
          <br />
          <img
            src="../assets/home/roman_cards.png"
            style="height: 50px; width: 175px"
          />
          <br />
        </button>
      </router-link>

      <router-link to="Romansystem_2">
        <button class="taskbtn">
          <span>5. Vorrömische Zahl in Dezimalzahl umwandeln</span> <br />
          <br />
          <img
            src="../assets/home/roman_cards.png"
            style="height: 50px; width: 175px"
          />
          <br />
        </button>
      </router-link>

      <router-link to="Romansystem_3">
        <button class="taskbtn">
          <span>6. Vorrömische Zahlen addieren</span> <br />
          <br />
          <br />
          <img
            src="../assets/home/roman_cards.png"
            style="height: 50px; width: 175px"
          />
          <br />
        </button>
      </router-link>
    </div>

    <!-- Binärsystem -->
    <h2>Aufgaben zum Binärsystem</h2>
    <div>
      <router-link to="Binaersystem_1">
        <button class="taskbtn">
          <span>7. Binärsystem kennenlernen</span> <br />
          <br />
          <br />
          <img
            src="../assets/home/bin_cards.png"
            style="height: 120px; width: 220px"
          />
          <br />
        </button>
      </router-link>

      <router-link to="Binaersystem_2">
        <button class="taskbtn">
          <span>8. Binärzahl in Dezimalzahl umwandeln</span> <br />
          <br />
          <img
            src="../assets/home/bin_cards.png"
            style="height: 120px; width: 220px"
          />
          <br />
        </button>
      </router-link>

      <router-link to="Binaersystem_3">
        <button class="taskbtn">
          <span>9. Binärzahlen addieren</span> <br />
          <br />
          <br />
          <img
            src="../assets/home/bin_cards.png"
            style="height: 120px; width: 220px"
          />
          <br />
        </button>
      </router-link>

      <router-link to="Binaersystem_4">
        <button class="taskbtn">
          <span>10. Binärzahlen addieren in der Binärdarstellung</span> <br />
          <br />
          <img
            src="../assets/home/bin_cards.png"
            style="height: 120px; width: 220px"
          />
          <br />
        </button>
      </router-link>
    </div>

    <!-- About page Route -->
    <router-link to="AboutView">
      <button class="info">Information</button>
    </router-link>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: { Footer },
};
</script>

<style>
body {
  background-color: rgb(162, 203, 162);
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
  margin-top: 100px;
}
.info {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border-color: rgb(83, 81, 81);
  background-color: rgb(230, 230, 156);
  cursor: pointer;
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
  background-color: rgb(109, 175, 96);
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  border-color: rgb(83, 81, 81);
  border: none;
  width: 250px;
  height: 250px;
  cursor: pointer;
}
.taskbtn:hover {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 90%);
}
</style>
