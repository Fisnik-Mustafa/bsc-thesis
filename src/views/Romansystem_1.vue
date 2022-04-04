<template>
  <div>
    <h1>Romansystem_1</h1>
    <Backtohomepage />
    <p>Erkennst du die dargestellte Zahl? Gib die Zahl im Dezimalsystem an.</p>
    <hr />
    <br />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Versuche die Karten zusammenzuaddieren.'"
      @close-verifier="this.submitted = false"
    />

    <div class="zahl roman">
      <div class="einheit" v-if="M > 0">
        <div v-for="index in M" :key="index" class="karte">M</div>
      </div>

      <div class="einheit" v-if="D > 0">
        <div v-for="index in D" :key="index" class="karte">D</div>
      </div>

      <div class="einheit" v-if="C > 0">
        <div v-for="index in C" :key="index" class="karte">C</div>
      </div>

      <div class="einheit" v-if="L > 0">
        <div v-for="index in L" :key="index" class="karte">L</div>
      </div>

      <div class="einheit" v-if="X > 0">
        <div v-for="index in X" :key="index" class="karte">X</div>
      </div>

      <div class="einheit" v-if="V > 0">
        <div v-for="index in V" :key="index" class="karte">V</div>
      </div>

      <div class="einheit" v-if="I > 0">
        <div v-for="index in I" :key="index" class="karte">I</div>
      </div>
    </div>


    <Nexttask />
    <button @click="showHint()" class="btn_submit" v-if="!hint">Zeige Hinweis</button>
    <button @click="removeHint()" class="btn_submit" v-if="hint">Entferne Hinweis</button>
    <button @click="submit()" class="btn_submit">Überprüfen</button>
    <input v-model="eingabe" type="text" placeholder="Antwort">
    <p v-if="hint">In der unteren Tabelle findest du die entsprechenden Grössen und deren Wert.</p>
    <img src="../assets/hints/hint_roman_1.png" width="1000" v-if="hint">

  </div>
</template>

<script>
import Backtohomepage from "@/components/Backtohomepage.vue";
import Nexttask from "@/components/Nexttask.vue";
import Verifier from "@/components/Verifier.vue";

export default {
  components: { Backtohomepage, Nexttask, Verifier },
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
      eingabe: '',
      hint: false,
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
    submit() {
      if(this.eingabe == this.randomnumber){
        this.result = true;
      }else {
        this.result = false;
      }
      this.submitted = true;
    },
    showHint(){
      this.hint = true;
    },
    removeHint(){
      this.hint = false;
    }
  }
};
</script>

<style>
.roman {
  width: 1000px;
}
</style>