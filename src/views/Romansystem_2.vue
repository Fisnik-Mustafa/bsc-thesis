<template>
  <div>

    <Header
      :title="'Romansystem_2'"
      :taskdescription="'Wandle die vorrömische Zahl in die entsprechende Dezimalzahl um.'"
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="''"
      @close-verifier="this.submitted = false"
    />

    <div class="roman_number">
      {{ romannumber }}
    </div>

    <br />
    <br />

    <Newtask :task="'Romansystem_3'" />
    <Nexttask />
    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon" /> <br />Überprüfen
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
    <div style="max-width: 1000px; margin: 0 auto;">
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

export default {
  components: { Nexttask, Verifier, Newtask, Header, Footer },
  data() {
    return {
      randomnumber: Math.floor(Math.random() * (9999 - 1 + 1)) + 1,
      romannumber: "",
      M: 0,
      D: 0,
      C: 0,
      L: 0,
      X: 0,
      V: 0,
      I: 0,
      hint: false,
      eingabe: "",
      result: false,
      submitted: false,
    };
  },
  created: function () {
    let temp = 0;

    // M
    this.M = Math.floor(this.randomnumber / 1000);
    temp = this.randomnumber % 1000;
    for (var i = 0; i < this.M; i++) {
      this.romannumber = this.romannumber + "M";
    }

    // D
    this.D = Math.floor(temp / 500);
    temp = temp % 500;
    for (var i = 0; i < this.D; i++) {
      this.romannumber = this.romannumber + "D";
    }

    // C
    this.C = Math.floor(temp / 100);
    temp = temp % 100;
    for (var i = 0; i < this.C; i++) {
      this.romannumber = this.romannumber + "C";
    }

    // L
    this.L = Math.floor(temp / 50);
    temp = temp % 50;
    for (var i = 0; i < this.L; i++) {
      this.romannumber = this.romannumber + "L";
    }

    // X
    this.X = Math.floor(temp / 10);
    temp = temp % 10;
    for (var i = 0; i < this.X; i++) {
      this.romannumber = this.romannumber + "X";
    }

    // V
    this.V = Math.floor(temp / 5);
    temp = temp % 5;
    for (var i = 0; i < this.V; i++) {
      this.romannumber = this.romannumber + "V";
    }

    // I
    this.I = temp;
    for (var i = 0; i < this.I; i++) {
      this.romannumber = this.romannumber + "I";
    }
  },
  methods: {
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
  },
};
</script>

<style>
.roman_number {
  font-weight: bold;
  font-size: 2em;
  background-color: aliceblue;
  border-radius: 10px;
  padding: 1em;
  max-width: 600px;
  margin: auto;
}
</style>