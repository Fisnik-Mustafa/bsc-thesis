<template>
  <div>
    <h1>Dezimalsystem_1</h1>
    <Backtohomepage />
    <p>Erkennst du die dargestellte Zahl?</p>
    <hr style="color: black;">

    <Verifier 
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Versuche die Karten zusammenzuaddieren.'"
      @close-verifier="this.submitted = false"/>

    <div class="zahl">
      <div class="einheit">
        <div v-for="index in tausender" :key="index" class="karte">1000</div>
      </div>
      <div class="einheit">
        <div v-for="index in hunderter" :key="index" class="karte">100</div>
      </div>
      <div class="einheit">
        <div v-for="index in zehner" :key="index" class="karte">10</div>
      </div>
      <div class="einheit">
        <div v-for="index in einer" :key="index" class="karte">1</div>
      </div>
    </div>

    <Nexttask />
    <button @click="submit()" class="btn_submit">Überprüfen</button>
    <input v-model="eingabe" type="text" placeholder="Antwort">
  </div>
</template>

<script>
import Verifier from "@/components/Verifier.vue";
import Backtohomepage from "@/components/Backtohomepage.vue";
import Nexttask from "@/components/Nexttask.vue";



export default {
  components: { Backtohomepage, Nexttask, Verifier},
  data() {
    return {
      randomnumber: Math.floor(Math.random() * (9999-1+1))+1,
      // tausender: Array(Math.floor(this.randomnumber / 1000)).fill(1000),
      // hunderter: Array(Math.floor((this.randomnumber % 1000) / 100)).fill(100),
      // zehner: Array(Math.floor((this.randomnumber % 100) / 10)).fill(10),
      // einer: Array(this.randomnumber % 10).fill(1)
      tausender: 0,
      hunderter: 0,
      zehner: 0,
      einer: 0,
      eingabe: null,
      submitted: false,
      result: false
    };
  },
  created: function () {
    this.tausender = Math.floor(this.randomnumber / 1000);
    this.hunderter = Math.floor((this.randomnumber % 1000) / 100);
    this.zehner = Math.floor((this.randomnumber % 100) / 10);
    this.einer = this.randomnumber % 10;
  },
  methods: {
    submit() {
      this.result = this.randomnumber == this.eingabe
      this.submitted = true
    }
  }
};
</script>

<style>
.einheit {
  border: 1px solid black;
  padding: 0px 25px 0px 25px;
  /* margin: 10px; */
  height: 410px;
  width: 50px;
  /* display: inline; */
  /* float: left; */
  margin: 0 auto; 
}
.zahl {
  display: flex;
  /*width: auto;*/
  margin: auto;
  width: 700px;
}
.karte {
  background-color: white;
  border: 1px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
}
.btn_submit {
  margin-right: 20px;
  padding: 10px;
  border-radius: 10px;
  border-color: rgb(83,81,81);
}
.btn_submit:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>