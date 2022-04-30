<template>
  <div>
    <Header
      :title="'Dezimalzahlen addieren'"
      :taskdescription="'Bestimme die beiden Summanden und die Summe. Addiere sie korrekt zusammen, indem du die Karten Karten korrekt umtauschst.'"
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
      <div class="einheit">
        <div v-for="index in summand1tausender" :key="index" class="karte">
          1000
        </div>
      </div>
      <div class="einheit">
        <div v-for="index in summand1hunderter" :key="index" class="karte">
          100
        </div>
      </div>
      <div class="einheit">
        <div v-for="index in summand1zehner" :key="index" class="karte">10</div>
      </div>
      <div class="einheit">
        <div v-for="index in summand1einer" :key="index" class="karte">1</div>
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
      <div class="einheit">
        <div v-for="index in summand2tausender" :key="index" class="karte">
          1000
        </div>
      </div>
      <div class="einheit">
        <div v-for="index in summand2hunderter" :key="index" class="karte">
          100
        </div>
      </div>
      <div class="einheit">
        <div v-for="index in summand2zehner" :key="index" class="karte">10</div>
      </div>
      <div class="einheit">
        <div v-for="index in summand2einer" :key="index" class="karte">1</div>
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
    <div class="zahl" v-if="addup">
      <div class="einheit summe">
        <div v-for="index in summezehntausender" :key="index" class="karte">
          10000
        </div>

        <div v-for="index in umtauschzehntausender" :key="index" class="karte exchange">
          {{newUmtausch(10000)}}
        </div>
      </div>
      <div class="einheit summe">
        <div v-for="index in summetausender" :key="index" class="karte">
          1000
        </div>

        <div v-for="index in umtauschtausender" :key="index" class="karte exchange">
          {{newUmtausch(1000)}}
        </div>
      </div>
      <div class="einheit summe">
        <div v-for="index in summehunderter" :key="index" class="karte">
          100
        </div>

        <div v-for="index in umtauschhunderter" :key="index" class="karte exchange">
          {{newUmtausch(100)}}
        </div>
      </div>
      <div class="einheit summe">
        <div v-for="index in summezehner" :key="index" class="karte">10</div>

        <div v-for="index in umtauschzehner" :key="index" class="karte exchange">{{newUmtausch(10)}}</div>
      </div>
      <div class="einheit summe">
        <div v-for="index in summeeiner" :key="index" class="karte">1</div>
      </div>
    </div>

    <br />
    <br />

    <div v-if="addup">
      <button class="umtausch" @click="changetausenderforzehntausender()">
        <span class="karte btncard">10000</span> &larr; 10 x
        <span class="karte btncard">1000</span>
      </button>

      <button class="umtausch" @click="changehunderterfortausender()">
        <span class="karte btncard">1000</span> &larr; 10 x
        <span class="karte btncard">100</span>
      </button>

      <button class="umtausch" @click="changezehnerforhunderter()">
        <span class="karte btncard">100</span> &larr; 10 x
        <span class="karte btncard">10</span>
      </button>

      <button class="umtausch" @click="changeeinerforzehner()">
        <span class="karte btncard">10</span> &larr; 10 x
        <span class="karte btncard">1</span>
      </button>
    </div>

    <p style="color: red" v-if="notmorethan10">
      Du brauchst mindestens 10 Karten von dieser Einheit um zu tauschen!
    </p>
    <br />
    <br />
    <Newtask :task="'Romansystem_1'" />

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
      summand2randomnumber: Math.floor(Math.random() * (9999 - 1 + 1)) + 1,
      summand1randomnumber: Math.floor(Math.random() * (9999 - 1 + 1)) + 1,
      summerandomnumber: 0,
      usereingabesummand1: 0,
      usereingabesummand2: 0,
      summand1tausender: 0,
      summand1hunderter: 0,
      summand1zehner: 0,
      summand1einer: 0,
      summand2tausender: 0,
      summand2hunderter: 0,
      summand2zehner: 0,
      summand2einer: 0,
      summezehntausender: 0,
      summetausender: 0,
      summehunderter: 0,
      summezehner: 0,
      summeeiner: 0,
      resultzehntausender: 0,
      resulttausender: 0,
      resulthunderter: 0,
      resultzehner: 0,
      resulteiner: 0,
      addup: false,
      morethan10tausender: false,
      morethan10hunderter: false,
      morethan10zehner: false,
      morethan10einer: false,
      result: false,
      submitted: false,
      eingabesummand1: "",
      eingabesummand2: "",
      eingabesumme: "",
      notmorethan10: false,
      tutorialActive: false,
      umtauschzehntausender: 0,
      umtauschtausender: 0,
      umtauschhunderter: 0,
      umtauschzehner: 0,
    };
  },
  created: function () {
    // Summand1 Values
    this.summand1tausender = Math.floor(this.summand1randomnumber / 1000);
    this.summand1hunderter = Math.floor(
      (this.summand1randomnumber % 1000) / 100
    );
    this.summand1zehner = Math.floor((this.summand1randomnumber % 100) / 10);
    this.summand1einer = this.summand1randomnumber % 10;

    // Summand2 Values
    this.summand2tausender = Math.floor(this.summand2randomnumber / 1000);
    this.summand2hunderter = Math.floor(
      (this.summand2randomnumber % 1000) / 100
    );
    this.summand2zehner = Math.floor((this.summand2randomnumber % 100) / 10);
    this.summand2einer = this.summand2randomnumber % 10;

    // Summe Values
    this.summetausender = this.summand1tausender + this.summand2tausender;
    this.summehunderter = this.summand1hunderter + this.summand2hunderter;
    this.summezehner = this.summand1zehner + this.summand2zehner;
    this.summeeiner = this.summand1einer + this.summand2einer;

    // Summe Values
    this.summerandomnumber =
      this.summand1randomnumber + this.summand2randomnumber;
    this.resultzehntausender = Math.floor(this.summerandomnumber / 10000);
    this.resulttausender = Math.floor((this.summerandomnumber % 10000) / 1000);
    this.resulthunderter = Math.floor((this.summerandomnumber % 1000) / 100);
    this.resultzehner = Math.floor((this.summerandomnumber % 100) / 10);
    this.resulteiner = this.summerandomnumber % 10;
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
        this.resultzehntausender == this.summezehntausender + this.umtauschzehntausender &&
        this.resulttausender == this.summetausender + this.umtauschtausender &&
        this.resulthunderter == this.summehunderter + this.umtauschhunderter &&
        this.resultzehner == this.summezehner + this.umtauschzehner &&
        this.resulteiner == this.summeeiner &&
        this.eingabesummand1 == this.summand1randomnumber &&
        this.eingabesummand2 == this.summand2randomnumber &&
        this.eingabesumme ==
          this.resultzehntausender * 10000 +
            this.resulttausender * 1000 +
            this.resulthunderter * 100 +
            this.resultzehner * 10 +
            this.resulteiner
      ) {
        console.log(this.resulteiner, this.resultzehner, this.resulthunderter, this.resulttausender, this.resultzehntausender);
        this.result = true;
      } else {
        console.log(this.resultzehntausender+this.umtauschzehntausender, this.resulttausender+this.umtauschtausender, this.resulthunderter+this.umtauschhunderter, this.resultzehner+this.umtauschzehner, this.resulteiner);
        this.result = false;
      }
    },
    add() {
      this.addup = true;
      this.checkmorethan10();
    },
    checkmorethan10() {
      if (this.summetausender > 9) {
        this.morethan10tausender = true;
      } else {
        this.morethan10tausender = false;
      }

      if (this.summehunderter > 9) {
        this.morethan10hunderter = true;
      } else {
        this.morethan10hunderter = false;
      }

      if (this.summezehner > 9) {
        this.morethan10zehner = true;
      } else {
        this.morethan10zehner = false;
      }

      if (this.summeeiner > 9) {
        this.morethan10einer = true;
      } else {
        this.morethan10einer = false;
      }
    },
    changetausenderforzehntausender() {

      if (this.summetausender+this.umtauschtausender > 9) {
        if(this.umtauschtausender > 0){
          this.umtauschtausender = this.umtauschtausender -1;
          this.summetausender = this.summetausender - 9;
        }else {
          this.summetausender = this.summetausender - 10;
        }
        this.umtauschzehntausender = this.umtauschzehntausender + 1;
        this.checkmorethan10();
        this.notmorethan10 = false;
      } else {
        this.notmorethan10 = true;
      }
    },
    changehunderterfortausender() {
      if (this.summehunderter + this.umtauschhunderter > 9) {
        if(this.umtauschhunderter > 0){
          this.umtauschhunderter = this.umtauschhunderter - 1;
          this.summehunderter = this.summehunderter - 9;
        }else{
          this.summehunderter = this.summehunderter -10;
        }
        this.umtauschtausender = this.umtauschtausender + 1;
        this.checkmorethan10();
        this.notmorethan10 = false;
      } else {
        this.notmorethan10 = true;
      }
    },
    changezehnerforhunderter() {
      if (this.summezehner+this.umtauschzehner > 9) {
        if(this.umtauschzehner > 0){
          this.umtauschzehner = this.umtauschzehner-1;
          this.summezehner = this.summezehner-9;
        }else{
          this.summezehner = this.summezehner - 10;
        }
        this.umtauschhunderter = this.umtauschhunderter + 1;
        this.checkmorethan10();
        this.notmorethan10 = false;
      } else {
        this.notmorethan10 = true;
      }
    },
    changeeinerforzehner() {
      if (this.summeeiner > 9) {
        this.summeeiner = this.summeeiner - 10;
        this.umtauschzehner = this.umtauschzehner + 1;
        this.checkmorethan10();
        this.notmorethan10 = false;
      } else {
        this.notmorethan10 = true;
      }
    },
    showTutorial() {
      this.tutorialActive = true;
    },
    getTaskDescription() {
      return "In dieser Aufgabe hast du zwei Zahlen in form von Karten gegeben. Deine Aufgabe besteht darin diese beiden Zahlen zu bestimmen. Anschliessend addierst du die beiden Zahlen, indem du auf den + Knopf drückst. Nun musst du sicherstellen, dass von jeder Grösse nicht mehr als 9 Karten gegeben sind. Dies kannst du garantieren, indem du zwischen den Grössen korrekt umtauschst.";
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
  text-align: center;
  padding: 10px 40px 10px 40px;
  border-radius: 10px;
  background-color: rgb(230, 230, 156);
  cursor: pointer;
}
.addition:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.summe {
  height: 850px;
}
.umtausch {
  height: 40px;
  width: 200px;
  /* width: 110px; */
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
}
.btncard {
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: normal;
  margin: 5px;
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