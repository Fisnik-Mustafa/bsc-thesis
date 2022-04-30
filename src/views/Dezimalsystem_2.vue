<template>
  <div>
    <Header
      :title="'Dezimalzahl mit Karten darstellen'"
      :taskdescription="'Wieviele Karten benötigst du um diese Zahl darzustellen:'"
      :num="randomnumber"
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Versuche die Zahl in 1000er, 100er, 10er und 1er Blöcke zu teilen.'"
      @close-verifier="this.submitted = false"
    />

    <Tutorial 
      :description="getTaskDescription()"
      :video_name="'Tutorial_Dezimalsystem2'"
      v-if="tutorialActive"
      @close-tutorial="this.tutorialActive = false"/>

    <div
      class="btn_div"
      style="display: flex; margin: auto; max-width: 700px"
    >
      <button class="karte_btn" @click="increasetausender()">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >1000</span
        >
      </button>
      <button class="karte_btn" @click="increasehunderter()">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >100</span
        >
      </button>
      <button class="karte_btn" @click="increasezehner()">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >10</span
        >
      </button>
      <button class="karte_btn" @click="increaseeiner()">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >1</span
        >
      </button>
    </div>

    <br />
    <br />

    <div class="zahl">
      <div class="einheit">
        <div
          v-for="index in tausender"
          :key="index"
          class="karte"
          @click="removetausender()"
        >
          1000
        </div>
      </div>
      <div class="einheit">
        <div
          v-for="index in hunderter"
          :key="index"
          class="karte"
          @click="removehunderter()"
        >
          100
        </div>
      </div>
      <div class="einheit">
        <div
          v-for="index in zehner"
          :key="index"
          class="karte"
          @click="removezehner()"
        >
          10
        </div>
      </div>
      <div class="einheit">
        <div
          v-for="index in einer"
          :key="index"
          class="karte"
          @click="removeeiner()"
        >
          1
        </div>
      </div>
    </div>
    <br> <br>
    <Newtask :task="'Dezimalsystem_3'" />

    <Nexttask @next_task="reloadPage()"/>

    <button @click="showTutorial()" class="btn_submit">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Hilfe
    </button>

    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon" />
      <br />
      Überprüfen
    </button>

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
      tausender: 0,
      hunderter: 0,
      zehner: 0,
      einer: 0,
      resulttausender: 0,
      resulthunderter: 0,
      resultzehner: 0,
      resulteiner: 0,
      result: false,
      submitted: false,
      tutorialActive: false,
    };
  },
  created: function () {
    this.resulttausender = Math.floor(this.randomnumber / 1000);
    this.resulthunderter = Math.floor((this.randomnumber % 1000) / 100);
    this.resultzehner = Math.floor((this.randomnumber % 100) / 10);
    this.resulteiner = this.randomnumber % 10;
  },
  methods: {
    reloadPage(){
      this.$router.go(0);
    },
    submit() {
      this.result = false;
      if (
        this.tausender == this.resulttausender &&
        this.hunderter == this.resulthunderter &&
        this.zehner == this.resultzehner &&
        this.einer == this.resulteiner
      ) {
        this.result = true;
      }
      this.submitted = true;
    },
    increasetausender() {
      if (this.tausender < 9) {
        this.tausender = this.tausender + 1;
      }
    },
    removetausender() {
      if (this.tausender > 0) {
        this.tausender = this.tausender - 1;
      }
    },
    increasehunderter() {
      if (this.hunderter < 9) {
        this.hunderter = this.hunderter + 1;
      }
    },
    removehunderter() {
      if (this.hunderter > 0) {
        this.hunderter = this.hunderter - 1;
      }
    },
    increasezehner() {
      if (this.zehner < 9) {
        this.zehner = this.zehner + 1;
      }
    },
    removezehner() {
      if (this.zehner > 0) {
        this.zehner = this.zehner - 1;
      }
    },
    increaseeiner() {
      if (this.einer < 9) {
        this.einer = this.einer + 1;
      }
    },
    removeeiner() {
      if (this.einer > 0) {
        this.einer = this.einer - 1;
      }
    },
    showTutorial(){
      this.tutorialActive = true;
    },
    getTaskDescription() {
      return "Du hast eine Zahl gegeben. Versuche diese Zahl in 1000er Karten aufzuteilen solange es geht, indem du auf den Knopf drückst. Wenn du fertig bist machst du dasselbe noch mit den 100er Karten, dann mit den 10er und anschliessend mit den 1er Karten. Am Schluss sollte dann die Zahl korrekt in den jeweiligen Karten aufgeteilt sein, sodass die Summe der Karten wieder die ursprüngliche Zahl zurückgibt.";
    },
  },
};
</script>

<style>
.karte_btn {
  width: 90px;
  height: 50px;
  border-radius: 15px;
  margin: 0 auto;
  display: inline;
  border-color: rgb(83, 81, 81);
  background-color: rgb(230, 230, 156);
  font-size: 25px;
}
.karte_btn:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btn_div {
  margin: auto;
  max-width: 800px;
}
</style>