<template>
  <div>
    <Header
      :title="'Binärzahl in Dezimalzahl umwandeln'"
      :taskdescription="'Gegeben die Zahl in Binärdarstellung. Gib die Zahl in Dezimalsystem an.'"
      :bildname="'18-Binare-Zahlen3b'"
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Versuche die Karten zusammenzuaddieren.'"
      @close-verifier="this.submitted = false"
    />

    <Tutorial
      :description="getTaskDescription()"
      :video_name="'Tutorial_Binaersystem2'"
      v-if="tutorialActive"
      @close-tutorial="this.tutorialActive = false"
    />

    <div class="binary_container">
      <div class="binary_card">{{ bit32 }}</div>
      <div class="binary_card">{{ bit16 }}</div>
      <div class="binary_card">{{ bit8 }}</div>
      <div class="binary_card">{{ bit4 }}</div>
      <div class="binary_card">{{ bit2 }}</div>
      <div class="binary_card">{{ bit1 }}</div>
    </div>

    <br />
    <br />

    <Newtask :task="'Binaersystem_3'" />

    <Nexttask @next_task="reloadPage()" />

    <button @click="showTutorial()" class="btn_submit">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Hilfe
    </button>

    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon" /> <br />Überprüfen
    </button>
    <input
      v-model="usernum"
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
        src="../assets/hints/hint_binaer_1.png"
        style="max-width: 100%; height: auto; width: auto\9; /* ie8 */"
        v-if="hint"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
import Verifier from "@/components/Verifier.vue";
import Nexttask from "@/components/Nexttask.vue";
import Newtask from "@/components/Newtask.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Tutorial from "@/components/Tutorial.vue";

export default {
  components: { Verifier, Nexttask, Newtask, Header, Footer, Tutorial },
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
      submitted: false,
      tutorialActive: false,
      hint: false,
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
    showHint() {
      this.hint = true;
    },
    removeHint() {
      this.hint = false;
    },
    reloadPage() {
      this.$router.go(0);
    },
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
      if (this.num == this.usernum) {
        this.result = true;
      } else {
        this.result = false;
      }
      this.submitted = true;
    },
    getTaskDescription() {
      return "In dieser Aufgabe hast du eine Zahl in der Binärdarstellung gegeben. Wandle diese Zahl in unser altbekanntes Dezimalsystem um.";
    },
    showTutorial() {
      this.tutorialActive = true;
    },
  },
};
</script>

<style>
</style>