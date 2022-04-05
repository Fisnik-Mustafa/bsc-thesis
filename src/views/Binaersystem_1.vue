<template>
  <div>
    <h1>Binaersystem_1</h1>
    <Backtohomepage />
    <p>
      Stelle die folgende Zahl mithilfe der folgenden Karten dar:
      <span style="font-size: 25px; font-weight: bold">{{
        randomnumber
      }}</span>
    </p>
    <hr />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="''"
      @close-verifier="this.submitted = false"
    />

    <button class="binaer_btn" @click="addcard(0)">32</button>
    <button class="binaer_btn" @click="addcard(1)">16</button>
    <button class="binaer_btn" @click="addcard(2)">8</button>
    <button class="binaer_btn" @click="addcard(3)">4</button>
    <button class="binaer_btn" @click="addcard(4)">2</button>
    <button class="binaer_btn" @click="addcard(5)">1</button>

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
    <Nexttask />
    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon"/> <br />Überprüfen
    </button>
  </div>
</template>

<script>
import Backtohomepage from "@/components/Backtohomepage.vue";
import Verifier from "@/components/Verifier.vue";
import Nexttask from "@/components/Nexttask.vue";
import Newtask from "@/components/Newtask.vue";

export default {
  components: { Backtohomepage, Verifier, Nexttask, Newtask },
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
    };
  },
  created: function () {
    this.deztobin();
  },
  methods: {
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
  },
};
</script>

<style>
.binaer_btn {
  width: 100px;
  height: 100px;
  /*padding: 30px;*/
  margin: 20px;
  font-size: large;
  border-radius: 10px;
  border-color: rgb(83, 81, 81);
  font-weight: bold;
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
  width: 840px;
}
</style>