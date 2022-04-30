<template>
  <div>
    <Header
      :title="'Vorrömisches Zahlensystem kennenlernen'"
      :taskdescription="'Erkennst du die dargestellte vorrömische Zahl? Gib die Zahl im Dezimalsystem an.'"
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Versuche die Karten zusammenzuaddieren.'"
      @close-verifier="this.submitted = false"
    />

    <Tutorial
      :description="getTaskDescription()"
      :video_name="'Tutorial_Romansystem1'"
      v-if="tutorialActive"
      @close-tutorial="this.tutorialActive = false"
    />

    <div class="zahl roman">
      <div class="einheit roman_einheit">
        <div v-for="index in M" :key="index" class="karte">M</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in D" :key="index" class="karte">D</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in C" :key="index" class="karte">C</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in L" :key="index" class="karte">L</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in X" :key="index" class="karte">X</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in V" :key="index" class="karte">V</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in I" :key="index" class="karte">I</div>
      </div>
    </div>

    <Newtask :task="'Romansystem_2'" />

    <Nexttask @next_task="reloadPage()" />

    <button @click="showTutorial()" class="btn_submit">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Hilfe
    </button>

    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon" /> <br />
      Überprüfen
    </button>
    <input
      v-model="eingabe"
      type="number"
      placeholder="Antwort"
      class="field"
    />
    <br />
    <button @click="showHint()" class="btn_submit" v-if="!hint">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Zeige Hinweis
    </button>
    <button @click="removeHint()" class="btn_submit" v-if="hint">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Entferne Hinweis
    </button>
    <p v-if="hint">
      In der Tabelle findest du die entsprechenden Grössen und deren Wert.
    </p>
    <div style="max-width: 1000px; margin: 0 auto">
      <img
        src="../assets/hints/hint_roman_1.png"
        style="max-width: 100%; height: auto; width: auto\9; /* ie8 */"
        v-if="hint"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
import Nexttask from "@/components/Nexttask.vue";
import Verifier from "@/components/Verifier.vue";
import Newtask from "@/components/Newtask.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Tutorial from "@/components/Tutorial.vue";

export default {
  components: { Nexttask, Verifier, Newtask, Header, Footer, Tutorial },
  data() {
    return {
      randomnumber: Math.floor(Math.random() * (9999 - 1 + 1)) + 1,
      M: 0,
      D: 0,
      C: 0,
      L: 0,
      X: 0,
      V: 0,
      I: 0,
      submitted: false,
      result: false,
      eingabe: "",
      hint: false,
      tutorialActive: false,
    };
  },

  created: function () {
    let temp = 0;

    // M
    this.M = Math.floor(this.randomnumber / 1000);
    temp = this.randomnumber % 1000;

    // D
    this.D = Math.floor(temp / 500);
    temp = temp % 500;

    // C
    this.C = Math.floor(temp / 100);
    temp = temp % 100;

    // L
    this.L = Math.floor(temp / 50);
    temp = temp % 50;

    // X
    this.X = Math.floor(temp / 10);
    temp = temp % 10;

    // V
    this.V = Math.floor(temp / 5);
    temp = temp % 5;

    // I
    this.I = temp;
  },
  methods: {
    reloadPage() {
      this.$router.go(0);
    },
    submit() {
      if (this.eingabe == this.randomnumber) {
        this.result = true;
      } else {
        this.result = false;
      }
      this.submitted = true;
    },
    showHint() {
      this.hint = true;
    },
    removeHint() {
      this.hint = false;
    },
    getTaskDescription() {
      return "In dieser Aufgabe betrachten wir nun das vorrömische Zahlensystem. Ähnlich wie bei der ersten Aufgaben hast du hier Karten in verschiedenen Grössen gegeben. Das Ziel in dieser Aufgabe ist es diese Grössen zu erkennen und die entsprechenden Karten miteinander zu addieren. Sollten dir die Grössen unbekannt sein, so kannst du unten auf auf den Hinweis-Knopf drücken und es werden dir die Einheiten und deren Wert eingeblendet.";
    },
    showTutorial() {
      this.tutorialActive = true;
    },
  },
};
</script>

<style>
.roman {
  max-width: 800px;
}
.roman_einheit {
  padding: 0px 15px 0px 15px;
}
.field {
  margin: 20px;
  height: 40px;
}
</style>