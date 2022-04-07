<template>
  <div>
    <Header
      :title="'Romansystem_3'"
      :taskdescription="'Bestimme die beiden Summanden und die Summe in der Dezimaldarstellung. Addiere sie korrekt zusammen, indem du die Karten korrekt umtauschst.'"
    />

    <Verifier
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="''"
      @close-verifier="this.submitted = false"
    />

    <h2>
      Summand 1:
      <input type="text" placeholder="Summand 1" v-model="eingabesummand1" />
    </h2>
    <div class="zahl roman">
      <div class="einheit">
        <div v-for="index in M1" :key="index" class="karte">M</div>
      </div>

      <div class="einheit">
        <div v-for="index in D1" :key="index" class="karte">D</div>
      </div>

      <div class="einheit">
        <div v-for="index in C1" :key="index" class="karte">C</div>
      </div>

      <div class="einheit">
        <div v-for="index in L1" :key="index" class="karte">L</div>
      </div>

      <div class="einheit">
        <div v-for="index in X1" :key="index" class="karte">X</div>
      </div>

      <div class="einheit">
        <div v-for="index in V1" :key="index" class="karte">V</div>
      </div>

      <div class="einheit">
        <div v-for="index in I1" :key="index" class="karte">I</div>
      </div>
    </div>

    <br />
    <button class="addition" @click="add()">+</button>
    <br />

    <h2>
      Summand 2:
      <input type="text" placeholder="Summand2" v-model="eingabesummand2" />
    </h2>
    <div class="zahl roman">
      <div class="einheit">
        <div v-for="index in M2" :key="index" class="karte">M</div>
      </div>

      <div class="einheit">
        <div v-for="index in D2" :key="index" class="karte">D</div>
      </div>

      <div class="einheit">
        <div v-for="index in C2" :key="index" class="karte">C</div>
      </div>

      <div class="einheit">
        <div v-for="index in L2" :key="index" class="karte">L</div>
      </div>

      <div class="einheit">
        <div v-for="index in X2" :key="index" class="karte">X</div>
      </div>

      <div class="einheit">
        <div v-for="index in V2" :key="index" class="karte">V</div>
      </div>

      <div class="einheit">
        <div v-for="index in I2" :key="index" class="karte">I</div>
      </div>
    </div>

    <h2 v-if="addup">
      Summe: <input type="text" placeholder="Summe" v-model="eingabesumme" />
    </h2>
    <div class="zahl roman" v-if="addup">
      <div class="einheit summe">
        <div v-for="index in M3" :key="index" class="karte">M</div>
      </div>

      <div class="einheit summe">
        <div v-for="index in D3" :key="index" class="karte">D</div>
      </div>

      <div class="einheit summe">
        <div v-for="index in C3" :key="index" class="karte">C</div>
      </div>

      <div class="einheit summe">
        <div v-for="index in L3" :key="index" class="karte">L</div>
      </div>

      <div class="einheit summe">
        <div v-for="index in X3" :key="index" class="karte">X</div>
      </div>

      <div class="einheit summe">
        <div v-for="index in V3" :key="index" class="karte">V</div>
      </div>

      <div class="einheit summe">
        <div v-for="index in I3" :key="index" class="karte">I</div>
      </div>
    </div>

    <br />

    <div v-if="addup">
      <button class="umtausch" v-if="morethan2D" @click="changeDforM()">
        M <i class="arrow left"></i> 2*D
      </button>
      <button class="umtausch" v-if="morethan5C" @click="changeCforD()">
        D <i class="arrow left"></i> 5*C
      </button>
      <button class="umtausch" v-if="morethan2L" @click="changeLforC()">
        C <i class="arrow left"></i> 2*L
      </button>
      <button class="umtausch" v-if="morethan5X" @click="changeXforL()">
        L <i class="arrow left"></i> 5*X
      </button>
      <button class="umtausch" v-if="morethan2V" @click="changeVforX()">
        X <i class="arrow left"></i> 2*V
      </button>
      <button class="umtausch" v-if="morethan5I" @click="changeIforV()">
        V <i class="arrow left"></i> 5*I
      </button>
    </div>

    <br />
    <Newtask :task="'Binaersystem_1'" />
    <Nexttask />
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
    <img src="../assets/hints/hint_roman_1.png" width="1000" v-if="hint" />
  </div>
</template>

<script>
import Nexttask from "@/components/Nexttask.vue";
import Verifier from "@/components/Verifier.vue";
import Newtask from "@/components/Newtask.vue";
import Header from "@/components/Header.vue";

export default {
  components: { Nexttask, Verifier, Newtask, Header },
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
      this.M3 = this.M3 + 1;
      this.D3 = this.D3 - 2;
      this.checkmorethan();
    },
    changeCforD() {
      this.D3 = this.D3 + 1;
      this.C3 = this.C3 - 5;
      this.checkmorethan();
    },
    changeLforC() {
      this.C3 = this.C3 + 1;
      this.L3 = this.L3 - 2;
      this.checkmorethan();
    },
    changeXforL() {
      this.L3 = this.L3 + 1;
      this.X3 = this.X3 - 5;
      this.checkmorethan();
    },
    changeVforX() {
      this.X3 = this.X3 + 1;
      this.V3 = this.V3 - 2;
      this.checkmorethan();
    },
    changeIforV() {
      this.V3 = this.V3 + 1;
      this.I3 = this.I3 - 5;
      this.checkmorethan();
    },
    showHint() {
      this.hint = true;
    },
    removeHint() {
      this.hint = false;
    },
    submit() {
      if (
        this.M3 == this.Mresult &&
        this.D3 == this.Dresult &&
        this.C3 == this.Cresult &&
        this.L3 == this.Lresult &&
        this.X3 == this.Xresult &&
        this.V3 == this.Vresult &&
        this.I3 == this.Iresult &&
        this.eingabesummand1 == this.randomnumber1 &&
        this.eingabesummand2 == this.randomnumber2 &&
        this.eingabesumme ==
          this.M3 * 1000 +
            this.D3 * 500 +
            this.C3 * 100 +
            this.L3 * 50 +
            this.X3 * 10 +
            this.V3 * 5 +
            this.I3
      ) {
        this.result = true;
      } else {
        this.result = false;
      }
      this.submitted = true;
    },
  },
};
</script>

<style>
.addition {
  font-size: 25px;
  font-weight: bold;
}
</style>