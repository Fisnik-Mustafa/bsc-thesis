<template>
  <div>
    <h1>Binaersystem_2</h1>
    <Backtohomepage />
    <p>
      Gegeben die Zahl in Binärdarstellung. Gib die Zahl in Dezimalsystem an.
    </p>
    <hr />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Versuche die Karten zusammenzuaddieren.'"
      @close-verifier="this.submitted = false"
    />

    <div class="binary_container">
      <div class="binary_card">{{ bit32 }}</div>
      <div class="binary_card">{{ bit16 }}</div>
      <div class="binary_card">{{ bit8 }}</div>
      <div class="binary_card">{{ bit4 }}</div>
      <div class="binary_card">{{ bit2 }}</div>
      <div class="binary_card">{{ bit1 }}</div>
    </div>

    <Nexttask />
    <button @click="submit()" class="btn_submit">Überprüfen</button>
    <input v-model="usernum" type="text" placeholder="Antwort" />
  </div>
</template>

<script>
import Backtohomepage from "@/components/Backtohomepage.vue";
import Verifier from "@/components/Verifier.vue";
import Nexttask from "@/components/Nexttask.vue";

export default {
  components: { Backtohomepage, Verifier, Nexttask },
  data() {
    return {
      num: 0,
      bit32: Math.floor(Math.random() * 1),
      bit16: 0,
      bit8: 0,
      bit4: 0,
      bit2: 0,
      bit1: 0,
      usernum: "",
      result: false,
      submitted: false
    };
  },
  created: function () {
    this.bit32 = this.getRandomIntInclusive(0, 1);
    this.bit16 = this.getRandomIntInclusive(0, 1);
    this.bit8 = this.getRandomIntInclusive(0, 1);
    this.bit4 = this.getRandomIntInclusive(0, 1);
    this.bit2 = this.getRandomIntInclusive(0, 1);
    this.bit1 = this.getRandomIntInclusive(0, 1);
    this.getDecNum();
  },
  methods: {
    // source: mdn web docs
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getDecNum() {
      this.num = this.num + this.bit32 * 32;
      this.num = this.num + this.bit16 * 16;
      this.num = this.num + this.bit8 * 8;
      this.num = this.num + this.bit4 * 4;
      this.num = this.num + this.bit2 * 2;
      this.num = this.num + this.bit1 * 1;
    },
    submit() {
      if(this.num == this.usernum){
        this.result = true;
      }else {
        this.result = false;
      }
      this.submitted = true;
    },
  },
};
</script>

<style>
</style>