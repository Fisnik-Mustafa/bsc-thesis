<template>
  <div>
    <transition name="modal-animation">
      <div v-show="modalActive" class="modal">
        <transition name="modal-animation-inner">
          <div>
            <div v-show="modalActive" class="modal-inner"></div>
            <i class="far fa-times-circle"></i>
            <slot />
            <!-- Modal Content -->
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["modalActive"],
};
</script>

<style>
</style>