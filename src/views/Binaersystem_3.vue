<template>
  <div>
    <h1>Binaersystem_3</h1>
    <Backtohomepage />
    <p>Addiere beide Binärzahlen korrekt zusammen.</p>
    <hr />

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

    <hr v-if="addup" />

    <h2>Summe</h2>

    <div class="zahl" v-if="addup">
      
      <div class="einheit binaer" v-if="showposition_64">
        64
        <div v-for="index in position_64" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-if="showposition_32">
        32
        <div v-for="index in position_32" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-if="showposition_16">
        16
        <div v-for="index in position_16" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-if="showposition_8">
        8
        <div v-for="index in position_8" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-if="showposition_4">
        4
        <div v-for="index in position_4" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-if="showposition_2">
        2
        <div v-for="index in position_2" :key="index" class="karte">1</div>
      </div>
      <div class="einheit binaer" v-if="showposition_1">
        1
        <div v-for="index in position_1" :key="index" class="karte">1</div>
      </div>
    </div>

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
  </div>
</template>

<script>
import Backtohomepage from "@/components/Backtohomepage.vue";
export default {
  components: { Backtohomepage },
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
      showposition_1: false
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
    changesechzehnerforzweiunddressig(){
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
    changeviererforachter(){
      this.position_8 = this.position_8 + 1;
      this.position_4 = this.position_4 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();   
    },
    changezweierforvierer(){
      this.position_4 = this.position_4 + 1;
      this.position_2 = this.position_2 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();      
    },
    changeeinerforzweier(){
      this.position_2 = this.position_2 + 1;
      this.position_1 = this.position_1 - 2;
      this.checkmorethan2();
      this.checkboxtoshow();    
    },
    checkboxtoshow() {
      if(this.position_64 > 0){
        this.showposition_64 = true;
        this.showposition_32 = true;
        this.showposition_16 = true;
        this.showposition_8 = true;
        this.showposition_4 = true;
        this.showposition_2 = true;
        this.showposition_1 = true;
      }else if(this.position_32 > 0){
        this.showposition_64 = false;
        this.showposition_32 = true;
        this.showposition_16 = true;
        this.showposition_8 = true;
        this.showposition_4 = true;
        this.showposition_2 = true;
        this.showposition_1 = true;        
      }else if(this.position_16 > 0){
        this.showposition_64 = false;
        this.showposition_32 = false;
        this.showposition_16 = true;
        this.showposition_8 = true;
        this.showposition_4 = true;
        this.showposition_2 = true;
        this.showposition_1 = true;        
      }else if(this.position_8 > 0){
        this.showposition_64 = false;
        this.showposition_32 = false;
        this.showposition_16 = false;
        this.showposition_8 = true;
        this.showposition_4 = true;
        this.showposition_2 = true;
        this.showposition_1 = true;        
      }else if(this.position_4 > 0){
        this.showposition_64 = false;
        this.showposition_32 = false;
        this.showposition_16 = false;
        this.showposition_8 = false;
        this.showposition_4 = true;
        this.showposition_2 = true;
        this.showposition_1 = true;
      }else if(this.position_2 > 0){
        this.showposition_64 = false;
        this.showposition_32 = false;
        this.showposition_16 = false;
        this.showposition_8 = false;
        this.showposition_4 = false;
        this.showposition_2 = true;
        this.showposition_1 = true;       
      }else if(this.position_1 > 0){
        this.showposition_64 = false;
        this.showposition_32 = false;
        this.showposition_16 = false;
        this.showposition_8 = false;
        this.showposition_4 = false;
        this.showposition_2 = false;
        this.showposition_1 = true;         
      }
    }

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