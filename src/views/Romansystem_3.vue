<template>
  <div>
    <Header
      :title="'Vorrömische Zahlen mithilfe der Kartendarstellung addieren'"
      :taskdescription="'Bestimme die Summanden und die Summe. Addiere sie korrekt zusammen, indem du die Summe in die korrekte Kartendarstellung bringst.'"
      :bildname="'7_9_Daten_Kap2_Roemer_Pferd'"
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="'Achte darauf, dass du korrekt umtauschst!'"
      @close-verifier="this.submitted = false"
    />

    <Tutorial
      :description="getTaskDescription()"
      :video_name="'Tutorial_Romansystem3'"
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
    <div class="zahl roman">
      <div class="einheit roman_einheit">
        <div v-for="index in M1" :key="index" class="karte">M</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in D1" :key="index" class="karte">D</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in C1" :key="index" class="karte">C</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in L1" :key="index" class="karte">L</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in X1" :key="index" class="karte">X</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in V1" :key="index" class="karte">V</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in I1" :key="index" class="karte">I</div>
      </div>
    </div>

    <br />
    <button class="addition" @click="add()">+</button>
    <br />

    <h2>
      Summand 2:
      <input
        type="number"
        placeholder="Summand2"
        v-model="eingabesummand2"
        class="field"
      />
    </h2>
    <div class="zahl roman">
      <div class="einheit roman_einheit">
        <div v-for="index in M2" :key="index" class="karte">M</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in D2" :key="index" class="karte">D</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in C2" :key="index" class="karte">C</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in L2" :key="index" class="karte">L</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in X2" :key="index" class="karte">X</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in V2" :key="index" class="karte">V</div>
      </div>

      <div class="einheit roman_einheit">
        <div v-for="index in I2" :key="index" class="karte">I</div>
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
    <div class="zahl roman" v-if="addup">
      <div class="einheit roman_einheit summe">
        <div v-for="index in M3" :key="index" class="karte">M</div>

        <div v-for="index in umtauschM" :key="index" class="karte exchange">{{newUmtausch('M')}}</div>
      </div>

      <div class="einheit roman_einheit summe">
        <div v-for="index in D3" :key="index" class="karte">D</div>
      
        <div v-for="index in umtauschD" :key="index" class="karte exchange">{{newUmtausch('D')}}</div>
      </div>

      <div class="einheit roman_einheit summe">
        <div v-for="index in C3" :key="index" class="karte">C</div>

        <div v-for="index in umtauschC" :key="index" class="karte exchange">{{newUmtausch('C')}}</div>
      </div>

      <div class="einheit roman_einheit summe">
        <div v-for="index in L3" :key="index" class="karte">L</div>

        <div v-for="index in umtauschL" :key="index" class="karte exchange">{{newUmtausch('L')}}</div>
      </div>

      <div class="einheit roman_einheit summe">
        <div v-for="index in X3" :key="index" class="karte">X</div>

        <div v-for="index in umtauschX" :key="index" class="karte exchange">{{newUmtausch('X')}}</div>
      </div>

      <div class="einheit roman_einheit summe">
        <div v-for="index in V3" :key="index" class="karte">V</div>
      
        <div v-for="index in umtauschV" :key="index" class="karte exchange">{{newUmtausch('V')}}</div>
      </div>

      <div class="einheit roman_einheit summe">
        <div v-for="index in I3" :key="index" class="karte">I</div>
      </div>
    </div>

    <br />

    <div v-if="addup">
      <button class="umtausch" @click="changeDforM()">
        <span class="karte btncard rm">M</span> &larr; 2 x
        <span class="karte btncard rm">D</span>
      </button>
      <button class="umtausch" @click="changeCforD()">
        <span class="karte btncard rm">D</span> &larr; 5 x
        <span class="karte btncard rm">C</span>
      </button>
      <button class="umtausch" @click="changeLforC()">
        <span class="karte btncard rm">C</span> &larr; 2 x
        <span class="karte btncard rm">L</span>
      </button>
      <button class="umtausch" @click="changeXforL()">
        <span class="karte btncard rm">L</span> &larr; 5 x
        <span class="karte btncard rm">X</span>
      </button>
      <button class="umtausch" @click="changeVforX()">
        <span class="karte btncard rm">X</span> &larr; 2 x
        <span class="karte btncard rm">V</span>
      </button>
      <button class="umtausch" @click="changeIforV()">
        <span class="karte btncard rm">V</span> &larr; 5 x
        <span class="karte btncard rm">I</span>
      </button>
    </div>
    <p style="color: red" v-if="notmorethan2D">
      Du benötigst mindestens 2 Karten von dieser Einheit damit du korrekt
      umtauschen kannst!
    </p>
    <p style="color: red" v-if="notmorethan5C">
      Du benötigst mindestens 5 Karten von dieser Einheit damit du korrekt
      umtauschen kannst!
    </p>
    <p style="color: red" v-if="notmorethan2L">
      Du benötigst mindestens 2 Karten von dieser Einheit damit du korrekt
      umtauschen kannst!
    </p>
    <p style="color: red" v-if="notmorethan5X">
      Du benötigst mindestens 5 Karten von dieser Einheit damit du korrekt
      umtauschen kannst!
    </p>
    <p style="color: red" v-if="notmorethan2V">
      Du benötigst mindestens 2 Karten von dieser Einheit damit du korrekt
      umtauschen kannst!
    </p>
    <p style="color: red" v-if="notmorethan5I">
      Du benötigst mindestens 5 Karten von dieser Einheit damit du korrekt
      umtauschen kannst!
    </p>

    <br />
    <Newtask :task="'Binaersystem_1'" />

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
        src="../assets/hints/hint_roman_1.png"
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
import Footer from "@/components/Footer.vue";
import Tutorial from "@/components/Tutorial.vue";

export default {
  components: { Nexttask, Verifier, Newtask, Header, Footer, Tutorial },
  data() {
    return {
      randomnumber1: Math.floor(Math.random() * (9999 - 1 + 1)) + 1,
      randomnumber2: Math.floor(Math.random() * (9999 - 1 + 1)) + 1,
      M1: 0,
      D1: 0,
      C1: 0,
      L1: 0,
      X1: 0,
      V1: 0,
      I1: 0,
      M2: 0,
      D2: 0,
      C2: 0,
      L2: 0,
      X2: 0,
      V2: 0,
      I2: 0,
      M3: 0,
      D3: 0,
      C3: 0,
      L3: 0,
      X3: 0,
      V3: 0,
      I3: 0,
      Mresult: 0,
      Dresult: 0,
      Cresult: 0,
      Lresult: 0,
      Xresult: 0,
      Vresult: 0,
      Iresult: 0,
      addup: false,
      morethan2D: false,
      morethan5C: false,
      morethan2L: false,
      morethan5X: false,
      morethan2V: false,
      morethan5I: false,
      hint: false,
      submitted: false,
      result: false,
      sum: 0,
      eingabesummand1: "",
      eingabesummand2: "",
      eingabesumme: "",
      notmorethan2D: false,
      notmorethan5C: false,
      notmorethan2L: false,
      notmorethan5X: false,
      notmorethan2V: false,
      notmorethan5I: false,
      tutorialActive: false,
      umtauschV: 0,
      umtauschX: 0,
      umtauschL: 0,
      umtauschC: 0,
      umtauschD: 0,
      umtauschM: 0
    };
  },
  created: function () {
    let temp = 0;
    this.sum = this.randomnumber1 + this.randomnumber2;

    // M1
    this.M1 = Math.floor(this.randomnumber1 / 1000);
    temp = this.randomnumber1 % 1000;

    // D1
    this.D1 = Math.floor(temp / 500);
    temp = temp % 500;

    // C1
    this.C1 = Math.floor(temp / 100);
    temp = temp % 100;

    // L1
    this.L1 = Math.floor(temp / 50);
    temp = temp % 50;

    // X1
    this.X1 = Math.floor(temp / 10);
    temp = temp % 10;

    // V1
    this.V1 = Math.floor(temp / 5);
    temp = temp % 5;

    // I1
    this.I1 = temp;

    // M2
    this.M2 = Math.floor(this.randomnumber2 / 1000);
    temp = this.randomnumber2 % 1000;

    // D2
    this.D2 = Math.floor(temp / 500);
    temp = temp % 500;

    // C2
    this.C2 = Math.floor(temp / 100);
    temp = temp % 100;

    // L2
    this.L2 = Math.floor(temp / 50);
    temp = temp % 50;

    // X1
    this.X2 = Math.floor(temp / 10);
    temp = temp % 10;

    // V2
    this.V2 = Math.floor(temp / 5);
    temp = temp % 5;

    // I2
    this.I2 = temp;

    // Mresult
    this.Mresult = Math.floor(this.sum / 1000);
    temp = this.sum % 1000;

    // Dresult
    this.Dresult = Math.floor(temp / 500);
    temp = temp % 500;

    // Cresult
    this.Cresult = Math.floor(temp / 100);
    temp = temp % 100;

    // Lresult
    this.Lresult = Math.floor(temp / 50);
    temp = temp % 50;

    // Xresult
    this.Xresult = Math.floor(temp / 10);
    temp = temp % 10;

    // Vresult
    this.Vresult = Math.floor(temp / 5);
    temp = temp % 5;

    // Iresult
    this.Iresult = temp;
  },
  methods: {
    reloadPage() {
      this.$router.go(0);
    },
    add() {
      this.M3 = this.M1 + this.M2;
      this.D3 = this.D1 + this.D2;
      this.C3 = this.C1 + this.C2;
      this.L3 = this.L1 + this.L2;
      this.X3 = this.X1 + this.X2;
      this.V3 = this.V1 + this.V2;
      this.I3 = this.I1 + this.I2;
      this.checkmorethan();
      this.addup = true;
    },
    checkmorethan() {
      if (this.D3 >= 2) {
        this.morethan2D = true;
      } else {
        this.morethan2D = false;
      }
      if (this.C3 >= 5) {
        this.morethan5C = true;
      } else {
        this.morethan5C = false;
      }
      if (this.L3 >= 2) {
        this.morethan2L = true;
      } else {
        this.morethan2L = false;
      }
      if (this.X3 >= 5) {
        this.morethan5X = true;
      } else {
        this.morethan5X = false;
      }
      if (this.V3 >= 2) {
        this.morethan2V = true;
      } else {
        this.morethan2V = false;
      }
      if (this.I3 >= 5) {
        this.morethan5I = true;
      } else {
        this.morethan5I = false;
      }
    },
    changeDforM() {
      if (this.D3+this.umtauschD >= 2) {
        if(this.umtauschD > 0){
          this.umtauschD = this.umtauschD - 1;
          this.D3 = this.D3 -1;
        }else {
          this.D3 = this.D3 - 2;
        }
        this.umtauschM = this.umtauschM + 1;
        this.checkmorethan();
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      } else {
        this.notmorethan2D = true;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      }
    },
    changeCforD() {
      if (this.C3 + this.umtauschC >= 5) {
        if(this.umtauschC > 0){
          this.umtauschC = this.umtauschC - 1;
          this.C3 = this.C3 - 4;
        }else {
          this.C3 = this.C3 - 5;
        }
        this.umtauschD = this.umtauschD + 1;
        this.checkmorethan();
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      } else {
        this.notmorethan2D = false;
        this.notmorethan5C = true;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      }
    },
    changeLforC() {
      if (this.L3 + this.umtauschL >= 2) {
        if(this.umtauschL > 0){
          this.umtauschL = this.umtauschL - 1;
          this.L3 = this.L3 - 1;
          this.umtauschC = this.umtauschC + 1;
        }else {
          this.L3 = this.L3 - 2;
          this.umtauschC = this.umtauschC + 1;
        }
        this.checkmorethan();
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      } else {
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = true;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      }
    },
    changeXforL() {
      if (this.X3 + this.umtauschX >= 5) {
        if(this.umtauschX > 0){
          this.umtauschX = this.umtauschX-1;
          this.X3 = this.X3-4;
        }else {
          this.X3 = this.X3 - 5;
        }
        this.umtauschL = this.umtauschL + 1;
        this.checkmorethan();
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      } else {
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = true;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      }
    },
    changeVforX() {
      if (this.V3 + this.umtauschV >= 2) {
        if(this.umtauschV > 0){
          this.umtauschV = this.umtauschV - 1;
          this.V3 = this.V3 - 1;
        }else{
          this.V3 = this.V3 - 2;  
        }
        this.umtauschX = this.umtauschX + 1;        
        this.checkmorethan();
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      } else {
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = true;
        this.notmorethan5I = false;
      }
    },
    changeIforV() {
      if (this.I3 >= 5) {
        this.umtauschV = this.umtauschV + 1
        this.I3 = this.I3 - 5;
        this.checkmorethan();
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = false;
      } else {
        this.notmorethan2D = false;
        this.notmorethan5C = false;
        this.notmorethan2L = false;
        this.notmorethan5X = false;
        this.notmorethan2V = false;
        this.notmorethan5I = true;
      }
    },
    showHint() {
      this.hint = true;
    },
    removeHint() {
      this.hint = false;
    },
    submit() {
      if (
        this.M3 + this.umtauschM == this.Mresult &&
        this.D3 + this.umtauschD == this.Dresult &&
        this.C3 + this.umtauschC == this.Cresult &&
        this.L3 + this.umtauschL == this.Lresult &&
        this.X3 + this.umtauschX == this.Xresult &&
        this.V3 + this.umtauschV == this.Vresult &&
        this.I3 == this.Iresult &&
        this.eingabesummand1 == this.randomnumber1 &&
        this.eingabesummand2 == this.randomnumber2 &&
        this.eingabesumme ==
          (this.M3 + this.umtauschM) * 1000 +
            (this.D3 + this.umtauschD) * 500 +
            (this.C3 + this.umtauschC) * 100 +
            (this.L3 + this.umtauschL) * 50 +
            (this.X3 + this.umtauschX) * 10 +
            (this.V3 + this.umtauschV) * 5 +
            this.I3
      ) {
        this.result = true;
      } else {
        this.result = false;
      }
      this.submitted = true;
    },
    getTaskDescription() {
      return "In dieser Aufgabe hast du zwei Zahlen im vorrömischen System gegeben. Bestimme deren Wert als Dezimalzahl. Addiere beide Zahlen zusammen, indem du auf den Plus-Knopf drückst. Anschliessend musst du sicherstellen, dass für jede Grösse nicht mehr Karten vorhanden sind als erlaubt. Du stellst dies sicher, indem du zwischen den Grössen korrekt umtauschst.";
    },
    showTutorial() {
      this.tutorialActive = true;
    },
    newUmtausch(i) {
      setTimeout(function(){
        document.querySelectorAll('.exchange').forEach((x) => x.classList.remove('exchange'))
      }, 5000);
      return i;
    }
  },
};
</script>

<style>
.addition {
  font-size: 25px;
  font-weight: bold;
}
.rm {
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