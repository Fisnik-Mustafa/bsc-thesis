<template>
  <div>
    <Header
      :title="'Binäre Kartendarstellung kennenlernen'"
      :taskdescription="'Stelle die folgende Zahl mithilfe der binären Karten dar: '"
      :bildname="'16-Binare-Zahlen1'"
      :num="randomnumber"
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="''"
      @close-verifier="this.submitted = false"
    />

    <Tutorial
      :description="getTaskDescription()"
      :video_name="'Tutorial_Binaersystem1'"
      v-if="tutorialActive"
      @close-tutorial="this.tutorialActive = false"
    />

    <h2>Binäre Karten:</h2>
    <div style="max-width: 840px; display: flex; margin: auto">
      <button class="binaer_btn" @click="addcard(0)">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >32</span
        >
      </button>
      <button class="binaer_btn" @click="addcard(1)">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >16</span
        >
      </button>
      <button class="binaer_btn" @click="addcard(2)">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >8</span
        >
      </button>
      <button class="binaer_btn" @click="addcard(3)">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >4</span
        >
      </button>
      <button class="binaer_btn" @click="addcard(4)">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >2</span
        >
      </button>
      <button class="binaer_btn" @click="addcard(5)">
        <span
          style="display: flex; flex-direction: row; justify-content: center"
          >1</span
        >
      </button>
    </div>

    <h2>Binäre Zahlendarstellung:</h2>
    <div class="binary_container">
      <div class="binary_card">{{ bit32 }}</div>
      <div class="binary_card">{{ bit16 }}</div>
      <div class="binary_card">{{ bit8 }}</div>
      <div class="binary_card">{{ bit4 }}</div>
      <div class="binary_card">{{ bit2 }}</div>
      <div class="binary_card">{{ bit1 }}</div>
    </div>

    <br />
    <Newtask :task="'Binaersystem_2'" />

    <Nexttask @next_task="reloadPage()" />

    <button @click="showTutorial()" class="btn_submit">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Hilfe
    </button>

    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon" /> <br />Überprüfen
    </button>

    <br>

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
      randomnumber: Math.floor(Math.random() * 63) + 1,
      chosen32: false,
      chosen16: false,
      chosen8: false,
      chosen4: false,
      chosen2: false,
      chosen1: false,
      counter: 0,
      submitted: false,
      result: false,
      binNum: "",
      temprandomnumber: 0,
      bit32: 0,
      bit16: 0,
      bit8: 0,
      bit4: 0,
      bit2: 0,
      bit1: 0,
      tutorialActive: false,
      hint: false,
    };
  },
  created: function () {
    this.deztobin();
  },
  methods: {
    reloadPage() {
      this.$router.go(0);
    },
    deztobin() {
      this.temprandomnumber = this.randomnumber;
      while (this.temprandomnumber > 0) {
        if (this.temprandomnumber % 2 == 1) {
          this.binNum = this.binNum + "1";
        } else {
          this.binNum = this.binNum + "0";
        }
        this.temprandomnumber = Math.floor(this.temprandomnumber / 2);
      }
      this.binNum = this.binNum.split("").reverse().join("");
    },
    submit() {
      if (this.counter == this.randomnumber) {
        this.result = true;
      } else {
        this.result = false;
      }
      this.submitted = true;
    },
    addcard(n) {
      // Case 32
      if (n == 0 && !this.chosen32) {
        this.counter = this.counter + 32;
        this.bit32 = 1;
      } else if (n == 0 && this.chosen32) {
        this.counter = this.counter - 32;
        this.bit32 = 0;
      }

      // Case 16
      if (n == 1 && !this.chosen16) {
        this.counter = this.counter + 16;
        this.bit16 = 1;
      } else if (n == 1 && this.chosen16) {
        this.counter = this.counter - 16;
        this.bit16 = 0;
      }

      // Case 8
      if (n == 2 && !this.chosen8) {
        this.counter = this.counter + 8;
        this.bit8 = 1;
      } else if (n == 2 && this.chosen8) {
        this.counter = this.counter - 8;
        this.bit8 = 0;
      }

      // Case 4
      if (n == 3 && !this.chosen4) {
        this.counter = this.counter + 4;
        this.bit4 = 1;
      } else if (n == 3 && this.chosen4) {
        this.counter = this.counter - 4;
        this.bit4 = 0;
      }

      // Case 2
      if (n == 4 && !this.chosen2) {
        this.counter = this.counter + 2;
        this.bit2 = 1;
      } else if (n == 4 && this.chosen2) {
        this.counter = this.counter - 2;
        this.bit2 = 0;
      }

      // Case 1
      if (n == 5 && !this.chosen1) {
        this.counter = this.counter + 1;
        this.bit1 = 1;
      } else if (n == 5 && this.chosen1) {
        this.counter = this.counter - 1;
        this.bit1 = 0;
      }
      this.togglecard(n);
    },
    togglecard(n) {
      if (n == 0) {
        this.chosen32 = !this.chosen32;
      } else if (n == 1) {
        this.chosen16 = !this.chosen16;
      } else if (n == 2) {
        this.chosen8 = !this.chosen8;
      } else if (n == 3) {
        this.chosen4 = !this.chosen4;
      } else if (n == 4) {
        this.chosen2 = !this.chosen2;
      } else if (n == 5) {
        this.chosen1 = !this.chosen1;
      }
    },
    showTutorial() {
      this.tutorialActive = true;
    },
    getTaskDescription() {
      return "Diese Aufgabe soll dir das Binärsystem beibringen. Du hast eine Zahl gegeben. Weiter hast du eine 32, 16, 8, 4, 2 und 1 Karte gegeben. Welche von diesen Karten benötigst du, damit die Summe der Karten genau der Zahl entspricht? Der Trick ist immer die grösstmögliche Karte zu probieren, dann die nächstkleinere und so weiter. Klicke auf eine Karte, falls sie in Frage kommen sollte, um die Zahl im Binärsystem darzustellen."
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
.binaer_btn {
  width: 100px;
  height: 100px;
  /*padding: 30px;*/
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: large;
  border-radius: 10px;
  border-color: rgb(83, 81, 81);
  font-weight: bold;
  background-color: rgb(230, 230, 156);
}
.binaer_btn:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.active {
  background-color: rgb(79, 79, 175);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.binary_card {
  width: 100px;
  /*height: 100px;*/
  border: 1px solid black;
  font-size: 25px;
  border-radius: 10px;
  margin: 0 auto;
  font-weight: bold;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
}
.binary_container {
  display: flex;
  margin: auto;
  max-width: 840px;
}
</style>