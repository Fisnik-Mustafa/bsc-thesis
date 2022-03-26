<template>
  <div>
    <h1>Dezimalsystem_1</h1>
    <Backtohomepage />
    <p>Erkennst du die dargestellte Zahl?</p>
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
  </div>
</template>

<script>
import Backtohomepage from "@/components/Backtohomepage.vue";

export default {
  components: { Backtohomepage },
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
    };
  },
  created: function () {
    this.tausender = Math.floor(this.randomnumber / 1000);
    this.hunderter = Math.floor((this.randomnumber % 1000) / 100);
    this.zehner = Math.floor((this.randomnumber % 100) / 10);
    this.einer = this.randomnumber % 10;
  },
};
</script>

<style>
.einheit {
  border: 1px solid black;
  padding: 0px 50px 0px 50px;
  margin: 10px;
  width: 50px;
}
.zahl {
  display: flex;
  width: auto;
  margin: auto;
}
.karte {
  background-color: white;
  border: 1px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>