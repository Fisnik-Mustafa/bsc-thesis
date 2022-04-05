<template>
  <div>
    <h1>Romansystem_2</h1>
    <Backtohomepage />
    <p>Wandle die römische Zahl in die entsprechende Dezimalzahl um</p>
    <hr />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="''"
      @close-verifier="this.submitted = false"
    />

    <br />
    <br />

    <div class="roman_number">
      {{ romannumber }}
    </div>

    <br />
    <br />

    <Newtask :task="'Romansystem_3'" />
    <Nexttask />
    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon"/> <br />Überprüfen
    </button>
    <input
      v-model="eingabe"
      type="text"
      placeholder="Antwort"
      style="margin: 10px"
    />
    <br />
    <button @click="showHint()" class="btn_submit" v-if="!hint">
      <img src="../assets/icons/info.png" class="icon">
      <br>
      Zeige Hinweis
    </button>
    <button @click="removeHint()" class="btn_submit" v-if="hint">
      <img src="../assets/icons/info.png" class="icon">
      <br>
      Entferne Hinweis
    </button>

    <p v-if="hint">
      In der Tabelle findest du die entsprechenden Grössen und deren Wert.
    </p>
    <img src="../assets/hints/hint_roman_1.png" width="1000" v-if="hint" />
  </div>
</template>

<script>
import Backtohomepage from "@/components/Backtohomepage.vue";
import Nexttask from "@/components/Nexttask.vue";
import Verifier from "@/components/Verifier.vue";
import Newtask from "@/components/Newtask.vue";

export default {
  components: { Backtohomepage, Nexttask, Verifier, Newtask },
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
  width: 600px;
  margin: auto;
}
</style>