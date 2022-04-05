<template>
  <div>
    <h1>Binaersystem_3</h1>
    <Backtohomepage />
    <p>Addiere beide Binärzahlen korrekt zusammen.</p>
    <hr />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Versuche die Karten zusammenzuaddieren. und stelle durch Umtauschen sicher, dass von jeder Grösse die korrekten Anzahl Karten dargestellt sind.'"
      @close-verifier="this.submitted = false"
    />

    <h2>Zahl 1</h2>
    <div class="binary_container">
      <div class="binary_card">{{ bit_1_32 }}</div>
      <div class="binary_card">{{ bit_1_16 }}</div>
      <div class="binary_card">{{ bit_1_8 }}</div>
      <div class="binary_card">{{ bit_1_4 }}</div>
      <div class="binary_card">{{ bit_1_2 }}</div>
      <div class="binary_card">{{ bit_1_1 }}</div>
    </div>

    <br />
    <button class="addition" @click="add()">+</button>
    <br />

    <h2>Zahl 2</h2>
    <div class="binary_container">
      <div class="binary_card">{{ bit_2_32 }}</div>
      <div class="binary_card">{{ bit_2_16 }}</div>
      <div class="binary_card">{{ bit_2_8 }}</div>
      <div class="binary_card">{{ bit_2_4 }}</div>
      <div class="binary_card">{{ bit_2_2 }}</div>
      <div class="binary_card">{{ bit_2_1 }}</div>
    </div>

    <br />
    
    <h2>Summe</h2>

    <div class="zahl" v-if="addup">
      <div class="einheit binaer" v-if="showposition_64">
        64
        <div v-for="index in position_64" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-else>
        64
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_32">
        32
        <div v-for="index in position_32" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-else>
        32
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_16">
        16
        <div v-for="index in position_16" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-else>
        16
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_8">
        8
        <div v-for="index in position_8" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-else>
        8
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_4">
        4
        <div v-for="index in position_4" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-else>
        4
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_2">
        2
        <div v-for="index in position_2" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-else>
        2
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_1">
        1
        <div v-for="index in position_1" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-else>
        1
        <div class="karte">0</div>
      </div>

    </div>

    <br>

    <div v-if="addup">
      <button
        class="umtausch"
        v-if="morethan2zweiunddreissiger"
        @click="changezweiunddreissigforvierundsechzig()"
      >
        64 <i class="arrow left"></i> 2*32
      </button>
      <button
        class="umtausch"
        v-if="morethan2sechszehner"
        @click="changesechzehnerforzweiunddressig()"
      >
        32 <i class="arrow left"></i> 2*16
      </button>
      <button
        class="umtausch"
        v-if="morethan2achter"
        @click="changeachterforsechszehner()"
      >
        16 <i class="arrow left"></i> 2*8
      </button>
      <button
        class="umtausch"
        v-if="morethan2vierer"
        @click="changeviererforachter()"
      >
        8 <i class="arrow left"></i> 2*4
      </button>
      <button
        class="umtausch"
        v-if="morethan2zweier"
        @click="changezweierforvierer()"
      >
        4 <i class="arrow left"></i> 2*2
      </button>
      <button
        class="umtausch"
        v-if="morethan2einer"
        @click="changeeinerforzweier()"
      >
        2 <i class="arrow left"></i> 2*1
      </button>
    </div>
    
    <Newtask :task="'Dezimalsystem_1'"/>
    <Nexttask />
    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon"/> <br />
      Überprüfen</button>
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
      bit_1_32: 0,
      bit_1_16: 0,
      bit_1_8: 0,
      bit_1_4: 0,
      bit_1_2: 0,
      bit_1_1: 0,
      bit_2_32: 0,
      bit_2_16: 0,
      bit_2_8: 0,
      bit_2_4: 0,
      bit_2_2: 0,
      bit_2_1: 0,
      position_64: 0,
      position_32: 0,
      position_16: 0,
      position_8: 0,
      position_4: 0,
      position_2: 0,
      position_1: 0,
      addup: false,
      morethan2zweiunddreissiger: false,
      morethan2sechszehner: false,
      morethan2achter: false,
      morethan2vierer: false,
      morethan2zweier: false,
      morethan2einer: false,
      showposition_64: false,
      showposition_32: false,
      showposition_16: false,
      showposition_8: false,
      showposition_4: false,
      showposition_2: false,
      showposition_1: false,
      submitted: false,
      result: false,
      summand1indec: 0,
      summand2indec: 0,
      sumindec: 0,
      submitsum: 0,
    };
  },
  created: function () {
    // source: mdn web docs
    this.bit_1_32 = this.getRandomIntInclusive(0, 1);
    this.bit_1_16 = this.getRandomIntInclusive(0, 1);
    this.bit_1_8 = this.getRandomIntInclusive(0, 1);
    this.bit_1_4 = this.getRandomIntInclusive(0, 1);
    this.bit_1_2 = this.getRandomIntInclusive(0, 1);
    this.bit_1_1 = this.getRandomIntInclusive(0, 1);

    this.bit_2_32 = this.getRandomIntInclusive(0, 1);
    this.bit_2_16 = this.getRandomIntInclusive(0, 1);
    this.bit_2_8 = this.getRandomIntInclusive(0, 1);
    this.bit_2_4 = this.getRandomIntInclusive(0, 1);
    this.bit_2_2 = this.getRandomIntInclusive(0, 1);
    this.bit_2_1 = this.getRandomIntInclusive(0, 1);
    1;
  },
  methods: {
    getDecfromBin(e0, e1, e2, e3, e4, e5, e6) {
      if (e0 < 2 && e1 < 2 && e2 < 2 && e3 < 2 && e4 < 2 && e5 < 2 && e6 < 2) {
        return e0 * 64 + e1 * 32 + e2 * 16 + e3 * 8 + e4 * 4 + e5 * 2 + e6 * 1;
      } else {
        return -1;
      }
    },
    submit() {
      this.summand1indec = this.getDecfromBin(
        0,
        this.bit_1_32,
        this.bit_1_16,
        this.bit_1_8,
        this.bit_1_4,
        this.bit_1_2,
        this.bit_1_1
      );
      this.summand2indec = this.getDecfromBin(
        0,
        this.bit_2_32,
        this.bit_2_16,
        this.bit_2_8,
        this.bit_2_4,
        this.bit_2_2,
        this.bit_2_1
      );
      this.sumindec = this.summand1indec + this.summand2indec;
      this.submitsum = this.getDecfromBin(
        this.position_64,
        this.position_32,
        this.position_16,
        this.position_8,
        this.position_4,
        this.position_2,
        this.position_1
      );
      if (this.submitsum == this.sumindec) {
        this.result = true;
      } else {
        this.result = false;
      }
      this.submitted = true;
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    add() {
      this.addup = true;
      this.position_32 = this.bit_1_32 + this.bit_2_32;
      this.position_16 = this.bit_1_16 + this.bit_2_16;
      this.position_8 = this.bit_1_8 + this.bit_2_8;
      this.position_4 = this.bit_1_4 + this.bit_2_4;
      this.position_2 = this.bit_1_2 + this.bit_2_2;
      this.position_1 = this.bit_1_1 + this.bit_2_1;
      this.checkmorethan2();
      this.checkboxtoshow();
    },
    checkmorethan2() {
      if (this.position_32 > 1) {
        this.morethan2zweiunddreissiger = true;
      } else {
        this.morethan2zweiunddreissiger = false;
      }

      if (this.position_16 > 1) {
        this.morethan2sechszehner = true;
      } else {
        this.morethan2sechszehner = false;
      }

      if (this.position_8 > 1) {
        this.morethan2achter = true;
      } else {
        this.morethan2achter = false;
      }

      if (this.position_4 > 1) {
        this.morethan2vierer = true;
      } else {
        this.morethan2vierer = false;
      }

      if (this.position_2 > 1) {
        this.morethan2zweier = true;
      } else {
        this.morethan2zweier = false;
      }

      if (this.position_1 > 1) {
        this.morethan2einer = true;
      } else {
        this.morethan2einer = false;
      }
    },
    changezweiunddreissigforvierundsechzig() {
      this.position_64 = this.position_64 + 1;
      this.position_32 = this.position_32 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();
    },
    changesechzehnerforzweiunddressig() {
      this.position_32 = this.position_32 + 1;
      this.position_16 = this.position_16 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();
    },
    changeachterforsechszehner() {
      this.position_16 = this.position_16 + 1;
      this.position_8 = this.position_8 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();
    },
    changeviererforachter() {
      this.position_8 = this.position_8 + 1;
      this.position_4 = this.position_4 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();
    },
    changezweierforvierer() {
      this.position_4 = this.position_4 + 1;
      this.position_2 = this.position_2 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();
    },
    changeeinerforzweier() {
      this.position_2 = this.position_2 + 1;
      this.position_1 = this.position_1 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();
    },
    checkboxtoshow() {
      if (this.position_64 > 0) {
        this.showposition_64 = true;
      }else {
        this.showposition_64 = false;
      } 

      if (this.position_32 > 0) {
        this.showposition_32 = true;
      }else {
        this.showposition_32 = false;
      }

      if (this.position_16 > 0) {
        this.showposition_16 = true;
      }else {
        this.showposition_16 = false;
      }

      if (this.position_8 > 0) {
        this.showposition_8 = true;
      }else {
        this.showposition_8 = false;
      }

      if (this.position_4 > 0) {
        this.showposition_4 = true;
      }else {
        this.showposition_4 = false;
      } 
      if (this.position_2 > 0) {
        this.showposition_2 = true;
      }else {
        this.showposition_2 = false;
      } 
      if (this.position_1 > 0) {
        this.showposition_1 = true;
      }else {
        this.showposition_1 = false;
      }
    },
  },
};
</script>

<style>
.binaer {
  height: 175px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>