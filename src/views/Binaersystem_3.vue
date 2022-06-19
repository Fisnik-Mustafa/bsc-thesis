<template>
  <div>
    <Header
      :title="'Binärzahlen mithilfe der Kartendarstellung addieren'"
      :taskdescription="'Bestimme die Summanden und die Summe. Addiere sie korrekt zusammen, indem du die Summe in die korrekte Kartendarstellung bringst.'"
      :bildname="'17-Binare-Zahlen2_schwimmender_Biber_2'" 
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Achte darauf, dass du korrekt umtauscht!'"
      @close-verifier="this.submitted = false"
    />

    <Tutorial
      :description="getTaskDescription()"
      :video_name="'Tutorial_Dezimalsystem3'"
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
    <div class="zahl">
      <div class="einheit bin3">
        <div v-for="index in summand1_32" :key="index" class="karte">32</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand1_16" :key="index" class="karte">16</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand1_8" :key="index" class="karte">8</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand1_4" :key="index" class="karte">4</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand1_2" :key="index" class="karte">2</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand1_1" :key="index" class="karte">1</div>
      </div>
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
    <div class="zahl">
      <div class="einheit bin3">
        <div v-for="index in summand2_32" :key="index" class="karte">32</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand2_16" :key="index" class="karte">16</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand2_8" :key="index" class="karte">8</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand2_4" :key="index" class="karte">4</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand2_2" :key="index" class="karte">2</div>
      </div>
      <div class="einheit bin3">
        <div v-for="index in summand2_1" :key="index" class="karte">1</div>
      </div>
    </div>

    <h2 v-if="addup">
      Summe:
      <input
        type="number"
        placeholder="Summe"
        v-model="eingabesumme"
        class="field"
      />
    </h2>
    <div class="zahl summe_width" v-if="addup">
      <div class="einheit summe_bin3">
        <div v-for="index in umtausch_64" :key="index" class="karte exchange">
          {{ newUmtausch(64) }}
        </div>
      </div>
      <div class="einheit summe_bin3">
        <div v-for="index in summe_32" :key="index" class="karte">32</div>

        <div v-for="index in umtausch_32" :key="index" class="karte exchange">
          {{ newUmtausch(32) }}
        </div>
      </div>
      <div class="einheit summe_bin3">
        <div v-for="index in summe_16" :key="index" class="karte">16</div>

        <div v-for="index in umtausch_16" :key="index" class="karte exchange">
          {{ newUmtausch(16) }}
        </div>
      </div>
      <div class="einheit summe_bin3">
        <div v-for="index in summe_8" :key="index" class="karte">8</div>

        <div v-for="index in umtausch_8" :key="index" class="karte exchange">
          {{ newUmtausch(8) }}
        </div>
      </div>
      <div class="einheit summe_bin3">
        <div v-for="index in summe_4" :key="index" class="karte">4</div>

        <div v-for="index in umtausch_4" :key="index" class="karte exchange">
          {{ newUmtausch(4) }}
        </div>
      </div>
      <div class="einheit summe_bin3">
        <div v-for="index in summe_2" :key="index" class="karte">2</div>

        <div v-for="index in umtausch_2" :key="index" class="karte exchange">
          {{ newUmtausch(2) }}
        </div>
      </div>
      <div class="einheit summe_bin3">
        <div v-for="index in summe_1" :key="index" class="karte">1</div>
      </div>
    </div>

    <br />
    <br />

    <div v-if="addup">
      <button class="umtausch" @click="changezwei32for64()">
        <span class="karte btncard bincard">64</span> &larr; 2 x
        <span class="karte btncard bincard">32</span>
      </button>

      <button class="umtausch" @click="changezwei16for32()">
        <span class="karte btncard bincard">32</span> &larr; 2 x
        <span class="karte btncard bincard">16</span>
      </button>

      <button class="umtausch" @click="changezwei8for16()">
        <span class="karte btncard bincard">16</span> &larr; 2 x
        <span class="karte btncard bincard">8</span>
      </button>

      <button class="umtausch" @click="changezwei4for8()">
        <span class="karte btncard bincard">8</span> &larr; 2 x
        <span class="karte btncard bincard">4</span>
      </button>

      <button class="umtausch" @click="changezwei2for4()">
        <span class="karte btncard bincard">4</span> &larr; 2 x
        <span class="karte btncard bincard">2</span>
      </button>

      <button class="umtausch" @click="changezwei1for2()">
        <span class="karte btncard bincard">2</span> &larr; 2 x
        <span class="karte btncard bincard">1</span>
      </button>
    </div>

    <p style="color: red" v-if="notmorethan2">
      Du brauchst mindestens 2 Karten von dieser Einheit um zu tauschen!
    </p>
    <br />
    <br />

    <Newtask :task="'Binaersystem_4'" />

    <Nexttask @next_task="reloadPage()" />

    <button @click="showTutorial()" class="btn_submit">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Hilfe
    </button>

    <button @click="submit()" class="btn_submit" v-if="addup">
      <img src="../assets/icons/check.png" class="icon" />
      <br />Überprüfen
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
import Header from "@/components/Header.vue";
import Newtask from "@/components/Newtask.vue";
import Nexttask from "@/components/Nexttask.vue";
import Footer from "@/components/Footer.vue";
import Verifier from "@/components/Verifier.vue";
import Tutorial from "@/components/Tutorial.vue";

export default {
  components: { Header, Newtask, Nexttask, Footer, Verifier, Tutorial },
  data() {
    return {
      summand1randomnumber: Math.floor(Math.random() * 63) + 1,
      summand2randomnumber: Math.floor(Math.random() * 63) + 1,
      summerandomnumber: 0,
      eingabesummand1: "",
      eingabesummand2: "",
      eingabesumme: "",
      summand1_32: 0,
      summand1_16: 0,
      summand1_8: 0,
      summand1_4: 0,
      summand1_2: 0,
      summand1_1: 0,
      summand2_32: 0,
      summand2_16: 0,
      summand2_8: 0,
      summand2_4: 0,
      summand2_2: 0,
      summand2_1: 0,
      summe_32: 0,
      summe_16: 0,
      summe_8: 0,
      summe_4: 0,
      summe_2: 0,
      summe_1: 0,
      umtausch_64: 0,
      umtausch_32: 0,
      umtausch_16: 0,
      umtausch_8: 0,
      umtausch_4: 0,
      umtausch_2: 0,
      umtausch_1: 0,
      addup: false,
      notmorethan2: 0,
      submitted: false,
      result_64: 0,
      resutl_32: 0,
      result_16: 0,
      result_8: 0,
      result_4: 0,
      result_2: 0,
      result_1: 0,
      result: false,
      hint: false
    };
  },
  created: function () {
    var temp1 = this.summand1randomnumber;
    var temp2 = this.summand2randomnumber;
    var tempres = this.summand1randomnumber + this.summand2randomnumber;

    // Summand1 Values
    if (temp1 >= 32) {
      this.summand1_32 = 1;
      temp1 = temp1 - 32;
    }
    if (temp1 >= 16) {
      this.summand1_16 = 1;
      temp1 = temp1 - 16;
    }
    if (temp1 >= 8) {
      this.summand1_8 = 1;
      temp1 = temp1 - 8;
    }
    if (temp1 >= 4) {
      this.summand1_4 = 1;
      temp1 = temp1 - 4;
    }
    if (temp1 >= 2) {
      this.summand1_2 = 1;
      temp1 = temp1 - 2;
    }
    if (temp1 >= 1) {
      this.summand1_1 = 1;
      temp1 = temp1 - 1;
    }

    console.log(this.summand1randomnumber);

    // Summand2 Values
    if (temp2 >= 32) {
      this.summand2_32 = 1;
      temp2 = temp2 - 32;
    }
    if (temp2 >= 16) {
      this.summand2_16 = 1;
      temp2 = temp2 - 16;
    }
    if (temp2 >= 8) {
      this.summand2_8 = 1;
      temp2 = temp2 - 8;
    }
    if (temp2 >= 4) {
      this.summand2_4 = 1;
      temp2 = temp2 - 4;
    }
    if (temp2 >= 2) {
      this.summand2_2 = 1;
      temp2 = temp2 - 2;
    }
    if (temp2 >= 1) {
      this.summand2_1 = 1;
      temp2 = temp2 - 1;
    }

    // Summe
    this.summerandomnumber =
      this.summand1randomnumber + this.summand2randomnumber;
    this.summe_32 = this.summand1_32 + this.summand2_32;
    this.summe_16 = this.summand1_16 + this.summand2_16;
    this.summe_8 = this.summand1_8 + this.summand2_8;
    this.summe_4 = this.summand1_4 + this.summand2_4;
    this.summe_2 = this.summand1_2 + this.summand2_2;
    this.summe_1 = this.summand1_1 + this.summand2_1;

    // Result
    if (tempres >= 64) {
      this.result_64 = 1;
      tempres = tempres - 64;
    }
    if (tempres >= 32) {
      this.result_32 = 1;
      tempres = tempres - 32;
    }
    if (tempres >= 16) {
      this.result_16 = 1;
      tempres = tempres - 16;
    }
    if (tempres >= 8) {
      this.result_8 = 1;
      tempres = tempres - 8;
    }
    if (tempres >= 4) {
      this.result_4 = 1;
      tempres = tempres - 4;
    }
    if (tempres >= 2) {
      this.result_2 = 1;
      tempres = tempres - 2;
    }
    if (tempres >= 1) {
      this.result_1 = 1;
      tempres = tempres - 1;
    }

    console.log(this.summand2randomnumber);
  },
  methods: {
    reloadPage() {
      this.$router.go(0);
    },
    submit() {
      this.checkResult();
      this.submitted = true;
    },
    checkResult() {
      if (
        this.result_64 == this.umtausch_64 &&
        this.result_32 == this.summe_32 + this.umtausch_32 &&
        this.result_16 == this.summe_16 + this.umtausch_16 &&
        this.result_8 == this.summe_8 + this.umtausch_8 &&
        this.result_4 == this.summe_4 + this.umtausch_4 &&
        this.result_2 == this.summe_2 + this.umtausch_2 &&
        this.result_1 == this.summe_1 &&
        this.eingabesummand1 == this.summand1randomnumber &&
        this.eingabesummand2 == this.summand2randomnumber &&
        this.eingabesumme == this.summerandomnumber
      ) {
        console.log(this.summand1randomnumber, this.summand2randomnumber, this.summerandomnumber)
        this.result = true;
      } else {
          console.log(this.summand1randomnumber, this.summand2randomnumber, this.summerandomnumber)
        this.result = false;
      }
    },
    add() {
      this.addup = true;
    },
    changezwei32for64() {
      if (this.summe_32 + this.umtausch_32 >= 2) {
        if (this.umtausch_32 > 0) {
          this.umtausch_32 = this.umtausch_32 - 1;
          this.summe_32 = this.summe_32 - 1;
        } else {
          this.summe_32 = this.summe_32 - 2;
        }
        this.umtausch_64 = this.umtausch_64 + 1;
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changezwei16for32() {
      if (this.summe_16 + this.umtausch_16 >= 2) {
        if (this.umtausch_16 > 0) {
          this.umtausch_16 = this.umtausch_16 - 1;
          this.summe_16 = this.summe_16 - 1;
        } else {
          this.summe_16 = this.summe_16 - 2;
        }
        this.umtausch_32 = this.umtausch_32 + 1;
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changezwei8for16() {
      if (this.summe_8 + this.umtausch_8 >= 2) {
        if (this.umtausch_8 > 0) {
          this.umtausch_8 = this.umtausch_8 - 1;
          this.summe_8 = this.summe_8 - 1;
        } else {
          this.summe_8 = this.summe_8 - 2;
        }
        this.umtausch_16 = this.umtausch_16 + 1;
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changezwei4for8() {
      if (this.summe_4 + this.umtausch_4 >= 2) {
        if (this.umtausch_4 > 0) {
          this.umtausch_4 = this.umtausch_4 - 1;
          this.summe_4 = this.summe_4 - 1;
        } else {
          this.summe_4 = this.summe_4 - 2;
        }
        this.umtausch_8 = this.umtausch_8 + 1;
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changezwei2for4() {
      if (this.summe_2 + this.umtausch_2 >= 2) {
        if (this.umtausch_2 > 0) {
          this.umtausch_2 = this.umtausch_2 - 1;
          this.summe_2 = this.summe_2 - 1;
        } else {
          this.summe_2 = this.summe_2 - 2;
        }
        this.umtausch_4 = this.umtausch_4 + 1;
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    changezwei1for2() {
      if (this.summe_1 + this.umtausch_1 >= 2) {
        if (this.umtausch_1 > 0) {
          this.umtausch_1 = this.umtausch_1 - 1;
          this.summe_1 = this.summe_1 - 1;
        } else {
          this.summe_1 = this.summe_1 - 2;
        }
        this.umtausch_2 = this.umtausch_2 + 1;
        this.notmorethan2 = false;
      } else {
        this.notmorethan2 = true;
      }
    },
    newUmtausch(i) {
      setTimeout(function () {
        document
          .querySelectorAll(".exchange")
          .forEach((x) => x.classList.remove("exchange"));
      }, 5000);
      return i;
    },
    showHint(){
        this.hint = true;
    },
    removeHint(){
        this.hint = false;
    }
  },
};
</script>

<style>
.bin3 {
    height: 65px;
    max-width: 800px;
}
.summe_bin3 {
    height: 150px;
}
.summe_width {
    max-width: 800px;
}
.bincard {
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    padding-left: 15px;
    padding-right: 15px;
}
</style>