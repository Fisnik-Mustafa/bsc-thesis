<template>
  <div>
    <Header
      :title="'Binärfolgen addieren'"
      :taskdescription="'Bestimme die Summanden und die Summe. Addiere sie korrekt zusammen, indem du die Summe in die korrekte Kartendarstellung bringst.'"
      :bildname="'18-Binare-Zahlen3b'"
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Achte darauf, dass du korrekt umtauschst!'"
      @close-verifier="this.submitted = false"
    />

    <Tutorial
      :description="getTaskDescription()"
      :video_name="'Tutorial_Binaersystem4'"
      v-if="tutorialActive"
      @close-tutorial="this.tutorialActive = false"
    />

    <h2>
      Summand 1:
      <input
        type="number"
        placeholder="Summand 1"
        v-model="eingabesummand1"
        class="field"
      />
    </h2>
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

    <h2>
      Summand 2:
      <input
        type="number"
        placeholder="Summand 2"
        v-model="eingabesummand2"
        class="field"
      />
    </h2>
    <div class="binary_container">
      <div class="binary_card">{{ bit_2_32 }}</div>
      <div class="binary_card">{{ bit_2_16 }}</div>
      <div class="binary_card">{{ bit_2_8 }}</div>
      <div class="binary_card">{{ bit_2_4 }}</div>
      <div class="binary_card">{{ bit_2_2 }}</div>
      <div class="binary_card">{{ bit_2_1 }}</div>
    </div>

    <br />

    <h2 v-if="addup">
      Summe:
      <input
        type="number"
        placeholder="Summe"
        v-model="eingabesumme"
        class="field"
      />
    </h2>

    <div class="zahl" v-if="addup">
      <div class="einheit binaer" v-if="showposition_64">
        64

        <div v-for="index in position_64" :key="index" class="karte">1</div>
        <div v-for="index in umtausch64" :key="index" class="karte exchange">{{newUmtausch(1)}}</div>
      </div>
      <div class="einheit binaer" v-else>
        64
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_32">
        32
        <div v-for="index in position_32" :key="index" class="karte">1</div>
        <div v-for="index in umtausch32" :key="index" class="karte exchange">{{newUmtausch(1)}}</div>
      </div>
      <div class="einheit binaer" v-else>
        32
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_16">
        16
        <div v-for="index in position_16" :key="index" class="karte">1</div>
        <div v-for="index in umtausch16" :key="index" class="karte exchange">{{newUmtausch(1)}}</div>
      </div>
      <div class="einheit binaer" v-else>
        16
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_8">
        8
        <div v-for="index in position_8" :key="index" class="karte">1</div>
        <div v-for="index in umtausch8" :key="index" class="karte exchange">{{newUmtausch(1)}}</div>
      </div>
      <div class="einheit binaer" v-else>
        8
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_4">
        4
        <div v-for="index in position_4" :key="index" class="karte">1</div>
        <div v-for="index in umtausch4" :key="index" class="karte exchange">{{newUmtausch(1)}}</div>
      </div>
      <div class="einheit binaer" v-else>
        4
        <div class="karte">0</div>
      </div>

      <div class="einheit binaer" v-if="showposition_2">
        2
        <div v-for="index in position_2" :key="index" class="karte">1</div>
        <div v-for="index in umtausch2" :key="index" class="karte exchange">{{newUmtausch(1)}}</div>
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

    <br />

    <div v-if="addup">
      <button
        class="umtausch"
        @click="changezweiunddreissigforvierundsechzig()"
      >
        <span class="karte btncard bin">62</span> &larr; 2 x
        <span class="karte btncard bin">32</span>
      </button>
      <button class="umtausch" @click="changesechzehnerforzweiunddressig()">
        <span class="karte btncard bin">32</span> &larr; 2 x
        <span class="karte btncard bin">16</span>
      </button>

      <button class="umtausch" @click="changeachterforsechszehner()">
        <span class="karte btncard bin">16</span> &larr; 2 x
        <span class="karte btncard bin">8</span>
      </button>

      <button class="umtausch" @click="changeviererforachter()">
        <span class="karte btncard bin">8</span> &larr; 2 x
        <span class="karte btncard bin">4</span>
      </button>

      <button class="umtausch" @click="changezweierforvierer()">
        <span class="karte btncard bin">4</span> &larr; 2 x
        <span class="karte btncard bin">2</span>
      </button>
      <button class="umtausch" @click="changeeinerforzweier()">
        <span class="karte btncard bin">2</span> &larr; 2 x
        <span class="karte btncard bin">1</span>
      </button>
      <p style="color: red" v-if="notmorethan2">
        Du benötigst mindestens 2 Karten von dieser Einheit damit du korrekt
        umtauschen kannst!
      </p>
    </div>
    <br> <br>

    <Newtask :task="'Dezimalsystem_1'" />

    <Nexttask @next_task="reloadPage()" />

    <button @click="showTutorial()" class="btn_submit">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Hilfe
    </button>

    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon" /> <br />
      Überprüfen
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
import Nexttask from "@/components/Nexttask.vue";
import Verifier from "@/components/Verifier.vue";
import Newtask from "@/components/Newtask.vue";
import Header from "@/components/Header.vue";
import Tutorial from "@/components/Tutorial.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Nexttask, Verifier, Newtask, Header, Tutorial, Footer },
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
      eingabesummand1: "",
      eingabesummand2: "",
      eingabesumme: "",
      notmorethan2: false,
      tutorialActive: false,
      umtausch64: 0,
      umtausch32: 0,
      umtausch16: 0,
      umtausch8: 0,
      umtausch4: 0,
      umtausch2: 0,
      hint: false,
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
    
    this.position_32 = this.bit_1_32 + this.bit_2_32;
    this.position_16 = this.bit_1_16 + this.bit_2_16;
    this.position_8 = this.bit_1_8 + this.bit_2_8;
    this.position_4 = this.bit_1_4 + this.bit_2_4;
    this.position_2 = this.bit_1_2 + this.bit_2_2;
    this.position_1 = this.bit_1_1 + this.bit_2_1;
  },
  methods: {
    reloadPage() {
      this.$router.go(0);
    },
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
        this.position_64+this.umtausch64,
        this.position_32+this.umtausch32,
        this.position_16+this.umtausch16,
        this.position_8+this.umtausch8,
        this.position_4+this.umtausch4,
        this.position_2+this.umtausch2,
        this.position_1
      );
      if (
        this.submitsum == this.sumindec &&
        this.eingabesummand1 ==
          this.bit_1_32 * 32 +
            this.bit_1_16 * 16 +
            this.bit_1_8 * 8 +
            this.bit_1_4 * 4 +
            this.bit_1_2 * 2 +
            this.bit_1_1 &&
        this.eingabesummand2 ==
          this.bit_2_32 * 32 +
            this.bit_2_16 * 16 +
            this.bit_2_8 * 8 +
            this.bit_2_4 * 4 +
            this.bit_2_2 * 2 +
            this.bit_2_1 &&
        this.eingabesumme == this.sumindec
      ) {
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
      if (this.position_32 + this.umtausch32 > 1) {
        if(this.umtausch32 > 0){
          this.umtausch32 = this.umtausch32 -1;
          this.position_32 = this.position_32-1;
        }else {
          this.position_32 = this.position_32 - 2;
        }
        this.umtausch64 = this.umtausch64 + 1;
        this.checkmorethan2();
        this.checkboxtoshow();
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changesechzehnerforzweiunddressig() {
      if (this.position_16 + this.umtausch16 > 1) {
        if(this.umtausch16 > 0){
          this.umtausch16 = this.umtausch16 - 1;
          this.position_16 = this.position_16 - 1;
        }else {
          this.position_16 = this.position_16 - 2;
        }
        this.umtausch32 = this.umtausch32 + 1;
        this.checkmorethan2();
        this.checkboxtoshow();
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changeachterforsechszehner() {
      if (this.position_8 + this.umtausch8 > 1) {
        if(this.umtausch8 > 0){
          this.umtausch8 = this.umtausch8 - 1;
          this.position_8 = this.position_8 - 1;
        }else {
          this.position_8 = this.position_8 - 2;
        }
        this.umtausch16 = this.umtausch16 + 1;
        this.checkmorethan2();
        this.checkboxtoshow();
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changeviererforachter() {
      if (this.position_4 + this.umtausch4 > 1) {
        if(this.umtausch4 > 0){
          this.umtausch4 = this.umtausch4 - 1;
          this.position_4 = this.position_4 - 1;
        }else{
          this.position_4 = this.position_4 - 2;
        }
        this.umtausch8 = this.umtausch8 + 1;
        this.checkmorethan2();
        this.checkboxtoshow();
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changezweierforvierer() {
      if (this.position_2 + this.umtausch2 > 1) {
        if(this.umtausch2 > 0){
          this.umtausch2 = this.umtausch2 - 1;
          this.position_2 = this.position_2 - 1;
        }else {
          this.position_2 = this.position_2 - 2;
        }
        this.umtausch4 = this.umtausch4 + 1;
        this.checkmorethan2();
        this.checkboxtoshow();
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changeeinerforzweier() {
      if (this.position_1 > 1) {
        this.umtausch2 = this.umtausch2 + 1;
        this.position_1 = this.position_1 - 2;
        this.checkmorethan2();
        this.checkboxtoshow();
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    checkboxtoshow() {
      if (this.position_64 + this.umtausch64 > 0) {
        this.showposition_64 = true;
      } else {
        this.showposition_64 = false;
      }

      if (this.position_32 + this.umtausch32 > 0) {
        this.showposition_32 = true;
      } else {
        this.showposition_32 = false;
      }

      if (this.position_16 + this.umtausch16 > 0) {
        this.showposition_16 = true;
      } else {
        this.showposition_16 = false;
      }

      if (this.position_8 + this.umtausch8 > 0) {
        this.showposition_8 = true;
      } else {
        this.showposition_8 = false;
      }

      if (this.position_4 + this.umtausch4 > 0) {
        this.showposition_4 = true;
      } else {
        this.showposition_4 = false;
      }
      if (this.position_2 + this.umtausch2 > 0) {
        this.showposition_2 = true;
      } else {
        this.showposition_2 = false;
      }
      if (this.position_1 > 0) {
        this.showposition_1 = true;
      } else {
        this.showposition_1 = false;
      }
    },
    getTaskDescription() {
      return "In dieser Aufgabe hast du zwei Zahlen als Binärfolgen gegeben. Bestimme die beiden Zahlen als Dezimalzahl und addiere anschliessend die beiden Zahlen. Zum Schluss musst du sicherstellen, dass von jeder Grösse nicht mehr als eine Karte vorhanden ist. Dies kannst du sicherstellen, indem du zwischen den Grössen korrekt umtauschst.";
    },
    showTutorial() {
      this.tutorialActive = true;
    },
    newUmtausch(i) {
      setTimeout(function(){
        document.querySelectorAll('.exchange').forEach((x) => x.classList.remove('exchange'))
      }, 5000);
      return i;
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
.binaer {
  height: 175px;
  padding-left: 10px;
  padding-right: 10px;
}
.bin {
  padding-left: 20px;
  padding-right: 20px;
}
.exchange {
  border-color: red;
  -webkit-transition : border 500ms ease-out;
  -moz-transition : border 500ms ease-out;
  -o-transition : border 500ms ease-out;
  transition : border 500ms ease-out;
  background-color: rgb(246, 141, 141);
}
</style>