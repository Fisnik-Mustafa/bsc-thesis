<template>
  <div>
    <h1>Dezimalsystem_3</h1>
    <Backtohomepage />
    <p>
      Bestimme die beiden Summanden und addiere sie korrekt zusammen, indem du
      die Karten korrekt umtauschst
    </p>
    <p>{{ summand1randomnumber }}</p>
    <p>{{ summand2randomnumber }}</p>
    <p>{{ summerandomnumber }}</p>
    <hr style="color: black" />

    <h2>Summand 1</h2>
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

    <h2>Summand 2</h2>
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

    <h2>Summe</h2>
    <div class="zahl" v-if="addup">
      <div class="einheit summe">
        <div v-for="index in summezehntausender" :key="index" class="karte">
          10000
        </div>
      </div>
      <div class="einheit summe">
        <div v-for="index in summetausender" :key="index" class="karte">
          1000
        </div>
      </div>
      <div class="einheit summe">
        <div v-for="index in summehunderter" :key="index" class="karte">
          100
        </div>
      </div>
      <div class="einheit summe">
        <div v-for="index in summezehner" :key="index" class="karte">10</div>
      </div>
      <div class="einheit summe">
        <div v-for="index in summeeiner" :key="index" class="karte">1</div>
      </div>
    </div>
    <br>
    <div class="umtausch" v-if="addup">
      <button>10000 <i class="arrow left"></i> 9*1000</button>
      <button>1000 <i class="arrow left"></i> 9*100</button>
      <button>100 <i class="arrow left"></i> 9*10</button>
      <button>10 <i class="arrow left"></i> 9*1</button>
    </div>
  </div>
</template>

<script>
import Backtohomepage from "@/components/Backtohomepage.vue";

export default {
  components: { Backtohomepage },
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
    add() {
      this.addup = true;
    },
  },
};
</script>

<style>
.addition {
  text-align: center;
  padding: 10px 40px 10px 40px;
}
.summe {
  height: 820px;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>