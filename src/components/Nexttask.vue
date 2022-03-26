<template>
  <button @click="this.$router.go(0)" class="next_task">Neue Aufgabe</button>
</template>

<script>
export default {

}
</script>

<style>
.next_task {
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
}
.next_task:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>