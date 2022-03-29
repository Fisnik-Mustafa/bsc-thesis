<template>
  <div>
    <h1>Dezimalsystem_2</h1>
    <Backtohomepage />
    <p>
      Wieviele Karten benötigst du um diese Zahl darzustellen:
      {{ randomnumber }}
    </p>

    <Verifier 
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Versuche die Zahl in 1000er, 100er, 10er und 1er Blöcke zu teilen.'"
      @close-verifier="this.submitted = false"/>

    <div class="btn_div">
      <button class="karte_btn" @click="increasetausender()">1000</button>
      <button class="karte_btn" @click="increasehunderter()">100</button>
      <button class="karte_btn" @click="increasezehner()">10</button>
      <button class="karte_btn" @click="increaseeiner()">1</button>
    </div>

    <hr style="color: black" />

    <div class="zahl">
      <div class="einheit">
        <div v-for="index in tausender" :key="index" class="karte" @click="removetausender()">1000</div>
      </div>
      <div class="einheit">
        <div v-for="index in hunderter" :key="index" class="karte" @click="removehunderter()">100</div>
      </div>
      <div class="einheit">
        <div v-for="index in zehner" :key="index" class="karte" @click="removezehner()">10</div>
      </div>
      <div class="einheit">
        <div v-for="index in einer" :key="index" class="karte" @click="removeeiner()">1</div>
      </div>
    </div>

    <Nexttask />
    <button @click="submit()" class="btn_submit">Überprüfen</button>
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
      tausender: 0,
      hunderter: 0,
      zehner: 0,
      einer: 0
    };
  },
  methods: {
    increasetausender() {
      if (this.tausender < 9){
        this.tausender = this.tausender + 1
      }
    },
    removetausender() {
      if(this.tausender > 0){
        this.tausender = this.tausender -1;
      }
    },
    increasehunderter() {
      if (this.hunderter < 9){
        this.hunderter = this.hunderter + 1
      }
      
    },
    removehunderter() {
      if(this.hunderter > 0){
        this.hunderter = this.hunderter -1;
      }
    },
    increasezehner() {
      if (this.zehner < 9) {
        this.zehner = this.zehner + 1
      }
    },
    removezehner() {
      if(this.zehner > 0){
        this.zehner = this.zehner - 1;
      }
    },
    increaseeiner() {
      if (this.einer < 9){
        this.einer = this.einer + 1
      }
    },
    removeeiner() {
      if(this.einer > 0){
        this.einer = this.einer - 1;
      }
    },
  }
}
</script>

<style>
.karte_btn {
  padding: 10px 50px 10px 50px;
  border-radius: 15px;
  margin: 10px;
  display: inline;
}
.btn_div {
  margin: auto;
  width: 700px;
}
</style>